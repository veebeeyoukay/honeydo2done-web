import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { analytics } from '@/lib/analytics'

const steps = [
  {
    emoji: '📱',
    title: 'Tell us what\'s bugging you',
    description: 'Voice, text, photo—whatever\'s easiest. We\'ll ask the right questions so you don\'t have to figure out what to say.',
  },
  {
    emoji: '💡',
    title: 'Get your options',
    description: 'DIY guidance if you want to handle it yourself. Or we\'ll connect you with someone who can. No judgment either way.',
  },
  {
    emoji: '✨',
    title: 'Feel the relief',
    description: 'That thing that\'s been weighing on you? Off your plate. Finally.',
  },
]

export const HowItWorks: React.FC = () => {
  const handleCTAClick = () => {
    analytics.ctaClick('Take something off your plate', 'how-it-works')
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy text-center mb-12">
            Here&apos;s the deal.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{step.emoji}</div>
                <h3 className="text-xl sm:text-2xl font-display font-bold text-navy mb-3">
                  {step.title}
                </h3>
                <p className="text-slate leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button
              variant="primary"
              size="lg"
              onClick={handleCTAClick}
              asChild
            >
              <Link href="/download">Take something off your plate →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
