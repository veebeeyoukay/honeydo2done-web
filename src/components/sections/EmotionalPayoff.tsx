'use client'

import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { analytics } from '@/lib/analytics'

export const EmotionalPayoff: React.FC = () => {
  const handleCTAClick = () => {
    analytics.ctaClick('Get that feeling', 'emotional-payoff')
  }

  return (
    <section className="py-20 lg:py-32 bg-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-6 mb-8">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold">
              It&apos;s not about the faucet.
            </p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold">
              It&apos;s not about the WiFi.
            </p>
            <p className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold">
              It&apos;s not about the thing in the garage.
            </p>
          </div>
          
          <p className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-honey-gold mb-12">
            It&apos;s about not carrying it anymore.
          </p>

          <Button
            variant="secondary"
            size="lg"
            onClick={handleCTAClick}
            className="border-white text-white hover:bg-white/10"
            asChild
          >
            <Link href="/download">Get that feeling →</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
