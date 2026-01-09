'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { Check } from 'lucide-react'
import { analytics } from '@/lib/analytics'

const plans = {
  monthly: [
    {
      name: 'Free',
      tagline: 'Dip your toes',
      price: 0,
      features: [
        '1 property',
        '5 tasks/month',
        'Basic AI',
        'Pro access (pay per job)',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Plus',
      tagline: 'Your sidekick',
      price: 19,
      features: [
        'Everything in Free, plus:',
        '3 properties',
        'Unlimited tasks',
        '30 min/mo DIY guidance',
        'Task journal',
        'Rewards',
      ],
      cta: 'Start Plus',
      popular: false,
    },
    {
      name: 'Pro',
      tagline: 'Confidence mode',
      price: 49,
      features: [
        'Everything in Plus, plus:',
        '5 properties',
        '2 hrs/mo DIY guidance',
        'Priority response',
        'AI learns you',
        '10% off pros',
        '2x rewards',
      ],
      cta: 'Start Pro',
      popular: true,
    },
    {
      name: 'Family',
      tagline: 'Multi-gen magic',
      price: 79,
      features: [
        'Everything in Pro, plus:',
        'Unlimited properties',
        '5 hrs/mo DIY guidance',
        'Add 5 family members',
        'Adaptive AI per person',
        '15% off pros',
        '3x rewards',
      ],
      cta: 'Start Family',
      popular: false,
    },
  ],
  yearly: [
    {
      name: 'Free',
      tagline: 'Dip your toes',
      price: 0,
      features: [
        '1 property',
        '5 tasks/month',
        'Basic AI',
        'Pro access (pay per job)',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Plus',
      tagline: 'Your sidekick',
      price: 15.2, // 20% off
      priceOriginal: 19,
      features: [
        'Everything in Free, plus:',
        '3 properties',
        'Unlimited tasks',
        '30 min/mo DIY guidance',
        'Task journal',
        'Rewards',
      ],
      cta: 'Start Plus',
      popular: false,
    },
    {
      name: 'Pro',
      tagline: 'Confidence mode',
      price: 39.2, // 20% off
      priceOriginal: 49,
      features: [
        'Everything in Plus, plus:',
        '5 properties',
        '2 hrs/mo DIY guidance',
        'Priority response',
        'AI learns you',
        '10% off pros',
        '2x rewards',
      ],
      cta: 'Start Pro',
      popular: true,
    },
    {
      name: 'Family',
      tagline: 'Multi-gen magic',
      price: 63.2, // 20% off
      priceOriginal: 79,
      features: [
        'Everything in Pro, plus:',
        'Unlimited properties',
        '5 hrs/mo DIY guidance',
        'Add 5 family members',
        'Adaptive AI per person',
        '15% off pros',
        '3x rewards',
      ],
      cta: 'Start Family',
      popular: false,
    },
  ],
}

const faqItems = [
  {
    question: 'Can I change plans anytime?',
    answer: 'Yes. Upgrade, downgrade, or cancel anytime. No contracts, no hassle.',
  },
  {
    question: 'What happens if I use all my DIY guidance minutes?',
    answer: 'You can buy more ($9 for 30 min), upgrade your plan, or just wait until next month. No pressure.',
  },
  {
    question: 'Do unused minutes roll over?',
    answer: 'They don\'t roll over, but we find most people don\'t use all their minutes anyway. It\'s there when you need it.',
  },
  {
    question: 'Is there a family discount?',
    answer: 'The Family plan IS the discount—you get up to 6 people for one price. Plus, it works with iOS Family Sharing.',
  },
  {
    question: 'What\'s included in "Pro access"?',
    answer: 'All plans can connect with our vetted pros for bigger jobs. You pay the pro directly (minus your member discount if applicable).',
  },
]

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly')
  const currentPlans = plans[billingCycle]

  const handlePlanSelect = (planName: string) => {
    analytics.planSelect(planName)
  }

  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy mb-6">
            Pick your peace of mind.
          </h1>
          <p className="text-xl sm:text-2xl text-slate">
            Start free. Upgrade when life gets busier.
          </p>
        </div>
      </section>

      {/* Billing Toggle */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={() => setBillingCycle('monthly')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              billingCycle === 'monthly'
                ? 'bg-honey-gold text-white'
                : 'bg-slate-100 text-slate hover:bg-slate-200'
            }`}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBillingCycle('yearly')}
            className={`px-6 py-2 rounded-md font-medium transition-colors ${
              billingCycle === 'yearly'
                ? 'bg-honey-gold text-white'
                : 'bg-slate-100 text-slate hover:bg-slate-200'
            }`}
          >
            Yearly <span className="text-sm">(Save 20%)</span>
          </button>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {currentPlans.map((plan, index) => (
            <Card
              key={index}
              className={`relative ${plan.popular ? 'border-2 border-honey-gold shadow-level-3' : ''}`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-honey-gold text-white px-4 py-1 rounded-full text-sm font-semibold">
                  ⭐ Most Popular
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-2xl font-display font-bold text-navy mb-2">
                  {plan.name}
                </h3>
                <p className="text-slate text-sm mb-4">{plan.tagline}</p>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-navy">
                    ${plan.price}
                  </span>
                  {plan.priceOriginal && (
                    <>
                      <span className="text-xl text-slate line-through ml-2">
                        ${plan.priceOriginal}
                      </span>
                    </>
                  )}
                  <span className="text-slate text-lg">/month</span>
                </div>
              </div>
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate">
                    <Check className="w-5 h-5 text-honey-gold flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.popular ? 'primary' : 'secondary'}
                size="md"
                className="w-full"
                onClick={() => handlePlanSelect(plan.name)}
                asChild
              >
                <Link href="/download">{plan.cta}</Link>
              </Button>
            </Card>
          ))}
        </div>
      </section>

      {/* Concierge Callout */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <Card className="bg-gradient-to-br from-navy to-slate-800 text-white border-0">
          <div className="text-center">
            <div className="text-4xl mb-4">👑</div>
            <h2 className="text-3xl font-display font-bold mb-2">Concierge</h2>
            <p className="text-xl mb-4 italic">&quot;Just handle it.&quot;</p>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              For those whose time is worth more than anything.
            </p>
            <p className="text-2xl font-bold mb-6">Starting at $199/month</p>
            <ul className="text-left max-w-md mx-auto space-y-2 mb-8 text-white/90">
              <li>• Unlimited everything</li>
              <li>• Dedicated human coordinator</li>
              <li>• 15-minute emergency response</li>
              <li>• Proactive home monitoring</li>
              <li>• 25% off all services</li>
              <li>• Exclusive experiences</li>
            </ul>
            <Button
              variant="secondary"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              asChild
            >
              <Link href="/contact">Talk to Us About Concierge</Link>
            </Button>
          </div>
        </Card>
      </section>

      {/* FAQ */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold text-navy text-center mb-12">
            Pricing Questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <Card key={index}>
                <h3 className="font-semibold text-navy mb-2">{item.question}</h3>
                <p className="text-slate leading-relaxed">{item.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="bg-soft-honey border-0 max-w-2xl mx-auto text-center">
          <div className="text-4xl mb-4">🛡️</div>
          <h2 className="text-2xl font-display font-bold text-navy mb-4">
            Our Promise
          </h2>
          <p className="text-slate leading-relaxed mb-4">
            Try any paid plan for 14 days. If you don&apos;t feel less stressed about home stuff, we&apos;ll refund you completely. No questions asked.
          </p>
          <p className="text-navy font-semibold">
            We only win when you feel better.
          </p>
        </Card>
      </section>
    </div>
  )
}
