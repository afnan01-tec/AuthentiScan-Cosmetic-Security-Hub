# 🔎 AuthentiScan — Cosmetic Security Hub

Verify your beauty. Scan for safety.

[![Status](https://img.shields.io/badge/Status-Active_Development-brightgreen)](https://github.com/afnan01-tec/AuthentiScan-Cosmetic-Security-Hub)
[![Tech](https://img.shields.io/badge/Stack-React_|_Supabase_|_Flask_|_Tesseract.js-indigo)]()
[![License](https://img.shields.io/badge/License-MIT-blue)](LICENSE)

---

## Table of Contents
- [Project Overview](#project-overview)
- [Key Features](#key-features)
- [Tech Stack & Architecture](#tech-stack--architecture)
- [Data & Database](#data--database)
- [Quick Start](#quick-start)
  - [Prerequisites](#prerequisites)
  - [Environment](#environment)
  - [Frontend (React)](#frontend-react)
  - [Backend (Flask)](#backend-flask)
  - [Supabase Setup](#supabase-setup)
- [Usage](#usage)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

---

## Project Overview
AuthentiScan is a user-focused web application that helps consumers:
- Detect counterfeit cosmetic products (image-based checks).
- Extract and analyze ingredient lists using OCR.
- Track personal product usage and side effects with private logs.
- Share public product reviews and community feedback.

The system combines client-side OCR (Tesseract.js), a Flask backend for AI verification hooks, and Supabase for auth, storage, and database.

---

## Key Features
- Smart OCR Ingredient Scanner
  - Client-side OCR via Tesseract.js to extract text from product labels.
  - Cleaning & normalization logic to reduce OCR noise.
  - Ingredient lookup against a Supabase `ingredients` table with safety classifications.

- AI-Powered Counterfeit Detector
  - Image upload UI sends images to Flask endpoint (`POST /compare`).
  - Backend returns a simulated authenticity verdict: Genuine / Fake / Uncertain, with confidence.

- Health & Community Log
  - Private health logs for individual users (side effects, usage).
  - Public community reviews with photos and ratings.
  - Authentication and storage handled by Supabase.

---

## Tech Stack & Architecture
- Frontend: React (Create React App)
- Backend: Flask (simple AI hook / mock verification)
- Database & Auth: Supabase (Postgres + Storage + Auth)
- OCR: Tesseract.js (client-side)

High level:
- Frontend ↔ Supabase (auth, DB, storage)
- Frontend ↔ Flask API (image verification)
- Client-side OCR → frontend processing → ingredient lookup in Supabase

---

## Data & Database
Ingredient data is provided as a CSV: `ingredients_data.csv`.
Supabase table: `ingredients` (suggested fields)
- id (uuid / serial)
- name (text)
- function (text)
- safety_level (text) — e.g., safe / caution / hazardous
- warning_notes (text)
- created_at (timestamp)

You must import the CSV into the `ingredients` table in your Supabase project.

---

## Quick Start

### Prerequisites
- Node.js (16+ recommended) and npm
- Python 3.8+
- pip
- Supabase account & project

### Environment
Create a `.env` file inside the `system/` folder (frontend):

```
REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_public_anon_key
```

(Do not commit secrets to the repo.)

### Supabase Setup
1. Create a Supabase project.
2. Create the `ingredients` and `posts` tables (or use the SQL editor to run migrations).
3. Import `ingredients_data.csv` into the `ingredients` table (Supabase UI -> Table -> Import CSV).
4. Enable Storage if you want to host review photos.

Suggested minimal SQL for `ingredients`:

```sql
create table if not exists ingredients (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  function text,
  safety_level text,
  warning_notes text,
  created_at timestamptz default now()
);
```

### Frontend (React)
From the project root:

```bash
cd system
npm install
npm start
```

App runs at: http://localhost:3000

### Backend (Flask)
From the project root:

```bash
cd backend
python -m venv venv
source venv/bin/activate       # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py
```

Flask API runs at: http://localhost:5000
(Adjust host/port as needed.)

---

## Usage
- Sign up or log in using Supabase Authentication.
- Dashboard:
  - Ingredient Scanner: Upload a label photo -> OCR extracts text -> ingredient lookup shows safety levels.
  - Counterfeit Detector: Upload product images -> POST to `/compare` -> receive authenticity verdict and confidence.
  - Health Logs & Community: Create private logs and public reviews with images.

---

## Roadmap (Suggested)
- Replace mock AI hook with real ML model or external service.
- Improve OCR accuracy (option to add Google Vision API).
- Manufacturer verification module (data-driven).
- Mobile app (React Native).
- Cryptographic product authenticity checks (blockchain / signatures).

---

## Contributing
Contributions are welcome. Suggested workflow:
1. Fork the repo
2. Create a feature branch: git checkout -b feat/your-feature
3. Commit changes and open a PR describing the change and motivation

Please include tests where appropriate and keep environment secrets out of commits.

---

## License
This project is licensed under the MIT License. See LICENSE for details.

---

## Contact
Project lead: Afnan M (afnan01-tec)
For questions or help setting up Supabase, OCR tuning, or the Flask verification endpoint — open an issue or contact the maintainer.
