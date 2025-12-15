<div align="center">
  
# 🔎 AuthentiScan: Cosmetic Security Hub
  
> **An integrated application empowering consumers with product verification, ingredient safety analysis, and personal health tracking.**

![Status](https://img.shields.io/badge/Status-Active_Development-brightgreen)
[![Tech Stack](https://img.shields.io/badge/Stack-React_|_Supabase_|_Flask_|_Tesseract.js-indigo)](https://github.com/[YourUsername])
![License](https://img.shields.io/badge/License-MIT-blue)

</div>

---

## 📋 Abstract
**AuthentiScan** is a modern, consumer-focused platform built to address the growing issues of counterfeit cosmetics and lack of ingredient transparency in the beauty industry.

It transforms a standard web application into a comprehensive **Cosmetic Security Hub** by combining three key functionalities: Optical Character Recognition (OCR), image-based AI verification hooks, and personalized user data management. This provides a single source for users to **Verify their Beauty, Scan for Safety**.

---

## ✨ Key Features

### 🔬 Smart OCR Ingredient Scanner
* **Data Extraction:** Utilizes the client-side **Tesseract.js** library for Optical Character Recognition (OCR) to extract text from uploaded product label images.
* **Safety Matching:** Connects to a **Supabase database** of cosmetic ingredients to match, categorize, and assign safety levels and warnings, providing clear insights for safer choices.
* **Semantic Cleaning:** Raw OCR text is parsed and normalized using custom JavaScript logic to remove artifacts and format ingredients correctly for robust database queries.

### ✅ AI-Powered Counterfeit Detector
* **Image Upload:** Provides a dedicated interface for users to upload product images for visual verification.
* **Backend Integration:** Submits the image to an external server endpoint (`http://127.0.0.1:5000/compare`) for **AI Visual Analysis** (simulated).
* **Verification Score:** The result page displays a clear verification status (Genuine/Fake/Uncertain) and a confidence score.

### 💚 Health & Community Log
* **Dual Tab Interface:** Users can seamlessly switch between their private health logs and public community reviews.
* **Private Log:** Secure, authenticated section for personal tracking of product usage and logging any side effects.
* **Community Reviews:** A category-based social sharing platform where users can post, edit, and delete public product reviews, including star ratings and photos, backed by Supabase storage.

---

## 🛠️ System Architecture

**AuthentiScan** utilizes a modern, serverless-friendly architecture built around three layers.

| Layer | Technology | Role |
| :--- | :--- | :--- |
| **Frontend** | **React.js (CRA)** | Core application framework for the Single Page Application (SPA). Manages state, routing, and user interface. |
| **Backend/Data** | **Supabase** | Provides the full-stack backend, including **PostgreSQL Database** for user data, ingredient tables, and logs; **User Authentication**; and **Object Storage** for photos. |
| **Feature Layer (Client-Side)** | **Tesseract.js** | Provides the client-side heavy lifting for the Ingredient Scanner feature. |
| **Feature Layer (Backend Hook)** | **Flask (Simulated)** | An external Python Flask API is expected to run locally to handle the `POST` request for the resource-intensive **Counterfeit Detector** image comparison. |

---

## 🔗 Database & Data Sources

The core functionality of the Ingredient Scanner relies on a comprehensive ingredient database.

### OCR Ingredient Database
The ingredient data (names, functions, safety levels, and warnings) is managed in a **PostgreSQL table within Supabase** (referred to as the `ingredients` table in the code).

* **Data Source:** The core data is provided as a **CSV file** (e.g., `ingredients_data.csv`).
* **Setup Step:** This CSV file must be **imported into the Supabase database** to populate the required `ingredients` table.
* **Purpose:** This database is queried by the `IngredientResults.js` component to analyze the ingredients extracted via Tesseract.js.

---

## 🚀 Getting Started

### Prerequisites

1.  **Node.js** and **npm** installed.
2.  **Python 3.x** and **pip** installed (for the simulated Flask backend).
3.  A **Supabase** project (required for authentication and data management).

### 1. Clone the Repository

```bash
git clone [Your Repository URL]
cd AuthentiScan
---

###Configure Supabase (Database & Auth)Step A: Get CredentialsYou need your Supabase Project URL and Public Anon Key (from src/supabaseClient.js).Step B: Update ConfigurationFor security and best practices, replace the hardcoded keys in src/supabaseClient.js with environment variables.Step C: Database InitializationSet up your Supabase project. You must create the ingredients and posts tables, then import the provided CSV file into the ingredients table.3. Frontend Setup (React)Bash# Install Node dependencies
npm install 

# Run the React application
npm start 
The application will launch on http://localhost:3000.4. Backend Hook Setup (Flask/Counterfeit Detector)The Counterfeit Detector feature requires a backend server running on port 5000 to process the image:Step A: Backend EnvironmentSet up a minimal Python environment and install Flask.Bash# In a new terminal:
mkdir counterfeit-api-mock
cd counterfeit-api-mock
python -m venv venv
source venv/bin/activate
pip install Flask
Step B: Run Mock ServerCreate a Python file (app.py) with a Flask route that handles POST /compare and returns a dummy JSON response in the format expected by the frontend (e.g., {"match": "Genuine", "confidence": 95.21}).💻 Usage & AccessOnce both the React frontend and the Flask backend hook are running, you can access the application at http://localhost:3000.Authentication: Users can sign up and log in using email/password via the Supabase authentication flow.Key Route: Access the main features via the Dashboard (/dashboard).👥 The TeamThis project was designed and developed by a dedicated team of student developers.NameRole / Focus[Your Name][e.g., Full-Stack Development, Core Architecture, OCR Logic][Team Member Name 2][e.g., Frontend Design & UX, State Management][Team Member Name 3][e.g., Supabase Integration, Authentication, Database Schema]🎓 Supervision & GuidanceProject Guide: [Name and Title of your Guide]Department: [Name of Department and School/University]🔮 Future RoadmapThe current system is a robust proof-of-concept for consumer safety. We plan to expand AuthentiScan into a more feature-rich platform with these key features:Advanced OCR Parsing: Integrating a more powerful text extraction service (e.g., Google Vision API) for superior quality and better handling of complex packaging layouts.Manufacturer Verification Module: Implementing a system for product manufacturers to register their official products, allowing the Counterfeit Detector to perform a cryptographic check against a verified database.Allergy and Sensitivity Profiles: Allowing authenticated users to define personal allergen profiles and cross-reference them directly against scanned ingredients, providing instant, personalized risk alerts.Mobile App Development: Porting the React application to React Native to utilize native camera capabilities and offline data access for faster scanning.
