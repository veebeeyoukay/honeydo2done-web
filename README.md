# HoneyDo2Done Marketing Website

A conversion-focused marketing website for HoneyDo2Done, built with Next.js 14, TypeScript, and Tailwind CSS.

## Overview

This website is designed to convert visitors into app downloads and email signups. It focuses on emotional resonance and clear value propositions, following the brand guidelines for HoneyDo2Done.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Database**: Supabase (for email capture)
- **Analytics**: Mixpanel + Google Analytics 4
- **Hosting**: Netlify
- **Icons**: Lucide React
- **Fonts**: Inter (body), Outfit (headlines)

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn
- Supabase account (for email capture)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/veebeeyoukay/honeydo2done-web.git
cd honeydo2done-web
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```

Edit `.env.local` with your credentials:
- `NEXT_PUBLIC_SUPABASE_URL` - Your Supabase project URL
- `NEXT_PUBLIC_SUPABASE_ANON_KEY` - Your Supabase anon key
- `SUPABASE_SERVICE_ROLE_KEY` - Your Supabase service role key (server-side only)
- `NEXT_PUBLIC_MIXPANEL_TOKEN` - Your Mixpanel token
- `NEXT_PUBLIC_GA_ID` - Your Google Analytics 4 ID
- `NEXT_PUBLIC_APP_STORE_IOS_URL` - iOS App Store link
- `NEXT_PUBLIC_APP_STORE_ANDROID_URL` - Google Play Store link

4. Set up Supabase:

Create the `email_leads` table:
```sql
CREATE TABLE email_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  source TEXT,
  utm_source TEXT,
  utm_medium TEXT,
  utm_campaign TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE email_leads ENABLE ROW LEVEL SECURITY;

-- Allow public inserts
CREATE POLICY "Allow public inserts" ON email_leads
  FOR INSERT
  TO anon
  WITH CHECK (true);
```

5. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
honeydo-webb/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── (marketing)/        # Marketing pages
│   │   ├── legal/              # Legal pages
│   │   ├── api/                # API routes
│   │   └── layout.tsx          # Root layout
│   ├── components/
│   │   ├── layout/             # Header, Footer, MobileMenu
│   │   ├── sections/           # Page sections
│   │   ├── ui/                 # Reusable UI components
│   │   └── analytics/          # Analytics components
│   ├── lib/                    # Utilities and helpers
│   └── styles/                 # Global styles and tokens
├── public/                     # Static assets
└── _aiwk/                      # AI working folder
```

## Available Pages

- `/` - Homepage
- `/how-it-works` - How It Works page
- `/pricing` - Pricing page
- `/faq` - FAQ page
- `/download` - Download page
- `/legal/privacy` - Privacy Policy
- `/legal/terms` - Terms of Service

## Building for Production

```bash
npm run build
npm start
```

## Deployment

This site is configured for Netlify deployment. The `netlify.toml` file contains the build configuration.

1. Connect your repository to Netlify
2. Set environment variables in Netlify dashboard
3. Deploy!

## Brand Guidelines

All components follow the HoneyDo2Done brand guide:
- **Colors**: Honey Gold (#F5A623), Trust Navy (#1E3A5F), Soft Slate (#64748B)
- **Typography**: Inter (body), Outfit (headlines)
- **Spacing**: 8px base unit
- **Icons**: Lucide React (1.5px stroke)

## Performance Targets

- Lighthouse Performance: 95+
- Lighthouse Accessibility: 100
- LCP: <2.5s
- FID: <100ms
- CLS: <0.1

## License

Proprietary - HoneyDo2Done
