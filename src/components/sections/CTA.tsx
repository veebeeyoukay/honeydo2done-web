'use client'

import React, { useState } from 'react'
import { AppStoreBadges } from '@/components/ui/AppStoreBadges'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { analytics } from '@/lib/analytics'

export const CTA: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          source: 'homepage-cta',
        }),
      })

      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || 'Something went wrong')
      }

      setSubmitStatus('success')
      setEmail('')
      analytics.emailSubmit('homepage-cta')
    } catch (error) {
      setSubmitStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit email')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 lg:py-24 honey-gradient">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-4">
            Ready to stop carrying it all?
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Download the app. Capture that thing that&apos;s been bugging you.
            <br />
            Feel the relief.
          </p>

          {/* App Store Badges */}
          <div className="mb-12">
            <AppStoreBadges size="lg" />
          </div>

          {/* Email Capture */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto">
            <p className="text-white mb-4 text-sm font-medium">
              Or enter your email and we&apos;ll send you the link:
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                error={submitStatus === 'error' ? errorMessage : undefined}
                className="bg-white"
              />
              <Button
                type="submit"
                variant="secondary"
                size="md"
                className="w-full bg-white text-honey-gold hover:bg-cloud-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send →'}
              </Button>
              {submitStatus === 'success' && (
                <p className="text-white text-sm">Check your inbox! 📬</p>
              )}
            </form>
            <p className="text-white/80 text-xs mt-4">
              🔒 No spam, ever. We respect your inbox like we respect your time.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
