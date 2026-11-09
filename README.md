# Alwaha Development (الواحة العقارية) — Luxury Portfolio Website

Production-ready, ultra-premium portfolio website for **Alwaha Development (شركة الواحة العقارية للتطوير)**. Built with **pure HTML5, CSS3, vanilla JavaScript, and Three.js**. No node/npm build step, no bundlers, zero framework dependencies.

---

## 🏛️ Brand Truth & Core Specifications

- **Company Name**: Alwaha Development / شركة الواحة العقارية للتطوير
- **Founded**: 2020
- **Tagline (Arabic)**: نبني ثقتك قبل أن نبني عقارك
- **Tagline (English)**: Building Your Trust Before Building Your Property
- **Location**: Al Hay Al Motamayez (الحي المتميز), Badr City, Cairo, Egypt
- **Chairman of the Board**: م. محمود عبدالمعطي (Eng. Mahmoud Abdelmoaty)
- **Portfolio Scope**: 7 Residential Buildings, 56 Luxury Units (strictly 8 units per building)
- **Unit Areas**: 140 m² to 180 m²
- **Plot Areas**: 450 m² to 550 m²
- **Official Phones**:
  - Sales & Customer Service: `01113929136` – `01113929135`
  - Executive Administration: `01008159902`
  - WhatsApp Direct Link: `https://wa.me/201113929136`

---

## 📁 Project Structure

```
ElwahaCompanyProfile/
├── PRODUCT.md                  # Product truth & brand specification (Impeccable)
├── DESIGN.md                   # Design tokens, typography & component rules (Impeccable)
├── index.html                  # Root landing page (hero visual, intro, stats, featured projects, why alwaha, contact band)
├── pages/                      # All secondary subpages
│   ├── about.html              # Corporate story, vision/mission, chairman message, milestone timeline
│   ├── chairman.html           # Dedicated Chairman's address page
│   ├── projects.html           # 7 floral projects portfolio with Zone filter tabs (Zone 11, 12, 8, Al Ain)
│   ├── project-details.html    # Dynamic template supporting ?project=al-gouri query string
│   ├── project-al-gouri.html   # Static pre-rendered page: Al Gouri (عمارة 90، منطقة 11)
│   ├── project-al-yasmin.html  # Static pre-rendered page: Al Yasmin (عمارة 88، منطقة 11 المنقول)
│   ├── project-al-narges.html  # Static pre-rendered page: Al Narges (عمارة 10، منطقة العين)
│   ├── project-al-orchid.html  # Static pre-rendered page: Al Orchid (عمارة 22، منطقة العين)
│   ├── project-al-tulip.html   # Static pre-rendered page: Al Tulip (عمارة 21، منطقة 12)
│   ├── project-al-zanbaq.html  # Static pre-rendered page: Al Zanbaq (عمارة 139، منطقة 8)
│   ├── project-al-lotus.html   # Static pre-rendered page: Al Lotus (عمارة 36، منطقة 11)
│   ├── contact.html            # Contact inquiry form, phone dialers, WhatsApp link, map placeholder
│   └── 404.html                # Luxury branded 404 page
├── README.md                   # Operations and maintenance documentation
├── css/
│   ├── variables.css           # Design tokens: colors, spacing, typography scale, cubic-bezier easings
│   ├── reset.css               # Modern CSS reset
│   ├── base.css                # Typography, logical properties, browser surfaces theming (selection, scrollbars)
│   ├── layout.css              # Container constraints, responsive grids & flex systems
│   ├── components.css          # Header, navigation, footer, buttons, project cards, badges, forms
│   ├── animations.css          # IntersectionObserver reveals, custom editorial cursor
│   └── pages/
│       ├── home.css            # Hero stage, counters showcase, value points, contact band
│       ├── about.css           # Editorial typography, timeline flow, vision-mission grid
│       ├── projects.css        # Zone filter tabs, tall portrait card gallery, specs chips
│       └── contact.css         # Split contact layout, validation styling, status alerts
├── js/
│   ├── main.js                 # Shared runtime: sticky header, mobile drawer, cursor, scroll reveals, counters
│   ├── three-hero.js           # 3D architectural massing, gold edge highlights, ambient gold dust, parallax
│   ├── three-projects.js       # Subtle 3D tilt interaction for project cards
│   ├── audio.js                # Web Audio API engine + MP3 fallback: ambient drone, hover ticks, click feedback
│   ├── i18n.js                 # Complete AR/EN bilingual dictionary, dynamic DOM translator, localStorage persistence
│   └── vendor/
│       └── three.module.min.js # Local pinned Three.js ES module (no external CDN dependency)
└── assets/
    ├── images/
    │   ├── logo/               # logo.png, logo-mark.png, favicon.svg
    │   ├── hero/               # hero-bg-fallback.svg
    │   ├── projects/           # al-gouri/, al-yasmin/ ... each with 2 portrait images (facade & interior)
    │   ├── chairman/           # chairman-portrait.svg
    │   └── textures/
    ├── sounds/
    │   ├── ambient.mp3         # Ambient room drone loop
    │   ├── hover.mp3           # Sub-perceptual 15ms crisp tick
    │   └── click.mp3           # Soft tactile pop
    ├── fonts/
    └── icons/
```

