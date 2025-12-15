# 🔎 AuthentiScan — Cosmetic Security Hub

Verify your beauty. Scan for safety.

[![Status](https://img.shields.io/badge/Status-Active_Development-brightgreen)](https://github.com/afnan01-tec/AuthentiScan-Cosmetic-Security-Hub)
[![Tech](https://img.shields.io/badge/Stack-React_|_Supabase_|_Flask_|_Tesseract.js-indigo)]()
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

Table of Contents
- Project Overview
- Features
- Architecture
- Data & Schema
- Quick Start
  - Prerequisites
  - Environment
  - Frontend (React)
  - Backend (Flask)
  - Supabase Setup
- API (example)
- Usage
- Roadmap
- Contributing
- License
- Contact
- Acknowledgements

---

## Project Overview
AuthentiScan is a consumer-facing web app that helps users evaluate cosmetic products by:
- Extracting ingredient lists from label photos (client-side OCR).
- Looking up ingredients against a curated safety database.
- Running a lightweight image verification endpoint (mock AI verdicts: Genuine / Fake / Uncertain).
- Letting users keep private health logs and publish public product reviews with photos.

The system uses Tesseract.js on the client, Supabase for auth, storage and Postgres DB, and a small Flask backend for image verification hooks.

---

## Features
- OCR Ingredient Scanner (Tesseract.js)
  - Client-side extraction to avoid sending raw images to servers.
  - Normalization and noise reduction for better ingredient matching.
  - Lookup against a Supabase `ingredients` table with safety classifications.

- Counterfeit Detection (Flask mock endpoint)
  - Upload images to `POST /compare`.
  - Backend responds with a verdict and confidence score (mock / placeholder for ML).

- Health & Community
  - Private user logs for side effects and usage history.
  - Public reviews with photos, ratings and comments.
  - Auth and file storage handled via Supabase.

---

## Architecture (high level)
- Frontend (React) ↔ Supabase (Auth, DB, Storage)
- Frontend (React) ↔ Backend (Flask) for image verification
- Client-side OCR (Tesseract.js) → frontend processing → DB lookup

---

## Data & Schema
Ingredient data is provided in `ingredients_data.csv`. Import it to your Supabase `ingredients` table.

Suggested table schema (Postgres / Supabase):

```sql
create extension if not exists pgcrypto;

create table if not exists ingredients (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  function text,
  safety_level text,       -- e.g., safe | caution | hazardous
  warning_notes text,
  created_at timestamptz default now()
);
```

Import steps:
- Open Supabase project → Table Editor → Import CSV → choose `ingredients_data.csv`.
- Alternatively, load programmatically using psql or Supabase APIs.

---

## Quick Start

### Prerequisites
- Node.js 16+ and npm
- Python 3.8+
- pip
- Supabase account & project

### Environment
Create a `.env` file or supabaseClient.js file (as shown in project) inside the frontend `system/` folder (do not commit secrets):

REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_public_anon_key

For backend, you can use environment variables to configure host/port or Supabase service keys if needed.

### Frontend (React)
From repository root:

```bash
cd system
npm install
npm start
```

The app runs at: http://localhost:3000

### Backend (Flask)
From repository root:

```bash
cd backend
python -m venv venv
# macOS / Linux
source venv/bin/activate
# Windows (PowerShell)
venv\Scripts\Activate.ps1

pip install -r requirements.txt
python app.py
```

Default Flask API: http://localhost:5000 (adjust host/port in app if needed).

### Supabase Setup
1. Create a Supabase project.
2. Create tables: `ingredients`, `posts` (reviews), `health_logs` (private logs) — or run SQL migration in Supabase SQL editor.
3. Import `ingredients_data.csv` into the `ingredients` table.
4. Enable Storage (for review photos) and set appropriate policies (RLS) for public/private storage access.

---

## API (example)
POST /compare
- Purpose: Upload an image for a mock authenticity check.
- Request: multipart/form-data (file) or JSON with base64 image (depending on implementation).
- Example response (JSON):

```json
{
  "verdict": "Genuine",
  "confidence": 0.87,
  "notes": "Appearance matches known genuine samples."
}
```

Example curl (if endpoint accepts file form upload):

```bash
curl -X POST "http://localhost:5000/compare" \
  -F "image=@/path/to/product.jpg"
```

Note: The current backend returns simulated results — replace with a real ML model or service in production.

---

## Usage
1. Sign up / sign in using Supabase Authentication.
2. Ingredient Scanner:
   - Upload a label photo → OCR extracts text client-side → frontend normalizes the list → queries Supabase `ingredients` table → displays safety levels and warnings.
3. Counterfeit Detector:
   - Upload product images → frontend posts to Flask `/compare` → display verdict and confidence.
4. Health Logs & Reviews:
   - Create private logs for side effects.
   - Publish public reviews (photos stored in Supabase Storage).

---

## Roadmap
Planned improvements:
- Replace mock verification with a real ML model or external detection service.
- Improve OCR accuracy (add Google Vision or other cloud OCR options).
- Manufacturer verification & data-driven authenticity checks.
- Mobile app (React Native).
- Optional cryptographic authenticity checks (blockchain signatures).

---

## Contributing
Contributions are welcome. Suggested workflow:
1. Fork the repository.
2. Create a branch: git checkout -b feat/your-feature
3. Add tests where appropriate.
4. Open a pull request describing motivation and changes.

Please do not commit secrets or API keys. Use environment variables and .gitignore.

---

## License
MIT License — see LICENSE for details.

---

## Contact
Project lead: Afnan M (afnan01-tec)  
For help with Supabase, OCR tuning or the Flask verification endpoint — open an issue or contact the maintainer via GitHub.

---

## Acknowledgements
Project Guide: Smt. Savitha Gopal (Assistant Professor, Dept. of Computer Science)  
Head of Department: Dr. Sangeetha J (Dept. of Computer Science, Amrita School of Arts & Sciences, Kochi)

Submitted in partial fulfillment of the requirements for the degree of Bachelor of Computer Applications (Data Science), Amrita Vishwa Vidyapeetham — Kochi Campus
