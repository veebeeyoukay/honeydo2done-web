'use client'

import React, { useState } from 'react'
import { Accordion } from '@/components/ui/Accordion'
import { Input } from '@/components/ui/Input'
import { Search } from 'lucide-react'

const allFaqs = {
  'Getting Started': [
    {
      id: 'what-is',
      question: 'What exactly is HoneyDo2Done?',
      answer: 'It\'s an app that helps you capture, manage, and actually complete home tasks—whether you want to DIY or hire a pro. Think of it as a capable friend who\'s good at home stuff and always available.',
    },
    {
      id: 'homeowners-only',
      question: 'Is this only for homeowners?',
      answer: 'Nope! Renters, apartment dwellers, condo owners—anyone with home stuff that needs handling. If you have a space, we can help.',
    },
    {
      id: 'handy',
      question: 'Do I need to be handy to use this?',
      answer: 'Not at all. In fact, we built this specifically for people who don\'t consider themselves "handy." Our AI meets you at your skill level.',
    },
    {
      id: 'google-diff',
      question: 'How is this different from just Googling my problem?',
      answer: 'Google gives you generic results. We give you personalized guidance based on YOUR home, YOUR skill level, and YOUR specific situation. Plus, we remember what we\'ve learned about you over time.',
    },
  ],
  'Pricing & Plans': [
    {
      id: 'free',
      question: 'Is the app really free?',
      answer: 'Yes! The free tier gives you 5 tasks per month and access to our pro network. Paid plans add more features like DIY guidance, multiple properties, and family accounts.',
    },
    {
      id: 'diy-guidance',
      question: 'What\'s included in the DIY guidance?',
      answer: 'Our AI walks you through fixing things yourself, step by step, based on your skill level. It\'s like having a patient friend who\'s done this before.',
    },
    {
      id: 'cancel',
      question: 'Can I cancel anytime?',
      answer: 'Yes. No contracts, no cancellation fees. Cancel anytime from the app.',
    },
  ],
  'Family Features': [
    {
      id: 'family-plan',
      question: 'How does the family plan work?',
      answer: 'You can add up to 5 family members to your account. Each person gets their own profile, and our AI adapts its communication style to each person. Works with iOS Family Sharing too.',
    },
    {
      id: 'parents-home',
      question: 'Can I manage my parents\' home?',
      answer: 'Yes! Add their property to your account. When they interact with the app, the AI uses a more patient, supportive tone. You get visibility without having to be the middleman.',
    },
  ],
  'Privacy & Security': [
    {
      id: 'data-use',
      question: 'What do you do with my data?',
      answer: 'We use it to make the app work better for you. We don\'t sell your data, ever. See our privacy policy for the full details.',
    },
    {
      id: 'secure',
      question: 'Is my home information secure?',
      answer: 'Yes. We use industry-standard encryption and security practices. Your home details are private.',
    },
  ],
}

export default function FAQPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string>('All')

  const categories = ['All', ...Object.keys(allFaqs)]

  const filteredFaqs = Object.entries(allFaqs).flatMap(([category, items]) => {
    if (activeCategory !== 'All' && activeCategory !== category) return []
    
    if (!searchQuery) return items.map(item => ({ ...item, category }))
    
    const query = searchQuery.toLowerCase()
    return items
      .filter(item => 
        item.question.toLowerCase().includes(query) ||
        item.answer.toLowerCase().includes(query)
      )
      .map(item => ({ ...item, category }))
  })

  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy mb-6">
            Questions? Answered.
          </h1>
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              type="search"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12"
            />
          </div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-honey-gold text-white'
                  : 'bg-slate-100 text-slate hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* FAQ Accordions */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {filteredFaqs.length > 0 ? (
            <Accordion items={filteredFaqs} />
          ) : (
            <div className="text-center py-12">
              <p className="text-slate text-lg">
                No FAQs found matching &quot;{searchQuery}&quot;
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
