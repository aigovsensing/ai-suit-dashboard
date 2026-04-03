
import os
import pymysql
import pandas as pd
from fastapi import FastAPI, Query, HTTPException
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse
from typing import Optional
from collector.builder import build_from_api, build_from_csv

app = FastAPI()

def get_conn():
    return pymysql.connect(
        host="mariadb",
        user="root",
        password="password",
        database="ai_lawsuits",
        cursorclass=pymysql.cursors.DictCursor
    )

@app.get("/api/cases")
def get_cases(file_name: Optional[str] = Query(None, description="Name of the CSV file in ./data/ to use")):
    """
    Main endpoint to fetch cases. 
    1. If file_name is provided and exists in ./data/, load from CSV.
    2. Otherwise, fetch live data from CourtListener API.
    """
    if file_name:
        csv_path = os.path.join("data", file_name)
        if os.path.exists(csv_path):
            try:
                data = build_from_csv(csv_path)
                return {"source": "csv", "file": file_name, "count": len(data), "data": data}
            except Exception as e:
                raise HTTPException(status_code=500, detail=f"Error processing CSV: {str(e)}")
        else:
            raise HTTPException(status_code=404, detail=f"File {file_name} not found in ./data/")
    
    # Default: Fetch from API
    try:
        data = build_from_api()
        return {"source": "api", "query": "artificial intelligence", "count": len(data), "data": data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Error fetching from API: {str(e)}")

@app.get("/api/db-cases")
def get_db_cases():
    """Fallback to original database functionality with proper connection closing"""
    conn = get_conn()
    try:
        cur = conn.cursor()
        cur.execute("SELECT * FROM lawsuits ORDER BY file_date DESC")
        data = cur.fetchall()
        return {"source": "database", "count": len(data), "data": data}
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Database error: {str(e)}")
    finally:
        conn.close()

@app.get("/api/files")
def list_data_files():
    """Helper to see available CSVs"""
    data_dir = "data"
    if not os.path.exists(data_dir):
        return []
    # Return files sorted by name descending (latest first)
    return sorted([f for f in os.listdir(data_dir) if f.endswith(".csv")], reverse=True)

# Mount frontend static files
app.mount("/css", StaticFiles(directory="frontend/css"), name="css")
app.mount("/js", StaticFiles(directory="frontend/js"), name="js")
app.mount("/assets", StaticFiles(directory="frontend/assets"), name="assets")
app.mount("/image", StaticFiles(directory="image"), name="image")
app.mount("/doc", StaticFiles(directory="doc"), name="doc")

@app.get("/")
def read_root():
    return FileResponse("frontend/index.html")
