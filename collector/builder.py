
import pandas as pd
import os
import requests
from collector.courtlistener import fetch_cases
from collector.processor import process

def build_from_api(query="artificial intelligence"):
    """
    Method 1: Directly make raw data from Courtlistener.com and RECAP.
    """
    print(f"Fetching data from CourtListener for query: {query}")
    raw_data = fetch_cases(query=query)
    processed_data = process(raw_data)
    return processed_data

def build_from_csv(file_path):
    """
    Method 2: Load and process raw data from a local CSV file.
    """
    if not os.path.exists(file_path):
        raise FileNotFoundError(f"CSV file not found: {file_path}")
    
    print(f"Loading data from CSV: {file_path}")
    # Skip first 2 lines based on format: 1. Title, 2. Extraction Date
    try:
        df = pd.read_csv(file_path, skiprows=2).fillna("")
        df.columns = df.columns.str.strip()
    except Exception as e:
        print(f"Error reading CSV: {e}")
        return []

    processed_data = []
    for _, row in df.iterrows():
        # Mapping CSV columns to a structured format for the visualizer
        case_data = {
            "case_name": row.get("소송제목 (원고 v. 피고)", "Unknown"),
            "file_date": row.get("소송제기일", "Unknown"),
            "case_no": row.get("소송번호", "Unknown"),
            "plaintiff": row.get("원고", "Unknown"),
            "defendant": row.get("피고", "Unknown"),
            "country": row.get("국가", "USA"),
            "court": row.get("법원", "Unknown"),
            "status": row.get("진행현황", "Unknown"),
            "reason": row.get("소송이유", "Unknown"),
            "url": row.get("Tracker", ""),
            "summary": row.get("개요 및 배경 (By Gauss)", "")
        }
        processed_data.append(case_data)
    
    return processed_data

if __name__ == "__main__":
    # Example usage
    # api_data = build_from_api()
    # print(f"API Data: {len(api_data)} cases")
    
    csv_path = "data/aisuit_20260313.csv"
    if os.path.exists(csv_path):
        csv_data = build_from_csv(csv_path)
        print(f"CSV Data: {len(csv_data)} cases")
