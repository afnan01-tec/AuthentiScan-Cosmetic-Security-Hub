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
cd AuthentiScan
