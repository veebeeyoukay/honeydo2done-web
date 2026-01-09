import React from 'react'
import { Card } from '@/components/ui/Card'

const emotionCards = [
  {
    emoji: '😤',
    quote: '"It\'s been on my list for 3 weeks and every time I see it, I feel like I\'m failing."',
  },
  {
    emoji: '😰',
    quote: '"I don\'t even know if this is a big deal or not. I just want someone to tell me."',
  },
  {
    emoji: '🤷‍♀️',
    quote: '"My partner said he\'d handle it. That was a month ago."',
  },
  {
    emoji: '😓',
    quote: '"I could probably figure it out myself but I don\'t have the bandwidth right now."',
  },
  {
    emoji: '😔',
    quote: '"I\'m embarrassed to have someone over because of that one thing."',
  },
  {
    emoji: '😩',
    quote: '"I\'ve Googled this 4 times and I still don\'t understand what I\'m supposed to do."',
  },
]

export const EmotionalMirror: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-cloud-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy text-center mb-12">
            Sound familiar?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {emotionCards.map((card, index) => (
              <Card key={index} hover className="text-center">
                <div className="text-4xl mb-4">{card.emoji}</div>
                <p className="text-slate leading-relaxed font-medium">{card.quote}</p>
              </Card>
            ))}
          </div>

          <p className="text-2xl sm:text-3xl font-display font-bold text-navy text-center">
            Yeah. We know.
          </p>
        </div>
      </div>
    </section>
  )
}
