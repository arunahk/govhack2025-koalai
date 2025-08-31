1. App Overview
App Name: KoalAI
# KoalAI Application Specification

Platform: Responsive Web Application (for initial development), with a view to native iOS and Android apps.
## 1. App Overview

Core Concept: A conversational AI assistant that provides a personalised, step-by-step roadmap for starting a business in Australia.
**App Name:** KoalAI

Initial Business Case: Starting a coffee shop in Queensland.
**Platform:** Responsive Web Application (for initial development), with a view to native iOS and Android apps.

**Core Concept:** A conversational AI assistant that provides a personalised, step-by-step roadmap for starting a business in Australia.

**Initial Business Case:** Starting a coffee shop in Queensland.

**Guiding Framework:** The application must be designed, developed, and operated in full compliance with the Australian Government AI technical standard to ensure it is trustworthy, transparent, and secure.

---

## 2. User Persona

**Name:** Ash

**Goal:** To open their first coffee shop in Brisbane, Queensland.

**Pain Points:** Ash is passionate about coffee but is overwhelmed by government websites, unsure of the correct order of legal and financial steps, and worried about missing a crucial registration or permit. Ash needs a single source of truth to guide them.

---

## 3. Core Features & Functionality

### Feature 1: Onboarding & Project Setup

**Description:** A simple, welcoming onboarding process where the user defines their business goal.

**User Flow:**
1.  User launches the app for the first time.
2.  The app asks: "What business are you starting?" (User types: "A coffee shop").
3.  The app asks: "Where are you located?" (User types: "Brisbane, Queensland").
4.  KoalAI confirms the project and generates a personalised project dashboard and an interactive checklist.

### Feature 2: The KoalAI Conversational Assistant

**Description:** The core of the app—a chat interface for asking questions in natural language.

**Requirements:**
*   The user can ask specific questions like "Do I need a special license to serve food?" or "Where do I register for an ABN?".
*   The AI's responses must be clear, concise, and easy to understand.

**Transparency:** The interface must clearly apply visual content to indicate when a user is interacting with an AI system.

**Explainability:** The AI must explain the outputs it makes to end users and provide a source link for all government information.

**Human Oversight:** The interface must include a clearly defined pathway for the user to have a decision reviewed by a human or escalate the query for manual assistance.

### Feature 3: Interactive Action Plan

**Description:** A dynamic checklist generated from the user's project setup, tracking all required government actions.

**Requirements:**
*   The checklist is broken down into logical phases (e.g., Federal Registrations, QLD State Requirements, Brisbane City Council Permits).
*   Each item contains a brief explanation and a "deep dive" link to the conversational assistant for more details.
*   Each item links directly to the official government form or online service where the action can be completed.
*   Users can mark items as "In Progress" or "Complete" to track their journey.

### Feature 4: Notifications & Reminders

**Description:** Proactive notifications to keep the user on track.

**Requirements:**
*   The app will send push notifications for key milestones and deadlines (e.g., "Reminder: Your business name reservation expires in 7 days.").
*   Users can customise their notification preferences.

---

## 4. Non-Functional Requirements

These requirements are essential for ensuring the app is secure, trustworthy, and compliant.

### Security
*   The app must implement security controls with respect to the Information Security Manual (ISM) and the Essential Eight maturity model.
*   All user data, both at rest and in transit, must be encrypted.
*   The system will undergo vulnerability testing to identify any well-known vulnerabilities.

### Accessibility
*   The user interface and all content must conform to the Web Content Accessibility Guidelines (WCAG) to be accessible to people with disabilities.

### Privacy
*   The app must comply with the Privacy Act and the Australian Privacy Principles.
*   Users must be provided with informed consent for how their data will be used.
*   The supplier must NOT use agency data for improving the supplier's AI systems or other products.

### Auditability & Logging
*   The system must provide end-to-end auditability.
*   All user interactions, system inputs and outputs, and changes to the system must be logged to support transparency and accountability.

---

## 5. Suggested Technology Stack

*   **Frontend (Web App):** React or Vue.js
*   **Backend:** Python with FastAPI or Django
*   **AI/ML:**
    *   **Foundation Model:** Google Gemini API
    *   **Architecture:** Retrieval-Augmented Generation (RAG)
    *   **Frameworks:** LangChain
    *   **Vector Database:** ChromaDB
*   **Hosting:** A secure Australian-based cloud provider (e.g., GCP, AWS, Azure).