import React from 'react'
import Link from 'next/link'
import { Card } from '@/components/ui/Card'
import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: 'I told the app about my printer that had been in the box for 2 months. 10 minutes later, it was set up. I literally teared up.',
    name: 'Maria',
    age: 32,
    location: 'Tampa',
    membership: 'Plus member',
  },
  {
    quote: 'My husband has a list of things I\'ve asked him to do. Now I just put them in the app and he gets a clear brief. No nagging. No arguments. It\'s magic.',
    name: 'Jennifer',
    age: 42,
    location: 'Davis Islands',
    membership: 'Family member',
  },
  {
    quote: 'I manage my mom\'s condo from across town. The app talks to her the way she needs, and I stay out of it. Game changer.',
    name: 'Sarah',
    age: 38,
    location: 'Hyde Park',
    membership: 'Family member',
  },
  {
    quote: 'As a single woman, I used to dread anything going wrong in my apartment. Now I feel like I have a capable friend on call.',
    name: 'Alex',
    age: 29,
    location: 'SoHo Tampa',
    membership: 'Pro member',
  },
]

const StarRating: React.FC = () => (
  <div className="flex items-center gap-1 text-honey-gold">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-current" />
    ))}
  </div>
)

export const SocialProof: React.FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-cloud-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-navy text-center mb-12">
            People who get it.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} hover className="border-l-4 border-l-honey-gold">
                <p className="text-slate mb-4 leading-relaxed">&quot;{testimonial.quote}&quot;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-navy">
                      {testimonial.name}, {testimonial.age}
                    </p>
                    <p className="text-sm text-slate">
                      {testimonial.location} • {testimonial.membership}
                    </p>
                  </div>
                  <StarRating />
                </div>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/stories"
              className="text-honey-gold hover:text-deep-honey font-semibold text-lg transition-colors duration-fast inline-flex items-center gap-2"
            >
              Read more stories →
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