---

## 🚀 How to Run Locally

### Option 1: Double-Click Directly (`file://` Protocol)
The website is engineered with strict relative paths and static HTML pre-rendered pages. You can double-click `index.html` directly in Windows File Explorer and it opens in any modern web browser (Edge, Chrome, Firefox, Safari).

### Option 2: Simple Local Static Server (Recommended for Three.js ES Modules)
If your browser restricts ES module imports over the `file://` protocol, run any lightweight static server:

```bash
# Using Node.js (npx serve)
npx serve .

# Or using Python (if installed)
python -m http.server 8000
```
Then navigate to `http://localhost:3000` or `http://localhost:8000`.

---

## 🌐 Language & Direction (Bilingual Arabic / English)

1. **Default Language**: Arabic (`lang="ar"`, `dir="rtl"`).
2. **Switching**: Click the **EN / عربي** toggle button in the header.
3. **Persistence**: The selected language is saved in `localStorage.getItem('alwaha_lang')`.
4. **Editing Copy**: Open `js/i18n.js` and edit the strings inside `translations.ar` or `translations.en`.
   - To add a new translated element, add `data-i18n="your_key"` to the HTML tag and add `your_key` to both dictionaries in `js/i18n.js`.

---

## 🔊 Sound System

- Sounds are **muted by default** (`localStorage.getItem('alwaha_audio_enabled') === 'false'`).
- Click the speaker icon in the header to enable or mute sound.
- The engine uses the native **Web Audio API** to synthesize a warm room drone (65Hz/130Hz) and subtle micro-clicks, with audio file fallbacks in `assets/sounds/`.
- To replace sound files, drop your audio into `assets/sounds/ambient.mp3`, `assets/sounds/hover.mp3`, and `assets/sounds/click.mp3`.

---

## 🎨 Changing Colors & Tokens

Open `css/variables.css` to update the global design tokens:

```css
:root {
  --color-bg-deep: #0E1A2A;        /* Deep midnight base */
  --color-bg-card: #16263F;        /* Refined card navy */
  --color-gold: #C9A24B;           /* Signature antique gold accent */
  --color-gold-light: #E6CB82;     /* Golden hour luminous highlight */
  --color-ivory: #F3EEDF;          /* High contrast primary text & headlines */
  --color-steel: #A9B4C8;          /* Secondary body text (tinted navy-steel) */
}
```

---

## 🖼️ Replacing Images

### 1. Logo
The authentic high-resolution Alwaha logo is located at:
`assets/images/logo/logo.png`
To update, replace the PNG file while preserving the dimensions.

### 2. Project Photos
Each of the 7 projects has a dedicated folder in `assets/images/projects/<project-id>/`:
- `facade.svg` (or `.webp` / `.jpg`): Architectural front view (portrait 3:4 aspect ratio, recommended 800x1067 px).
- `interior.svg` (or `.webp` / `.jpg`): Interior or lobby detail view shown on card hover.

### 3. Chairman Portrait
Replace `assets/images/chairman/WhatsApp Image 2026-10-24 at 16.22.25.jpeg` with an official photograph (portrait 4:5 aspect ratio, recommended 600x800 px).

---

## 📬 Contact Form Backend Integration

The contact form in `contact.html` operates client-side out of the box (validating name, phone, project interest, and displaying a success alert).

To connect to an email service or backend endpoint (e.g. Formspree, Netlify Forms, or PHP script):
1. In `contact.html`, locate `<form id="contact-form" action="#" method="POST">`.
2. Replace `action="#"` with your form endpoint URL (e.g., `action="https://formspree.io/f/your-id"`).
3. If using Netlify, add the attribute `netlify` or `data-netlify="true"` to the form tag.

---

## 🚢 Deployment

### Deploy to GitHub Pages
1. Push the repository to GitHub.
2. In your repository, go to **Settings** > **Pages**.
3. Under **Build and deployment**, select **Source: Deploy from a branch** and choose `main` / `/ (root)`.
4. Click **Save**. The website will be live in seconds.

### Deploy to Netlify
1. Drag and drop the `ElwahaCompanyProfile` folder directly into the Netlify dashboard at `app.netlify.com/drop`.
2. It deploys instantly with zero build step.

