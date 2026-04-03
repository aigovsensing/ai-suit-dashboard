# AI Litigation Dashboard (v1.1)

## 📌 Project Overview
**AI Litigation Dashboard**는 인공지능(AI)과 관련된 글로벌 소송 데이터를 실시간으로 수집하고, 이를 지리적/통계적으로 시각화하는 전문 분석 플랫폼입니다. 인공지능 기술의 급격한 발전과 함께 전 세계적으로 급증하는 법적 분쟁을 통합적으로 관리하고, 법적 리스크와 트렌드를 데이터 기반으로 추적할 수 있도록 설계되었습니다.

본 프로젝트는 단순히 정적인 정보를 보여주는 것을 넘어, 최신 소송 데이터를 API로부터 실시간 빌드하거나 기존 축적된 데이터(CSV)를 선택하여 상호작용 가능한 대시보드를 제공합니다.

---

## 🛠 Tech Stack
- **Backend**: FastAPI (Python 3.10+), Uvicorn
- **Database**: MariaDB 10.6 (통계 및 소송 상세 정보 저장)
- **Frontend**: Vanilla JS, CSS3, HTML5 (Interative SVG Maps, CSS Glassmorphism)
- **Data Ingestion**: Python (CourtListener API 연동 및 정제)
- **Containerization**: Docker, Docker-compose

---

## 📂 Project Structure
```bash
/work/github/ai-suit-visualizer-v01/
├── backend/            # FastAPI 라우터 및 비즈니스 로직
├── collector/          # CourtListener API 연동 및 데이터 정제 (ELT)
├── data/               # 소송 데이터셋 (CSV 형식) 저장소
├── database/           # DB 초기화 스키마 (.sql)
├── docker/             # Docker 구성 파일 및 docker-compose.yml
├── frontend/           # 대시보드 UI (JS, CSS, HTML)
│   ├── js/             # 지도 제어 및 시각화 로직 (app.js)
│   └── css/            # 현대적 디자인 시스템 (style.css)
└── image/              # 벡터 맵(SVG) 및 기타 에셋
```

---

## 🚀 Getting Started

### 1. Docker를 사용한 재현 및 실행 (권장)
가장 빠르고 정확한 실행 방법으로, 데이터베이스와 백엔드 서버가 모두 패키징되어 구성됩니다.

```bash
# Docker Compose 실행
docker-compose -f docker/docker-compose.yml up -d
```
*   **Access UI**: `http://localhost:8007`
*   **MariaDB External Port**: `13306`

### 2. 로컬 개발 환경에서 실행

#### Backend 및 UI 실행
```bash
# 1. 가상환경 생성 및 필요 라이브러리 설치
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt  # FastAPI, pymysql, pandas, requests 등

# 2. 서버 실행
uvicorn backend.main:app --host 0.0.0.0 --port 8007 --reload
```

#### 데이터 수집기(Collector) 실행
새로운 소송 데이터를 최신화하고 싶을 때 수동으로 실행할 수 있습니다. (MariaDB가 실행 중이어야 합니다.)
```bash
# Python 경로 설정 후 실행
export PYTHONPATH=$PYTHONPATH:.
python3 collector/main.py
```

### 3. 🤖 Auto-Start with systemd (Service Setup)
서버 부팅 시 대시보드를 자동으로 실행하려면 `systemd` 서비스를 설정하세요.

#### 1) 서비스 파일 생성
`/etc/systemd/system/ai-suit-dashboard.service` 파일을 만들고 아래 내용을 입력합니다.
(경로 `/work/github-aigovsensing/ai-suit-dashboard`는 실제 환경에 맞춰 수정하세요.)

```ini
[Unit]
Description=AI Suit Dashboard Docker Compose Service
Requires=docker.service
After=docker.service

[Service]
Type=simple
WorkingDirectory=/work/github-aigovsensing/ai-suit-dashboard
ExecStart=/usr/bin/docker-compose -f docker/docker-compose.yml up
ExecStop=/usr/bin/docker-compose -f docker/docker-compose.yml down
Restart=always
User=root

[Install]
WantedBy=multi-user.target
```

#### 2) 서비스 활성화 및 실행
다음 명령어로 서비스를 등록하고 부팅 시 자동 실행되도록 설정합니다.

```bash
# 시스템 데몬 재로드
sudo systemctl daemon-reload

# 부팅 시 자동 실행 활성화
sudo systemctl enable ai-suit-dashboard.service

# 현재 시점에서 즉시 실행
sudo systemctl start ai-suit-dashboard.service

# 실시간 상태 확인
sudo systemctl status ai-suit-dashboard.service
```

---

## 📊 Key Features & UI/UX
- **High-Fidelity Interactive Maps**:
    - **USA Map**: 50개 주 전체를 정밀하게 시각화하며, 소송 건수에 따른 히트맵 제공.
    - **Small State UI**: 식별이 어려운 동부 연안의 작은 주(MA, RI, DC 등)를 자동 리스팅하고 호버 시 포인터 인터랙션 제공.
    - **World Map**: 글로벌 소송 분포를 조망 가능.
- **Unified Filter System**: 소송 진행 단계(준비, 1심, 항소, 종료 등)별 실시간 대시보드 갱신.
- **Data-Driven Insights**:
    - 국가별/주별 점유율 및 건수 자동 집계 요약.
    - **CSV Export**: 시각화된 통계 데이터를 즉시 CSV로 내보내기 지원.
- **Responsive Case Detail**:
    - 법원 정보, 원고/피고, 사건 요약 및 공식 문서 링크(CourtListener) 유기적 연결.

---

## 📸 Demo Screenshots

| Global Litigation Map | USA Regional Heatmap | Real-time Case Search |
| :---: | :---: | :---: |
| ![Global View](/var/www/invain/.gemini/antigravity/brain/d1ebc7cc-4174-42a5-b969-fb0425921f69/demo_global_map_png_1775216153968.png) | ![USA View](/var/www/invain/.gemini/antigravity/brain/d1ebc7cc-4174-42a5-b969-fb0425921f69/demo_usa_map_png_1775216173609.png) | ![Search View](/var/www/invain/.gemini/antigravity/brain/d1ebc7cc-4174-42a5-b969-fb0425921f69/demo_search_feature_png_1775216188169.png) |

---

## 📄 Maintenance & Reproducibility
본 레포지토리는 다음과 같은 방식으로 유지보수 및 재현 가능성을 보장합니다.

1.  **데이터 무결성**: `./data` 폴더에 소송 스냅샷 CSV 파일을 저장하여 서버 재부팅 시에도 동일한 시각화 결과 재현 가능.
2.  **데이터베이스 초기화**: `docker/database` 폴더 내의 스키마 파일을 통해 신규 서버 구축 시 동일한 DB 구조 자동 구성.
3.  **환경 독립성**: Docker를 통한 컨테이너 기반 실행으로 OS에 무관한 일관된 실행 환경 제공.

---
**AI Litigation Dashboard Team**
*For questions and issues, please use the issue tracker.*
