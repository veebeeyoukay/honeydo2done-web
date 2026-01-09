import React from 'react'
import Link from 'next/link'
import { Accordion } from '@/components/ui/Accordion'
import { Button } from '@/components/ui/Button'
import { analytics } from '@/lib/analytics'

const faqItems = [
  {
    id: 'homeowners',
    question: 'Is this just for homeowners?',
    answer: 'Nope. Renters, apartment dwellers, condo owners—if you have home stuff that needs handling, we\'re here for it.',
  },
  {
    id: 'diy',
    question: 'Do I have to hire someone, or can I DIY?',
    answer: 'Your call, always. Our AI can walk you through fixing things yourself, or connect you with a vetted pro. No judgment either way.',
  },
  {
    id: 'describe',
    question: 'What if I don\'t know how to describe the problem?',
    answer: 'That\'s literally what we\'re here for. Just tell us what\'s bugging you in whatever words you have. We\'ll ask the right questions.',
  },
  {
    id: 'human',
    question: 'Is there an actual human I can talk to?',
    answer: 'Yes! Our AI handles most things, but real humans are always available, especially for our Family and Concierge members.',
  },
  {
    id: 'google',
    question: 'How is this different from just Googling it?',
    answer: 'Google gives you 10 blue links. We give you answers specific to YOUR situation, YOUR home, YOUR skill level. And we remember what we\'ve learned about you.',
  },
  {
    id: 'cost',
    question: 'What does it cost?',
    answer: 'The app is free to start. Paid plans start at $19/month for more DIY guidance and features. See pricing →',
  },
]

export const FAQ: React.FC = () => {
  const handleCTAClick = () => {
    analytics.ctaClick('Still have questions?', 'faq')
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy text-center mb-4">
            Questions you might have
          </h2>
          <p className="text-slate text-center mb-12 text-lg">
            (but shouldn&apos;t feel weird asking)
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
            <Accordion items={faqItems.slice(0, 3)} />
            <Accordion items={faqItems.slice(3)} />
          </div>

          <div className="text-center">
            <Button
              variant="text"
              size="lg"
              onClick={handleCTAClick}
              asChild
            >
              <Link href="/faq">Still have questions? We&apos;ve got answers →</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
