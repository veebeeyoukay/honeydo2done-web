'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { AppStoreBadges } from '@/components/ui/AppStoreBadges'
import { analytics } from '@/lib/analytics'

export const Hero: React.FC = () => {
  const handleCTAClick = (cta: string) => {
    analytics.ctaClick(cta, 'hero')
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden warm-glow-gradient">
      {/* Animated background gradient */}
      <div className="absolute inset-0 honey-gradient opacity-5 animate-pulse" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Optional Eyebrow */}
          <p className="text-sm font-medium text-slate mb-4 uppercase tracking-wide">
            For everyone who carries the mental load
          </p>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-navy mb-6 leading-tight">
            From &quot;Honey, can you...&quot;
            <br />
            <span className="text-honey-gold">to Done.</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate mb-8 max-w-2xl mx-auto leading-relaxed">
            The app that finally gets how overwhelming home stuff can be.
            <br />
            Capture it. Get guidance. Or let someone handle it. Your call.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button
              variant="primary"
              size="lg"
              onClick={() => handleCTAClick('Get the App')}
              asChild
            >
              <Link href="/download">Get the App</Link>
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => handleCTAClick('See How It Works')}
              asChild
            >
              <Link href="/how-it-works">See How It Works</Link>
            </Button>
          </div>

          {/* App Store Badges */}
          <div className="mb-8">
            <AppStoreBadges size="md" />
          </div>

          {/* Trust Signal */}
          <div className="max-w-xl mx-auto">
            <blockquote className="text-slate italic text-base sm:text-lg">
              &quot;I cried when I finally got that printer set up. It had been in the box for 2 months.&quot;
              <footer className="mt-2 text-sm not-italic text-slate-400">
                — Maria, Tampa
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
