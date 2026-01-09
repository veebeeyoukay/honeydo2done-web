'use client'

import React, { useState } from 'react'
import { AppStoreBadges } from '@/components/ui/AppStoreBadges'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { analytics } from '@/lib/analytics'

export default function DownloadPage() {
  const [phoneNumber, setPhoneNumber] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSMSSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    // In a real implementation, this would send an SMS via an API
    // For now, we'll just simulate it
    setTimeout(() => {
      setSubmitStatus('success')
      setIsSubmitting(false)
      analytics.ctaClick('Send SMS link', 'download-page')
    }, 1000)
  }

  return (
    <div className="py-16 lg:py-24 min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          {/* App Icon Placeholder */}
          <div className="w-32 h-32 mx-auto mb-8 bg-honey-gold rounded-3xl flex items-center justify-center">
            <span className="text-6xl">🍯</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-navy mb-6">
            Get HoneyDo2Done
          </h1>
          <p className="text-xl sm:text-2xl text-slate mb-4">
            Start feeling better about home stuff.
          </p>
          <p className="text-slate mb-12">
            Free to download. No credit card required.
          </p>

          {/* App Store Badges */}
          <div className="mb-12">
            <AppStoreBadges size="lg" />
          </div>

          <div className="border-t border-slate-200 pt-12 space-y-8">
            {/* SMS Option */}
            <div>
              <p className="text-slate mb-4">Or text yourself the link:</p>
              <form onSubmit={handleSMSSubmit} className="max-w-md mx-auto">
                <div className="flex gap-2">
                  <Input
                    type="tel"
                    placeholder="(555) 123-4567"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                    disabled={isSubmitting}
                    className="flex-1"
                  />
                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send'}
                  </Button>
                </div>
                {submitStatus === 'success' && (
                  <p className="text-success-green text-sm mt-2">
                    Link sent! Check your phone.
                  </p>
                )}
              </form>
            </div>

            {/* QR Code Placeholder */}
            <div>
              <p className="text-slate mb-4">QR Code:</p>
              <div className="w-48 h-48 mx-auto bg-slate-100 rounded-lg flex items-center justify-center border-2 border-dashed border-slate-300">
                <p className="text-slate text-sm text-center px-4">
                  QR Code<br />Placeholder
                </p>
              </div>
              <p className="text-slate text-sm mt-4">
                Point your camera. Download. Done.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
