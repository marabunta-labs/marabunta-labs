# 🐜 Marabunta Labs - Official Website

[![Vercel](https://therealsujitk-vercel-badge.vercel.app/?app=marabunta-labs&style=flat-square)](https://marabunta-labs.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

This repository contains the source code for the **Marabunta Labs Landing Page**, the central hub for the "12 Projects in 12 Months" challenge.

It handles the newsletter subscription (Kit integration), project showcase, and serves as the main entry point for the Marabunta ecosystem.

## ⚡ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) + [Lucide React](https://lucide.dev/) (Icons)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Newsletter:** Kit (formerly ConvertKit) API
- **Deployment:** Vercel

## 🔋 Features

- **Newsletter Integration:** Server-side API route connecting to Kit for secure audience building.
- **Dynamic Open Graph:** Auto-generated social cards using `next/og` for better sharing on Twitter/WhatsApp.
- **Responsive & Dark Mode:** Mobile-first design with a custom dark UI theme.
- **SEO Optimized:** Automated `sitemap.xml`, `robots.txt`, and semantic HTML structure.

## 🛠️ Getting Started

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone https://github.com/marabunta-labs/marabunta-labs-web.git
cd marabunta-labs-web
```

### 2. Install dependencies
```bash
npm install
```
### 3. Configure Environment Variables
Create a .env.local file in the root directory. You need these keys for the newsletter form to work:

```bash
# Kit (ConvertKit) Configuration
NEXT_PUBLIC_KIT_API_KEY=your_public_api_key_here
NEXT_PUBLIC_KIT_FORM_ID=your_form_id_here
```

### 4. Run the development server
```bash
npm run dev
```
Open http://localhost:3000 with your browser to see the result.


## 📂 Project Structure
```bash
.
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout, fonts & metadata
│   ├── page.tsx          # Main Landing Page
│   └── opengraph-image.tsx # Dynamic OG Image generator
├── public/               # Static assets (images, icons)
└── ...

```
## 🚢 Deployment
The project is deployed on Vercel. Any push to the main branch will trigger a production deployment.

```bash
git push origin main
```
## 📄 License
This project is part of the Marabunta Labs challenge. Copyright © 2026 Marabunta Labs.