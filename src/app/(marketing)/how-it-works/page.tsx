'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { analytics } from '@/lib/analytics'

const steps = [
  {
    number: '1',
    title: 'Voice? Text? Photo? Yes.',
    subtitle: 'Just tell us what\'s going on.',
    description: 'Say it out loud, type it out, or snap a photo. Use whatever words you have—we\'ll figure out what you mean.',
    example: '"The thing under the sink is doing that thing again." Yep, that\'s enough. We\'ve got it from here.',
  },
  {
    number: '2',
    title: 'We ask the smart questions.',
    subtitle: 'Our AI has handled thousands of home issues.',
    description: 'It knows what to ask to get to the root of what\'s going on—without making you feel like you should already know.',
    bullets: [
      'When did you first notice this?',
      'Does it happen all the time or just sometimes?',
      'Have you tried anything already?',
    ],
  },
  {
    number: '3',
    title: 'Choose Your Path',
    subtitle: 'DIY or "just handle it." No wrong answer.',
    description: 'Some things you want to tackle yourself. Some things you want off your plate immediately. We support both.',
    options: [
      {
        title: '🛠 DIY Mode',
        description: 'Step-by-step guidance from our AI that knows your skill level. Learn something new. Feel accomplished.',
      },
      {
        title: '✨ Get a Pro',
        description: 'Vetted local pros who show up on time and do quality work. We coordinate. You relax.',
      },
    ],
  },
  {
    number: '4',
    title: 'Done',
    subtitle: 'The best part.',
    description: 'That weight you\'ve been carrying? Gone. And we\'ll check in to make sure you\'re actually feeling better—not just that the task is "complete."',
    closing: 'Because it was never really about the task, was it?',
  },
]

const features = [
  {
    icon: '🎤',
    title: 'Talk, Don\'t Type',
    description: 'Voice-first capture means you can explain the problem like you would to a friend. No forms. No dropdowns.',
  },
  {
    icon: '🧠',
    title: 'AI That Learns You',
    description: 'Over time, we remember your home, your skill level, and how you like to be talked to.',
  },
  {
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Mode',
    description: 'Add family members. We adapt our tone for each person. Efficient for him, patient for mom.',
  },
  {
    icon: '🏆',
    title: 'Earn Experiences',
    description: 'Tasks completed = points earned. Points become spa days, wine tastings, and nights out.',
  },
  {
    icon: '📊',
    title: 'See Your Progress',
    description: 'Track your home wellness score. Watch your stress level drop as tasks get handled.',
  },
  {
    icon: '🔒',
    title: 'Your Data, Your Control',
    description: 'We\'re not selling your info. We\'re not an ads company. We make money when we make your life easier.',
  },
]

export default function HowItWorksPage() {
  const handleCTAClick = () => {
    analytics.ctaClick('Get the App', 'how-it-works-page')
  }

  return (
    <div className="py-16 lg:py-24">
      {/* Hero */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy mb-6">
            The simplest thing you&apos;ll do all week.
          </h1>
          <p className="text-xl sm:text-2xl text-slate leading-relaxed">
            Seriously. If you can complain about something, you can use HoneyDo2Done.
          </p>
        </div>
      </section>

      {/* Detailed Flow */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-20 mb-20">
        {steps.map((step, index) => (
          <div key={index} className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-12 h-12 bg-honey-gold text-white rounded-full flex items-center justify-center font-display font-bold text-xl">
                {step.number}
              </div>
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-display font-bold text-navy mb-2">
                  {step.title}
                </h2>
                <p className="text-lg text-slate mb-4">{step.subtitle}</p>
                <p className="text-slate leading-relaxed mb-4">{step.description}</p>
                
                {step.example && (
                  <div className="bg-soft-honey border-l-4 border-l-honey-gold p-4 rounded-md my-4">
                    <p className="text-slate italic">{step.example}</p>
                  </div>
                )}
                
                {step.bullets && (
                  <ul className="list-disc list-inside space-y-2 text-slate ml-4">
                    {step.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
                
                {step.options && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {step.options.map((option, i) => (
                      <Card key={i} hover>
                        <h3 className="font-display font-bold text-navy mb-2">{option.title}</h3>
                        <p className="text-slate text-sm">{option.description}</p>
                      </Card>
                    ))}
                  </div>
                )}
                
                {step.closing && (
                  <p className="text-lg font-medium text-navy mt-6 italic">{step.closing}</p>
                )}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div className="flex justify-center my-8">
                <div className="w-px h-12 bg-slate-300" />
              </div>
            )}
          </div>
        ))}
      </section>

      {/* Feature Highlights */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-display font-bold text-navy text-center mb-12">
            What makes this different
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card key={index} hover>
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-display font-bold text-navy mb-2">
                  {feature.title}
                </h3>
                <p className="text-slate leading-relaxed">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center bg-soft-honey rounded-2xl p-12">
          <h2 className="text-3xl font-display font-bold text-navy mb-4">
            Ready to try it?
          </h2>
          <Button
            variant="primary"
            size="lg"
            onClick={handleCTAClick}
            asChild
          >
            <Link href="/download">Get the App</Link>
          </Button>
          <p className="text-slate mt-4 text-sm">
            Free to start. Upgrade when you&apos;re ready.
          </p>
        </div>
      </section>
    </div>
  )
}
