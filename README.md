<div align="center">

# 🔎 AuthentiScan – Cosmetic Security Hub

**Verify Your Beauty. Scan for Safety.**

An integrated web application empowering consumers with **product authenticity verification**, **ingredient safety analysis**, and **personal health tracking**.

![Status](https://img.shields.io/badge/Status-Active_Development-brightgreen)
![Tech](https://img.shields.io/badge/Stack-React_|_Supabase_|_Flask_|_Tesseract.js-indigo)
![License](https://img.shields.io/badge/License-MIT-blue)

</div>

---

## 📌 Abstract

**AuthentiScan** is a consumer-focused platform designed to tackle two major problems in the cosmetic industry:

- 🚫 Counterfeit cosmetic products  
- ⚠️ Lack of ingredient transparency  

The application functions as a **Cosmetic Security Hub** by combining:
- **Optical Character Recognition (OCR)**
- **AI-based image verification hooks**
- **Secure user data & health tracking**

This enables users to make **safe, informed, and confident cosmetic choices**.

---

## ✨ Key Features

### 🔬 Smart OCR Ingredient Scanner
- **OCR Extraction:** Uses **Tesseract.js** for client-side text extraction from cosmetic label images.
- **Ingredient Safety Matching:** Extracted ingredients are matched against a **Supabase PostgreSQL database**.
- **Risk Classification:** Ingredients are categorized with safety levels and warnings.
- **Semantic Cleaning:** Custom JavaScript logic cleans OCR noise and normalizes ingredient names.

---

### ✅ AI-Powered Counterfeit Detector
- **Image Upload Interface:** Users upload product images for authenticity checking.
- **Backend AI Hook:** Images are sent to a Flask API (`POST /compare`) for simulated AI comparison.
- **Verification Result:** Displays **Genuine / Fake / Uncertain** status with a confidence score.

---

### 💚 Health & Community Log
- **Dual Tab System:**
  - 🔒 **Private Health Log:** Track product usage and side effects.
  - 🌍 **Community Reviews:** Public product reviews with ratings and photos.
- **Supabase Powered:** Authentication, database storage, and image hosting.

---

## 🛠️ System Architecture

| Layer | Technology | Description |
|------|-----------|-------------|
| **Frontend** | React.js (CRA) | Single Page Application (SPA), UI, routing, state management |
| **Backend & Database** | Supabase | PostgreSQL, Authentication, Storage |
| **OCR Engine** | Tesseract.js | Client-side ingredient text extraction |
| **AI Verification Hook** | Flask (Mock) | Image-based counterfeit detection |

---

## 🗄️ Database & Data Sources

### Ingredient Database
- Stored in **Supabase PostgreSQL**
- Table Name: `ingredients`
- Fields include:
  - Ingredient Name
  - Function
  - Safety Level
  - Warning Notes

#### Data Source
- Provided as a **CSV file** (`ingredients_data.csv`)
- Must be imported manually into Supabase

📌 Used by `IngredientResults.js` to analyze OCR output.

---

## 🚀 Getting Started

### Prerequisites
- Node.js & npm
- Python 3.x & pip
- Supabase Account

---

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/afnan01-tec/AuthentiScan-Cosmetic-Security-Hub.git
cd AuthentiScan-Cosmetic-Security-Hub

---

###2️⃣ Supabase Configuration

Create a .env file inside the system/ folder:

REACT_APP_SUPABASE_URL=your_supabase_project_url
REACT_APP_SUPABASE_ANON_KEY=your_supabase_public_anon_key


Set up the following tables in Supabase:

ingredients

posts

Import the ingredient CSV file into the ingredients table.

3️⃣ Frontend Setup (React)
cd system
npm install
npm start


Runs at 👉 http://localhost:3000

4️⃣ Backend Setup (Flask – Counterfeit Detector)
cd backend
python -m venv venv
source venv/bin/activate     # Windows: venv\Scripts\activate
pip install -r requirements.txt
python app.py


Runs at 👉 http://localhost:5000

💻 Usage

Open http://localhost:3000

Sign up or log in via Supabase Authentication

Navigate to the Dashboard

Use:

Ingredient Scanner

Counterfeit Detector

Health Logs & Community Reviews

👥 Team
Name	Role
Afnan M	Full-Stack Development, OCR Logic, System Architecture
Team Member 2	Frontend UI/UX & State Management
Team Member 3	Supabase Integration & Database Design
🎓 Academic Supervision

Project Guide: [Guide Name]

Department: [Department Name]

Institution: [College / University Name]

🔮 Future Roadmap

Advanced OCR using Google Vision API

Manufacturer verification module

Personalized allergy & sensitivity alerts

Mobile app using React Native

Cryptographic product authenticity checks

📄 License

This project is licensed under the MIT License.
