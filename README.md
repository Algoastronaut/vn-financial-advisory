# VN Financial Advisory — Official Website

> **Trust. Partnership. Growth.**  
> Premium bilingual digital platform for **VN Financial Advisory**, serving individuals and families with mutual fund distribution, life insurance, and health insurance in Rewa, Madhya Pradesh.

---

## 🏛️ Executive Summary & Brand Overview

- **Business Name:** VN Financial Advisory
- **Principal Person Managing Operations:** Mr. Vinay Singh
- **Associated Family Member:** Mrs. Neetu Singh (Role clarity observed: individual policies/investments held in respective individual names; no unauthorized intermediary or partner designations)
- **Primary Location:** Rewa, Madhya Pradesh, India
- **Operating Hours:** 10:00 AM to 8:00 PM
- **Primary Contact & WhatsApp:** `+91 96916 07779`
- **Email:** `vnfinancialadvisory@gmail.com`
- **Instagram:** [@vnfinancialadvisory](https://www.instagram.com/vnfinancialadvisory/)
- **Languages:** Fully Bilingual — English and Hindi (हिन्दी) with seamless one-click toggle.

---

## 🎨 Brand Identity & System

### Official Color Palette
- **Primary Navy:** `#102B46` (Authority, trust, stability)
- **Deep Navy:** `#0B1B2B` (Depth, background contrast, high-end wealth management tone)
- **Champagne Gold:** `#C9A45C` (Excellence, achievement accents, refinement)
- **Soft Gold:** `#E0C78D` (Highlights, subtle borders, interactive states)
- **Warm White:** `#F8F7F3` (Crisp editorial canvas, high readability)
- **Pure White:** `#FFFFFF` (Cards, elevated surfaces)
- **Charcoal:** `#252B32` (Secondary text, deep contrast)

### Typography
- **Headings & Monograms:** *Cormorant Garamond* (Serif, editorial elegance)
- **Body & Interface (English):** *Inter* (Clean, legible, modern UI sans-serif)
- **Body & Interface (Hindi):** *Noto Sans Devanagari* (Native, beautifully proportioned Devanagari typography)

### Logo System (`VNLogo.jsx`)
Manually coded SVG vector system ensuring sharp rendering on retina displays without pixelation:
1. **Primary Horizontal Wordmark:** Shield monogram + family protection motif + upward growth vector + typeset title & tagline.
2. **Compact Shield Icon:** Optimized for mobile headers and browser favicon (`favicon.svg`).
3. **Navbar Logo:** Horizontal, low-profile dark background variant.
4. **Footer Logo:** Subdued gold and white contrast variant with tagline.

---

## 🚀 Key Sections & Interactive Features

1. **Header & Navigation (`Navbar.jsx`):**
   - Sticky navigation with backdrop blur and scroll detection.
   - Live English / Hindi language toggle (`useLang`).
   - Quick WhatsApp CTA + "Book Consultation" direct scroll button.
   - Accessible responsive mobile drawer menu.

2. **Hero Section (`Hero.jsx`):**
   - High-impact editorial layout featuring the authentic staircase portrait of **Mr. Vinay Singh**.
   - Headline: *"Protecting What Matters. Planning for What Lies Ahead."*
   - Credibility Badges: *"10+ Years Insurance | 5 Years Mutual Funds | 10× MDRT Qualified"*.
   - Direct dual CTAs: Consultation booking form anchor + Instant WhatsApp chat.

3. **About the Advisor (`About.jsx`):**
   - Genuine office desk portrait of Mr. Vinay Singh in Rewa.
   - Narrative of personal, approachable, protection-first advisory philosophy.
   - Interactive metric counters and official Titanium Advisor appointment notice.

4. **Three Core Services (`Services.jsx`):**
   - **Mutual Funds & SIPs:** Mutual fund distribution, systematic investment planning, lump-sum facilitation, category risk profiling, statutory SEBI risk disclosure.
   - **Life Insurance:** Protection awareness, family safety net evaluation, policy feature explanation, application and servicing assistance.
   - **Health Insurance:** Policy selection, cashless hospital network awareness, waiting periods, room-rent sub-limits, claims process support.

5. **Achievements & Trophy Viewing Facility (`Achievements.jsx`):**
   - **10-Time MDRT Qualifier** with animated counter.
   - **Court of the Table (COT)** distinction.
   - **Titanium Advisor — ICICI Prudential Life Insurance**.
   - **ICICI Prudential Award of Excellence — MDRT 2024**.
   - **Interactive Award Lightbox:** Visitors can click each trophy photograph to view the verified physical inscription, full transcript, and verification status.

6. **Why Choose VN Financial Advisory (`WhyUs.jsx`):**
   - 6 personal value pillars: Direct Personal Attention, Bilingual Communication, Proven Experience, Protection-First Mindset, Ongoing Support, Local Presence in Rewa.

7. **How the Process Works (`Process.jsx`):**
   - 4-step clear, zero-pressure roadmap: *01 Connect → 02 Discuss → 03 Understand → 04 Proceed*.

8. **Bilingual Learning Centre (`Resources.jsx` & `articles.js`):**
   - Plain-language educational resources (no fabricated return figures or NAV charts).
   - **Interactive Article Reader Modal:** Visitors can read full educational guides in English or Hindi on Mutual Funds, SIPs, Life Insurance, and Health Insurance.

9. **Lead Generation & Contact Suite (`Contact.jsx`):**
   - High-conversion dual-column layout.
   - Direct click-to-call (`tel:+919691607779`), WhatsApp deep-link with pre-filled message, and email (`mailto:vnfinancialadvisory@gmail.com`).
   - Validated contact form (Name, Phone, City, Enquiry Category, Preferred Time, Consent).
   - Simulated async submission with clean confirmation state.
   - **Security Guarantee:** Explicit disclosure confirming PAN, Aadhaar, bank details, and passwords are never solicited through marketing forms.

10. **Legal & Compliance Modal Suite (`LegalModal.jsx` & `Footer.jsx`):**
    - Tab 1: **Regulatory Disclosures & Ownership Clarity** (operational management by Vinay Singh, family asset role clarity, AMFI ARN placeholder).
    - Tab 2: **Privacy Policy** (compliant with Indian IT Act and SPDI rules).
    - Tab 3: **Terms of Use** (informational scope, zero return guarantees).
    - Tab 4: **Mandatory Risk Disclosures** (statutory Mutual Fund and Insurance solicitation disclaimers).

11. **Persistent WhatsApp Floating Button (`WhatsAppFloat.jsx`):**
    - Accessible floating badge with pulse animation and tooltip.

---

## 🛠️ Technical Stack & Architecture

- **Framework:** React 18
- **Build Tool:** Vite 6
- **Language:** JavaScript (ES Modules)
- **Styling:** Vanilla CSS & CSS Modules (Strictly no Tailwind CSS, ensuring 100% bespoke design control)
- **Iconography:** Lucide React
- **Performance:** Sub-second build, zero runtime layout shift, native responsive images.

```
vnfinancial/
├── public/
│   ├── assets/
│   │   ├── advisor/      # Authentic portraits of Vinay Singh
│   │   ├── awards/       # Official trophy photographs
│   │   └── social/       # Open Graph social preview banners
│   ├── favicon.svg       # Custom vector shield favicon
│   ├── robots.txt        # Search engine crawler instructions
│   └── sitemap.xml       # SEO XML Sitemap
├── src/
│   ├── components/       # Bespoke UI components with CSS Modules
│   ├── context/          # LangContext (English / Hindi state)
│   ├── data/             # Centralised business & article data
│   ├── hooks/            # useScrollReveal IntersectionObserver hook
│   ├── styles/           # global.css design tokens & base rules
│   ├── App.jsx           # Main application root
│   └── main.jsx          # React DOM entry point
├── package.json
└── vite.config.js
```

---

## 🚢 Deployment Guide

### Option 1: Vercel (Recommended)
1. Push this folder to a GitHub repository.
2. Go to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import the repository.
4. Framework Preset: **Vite**.
5. Build Command: `npm run build` (output directory: `dist`).
6. Click **Deploy**.

### Option 2: Netlify
1. Connect repository on [Netlify](https://www.netlify.com).
2. Build Command: `npm run build`.
3. Publish directory: `dist`.
4. Deploy!

### Option 3: Manual Static Hosting (cPanel / Apache / Nginx / Hostinger)
1. Run local build:
   ```bash
   npm run build
   ```
2. Upload all files and folders inside the `dist/` directory to your web root (`public_html` or `/var/www/html`).

---

## 📋 Pre-Launch Verification Checklist

Before publishing to production, confirm and update the following details with the business owner:

### 1. Regulatory Credentials
- [ ] **AMFI Registration Number (ARN):** Confirm the active ARN and EUIN (Employee Unique Identification Number) for mutual fund distribution and replace the placeholder in `src/data/business.js` and `LegalModal.jsx`.
- [ ] **Insurance License Details:** Confirm the exact IRDAI license number and appointment status with ICICI Prudential Life Insurance and any general/health insurance partners.
- [ ] **SEBI IA Status:** Confirm that no independent investment adviser claims are made; verify that distribution nomenclature is maintained.

### 2. Business Ownership & Family Roles
- [ ] **Operational Role:** Confirmed that Mr. Vinay Singh is the principal manager handling daily business operations and client interactions.
- [ ] **Family Asset Clarification:** Confirmed that policies and assets held in the name of Mrs. Neetu Singh or Mr. Vinay Singh are correctly documented without misrepresenting either person's legal or intermediary status.

### 3. Contact & Location
- [ ] **Exact Office Address:** Replace `"Rewa, Madhya Pradesh, India"` with the full postal street address once confirmed.
- [ ] **Working Days:** Confirm specific working days (e.g. Monday to Saturday or Monday to Sunday) before displaying on the website.
- [ ] **Backend Form Endpoint:** Connect the enquiry form in `Contact.jsx` to an active email forwarding service (such as Formspree, Web3Forms, or custom API route) to receive instant email notifications.

### 4. Professional Awards & Recognition
- [ ] **MDRT Qualification Years:** Verify the specific qualification years for all 10 MDRT milestones and COT qualification against official certificates.
- [ ] **ICICI Prudential Brand Guidelines:** Ensure written compliance clearance is obtained for utilizing ICICI Prudential award trophy citations and insurer names on promotional web collateral.
