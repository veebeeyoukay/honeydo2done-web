'use client'

import React, { useEffect } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { analytics } from '@/lib/analytics'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
      }
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      return () => document.removeEventListener('keydown', handleEscape)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  const handleLinkClick = () => {
    onClose()
  }

  const handleCTAClick = () => {
    analytics.ctaClick('Get the App', 'mobile-menu')
    onClose()
  }

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-navy/50 backdrop-blur-sm z-50 lg:hidden"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Menu Panel */}
      <div
        className="fixed top-0 right-0 bottom-0 w-80 max-w-[85vw] bg-white shadow-level-5 z-50 lg:hidden transform transition-transform duration-normal ease-out"
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-slate-200">
            <span className="text-xl font-display font-bold">
              <span className="text-navy">HoneyDo</span>
              <span className="text-honey-gold">2Done</span>
            </span>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-slate hover:text-navy focus:outline-none focus:ring-2 focus:ring-honey-gold rounded-md transition-colors"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 overflow-y-auto p-6">
            <div className="flex flex-col space-y-4">
              <Link
                href="/how-it-works"
                onClick={handleLinkClick}
                className="text-lg text-navy hover:text-honey-gold font-medium py-2 transition-colors duration-fast"
              >
                How It Works
              </Link>
              <Link
                href="/pricing"
                onClick={handleLinkClick}
                className="text-lg text-navy hover:text-honey-gold font-medium py-2 transition-colors duration-fast"
              >
                Pricing
              </Link>
              <Link
                href="/stories"
                onClick={handleLinkClick}
                className="text-lg text-navy hover:text-honey-gold font-medium py-2 transition-colors duration-fast"
              >
                Stories
              </Link>
              <Link
                href="/rewards"
                onClick={handleLinkClick}
                className="text-lg text-navy hover:text-honey-gold font-medium py-2 transition-colors duration-fast"
              >
                Rewards
              </Link>
              <Link
                href="/about"
                onClick={handleLinkClick}
                className="text-lg text-navy hover:text-honey-gold font-medium py-2 transition-colors duration-fast"
              >
                About
              </Link>
              <Link
                href="/faq"
                onClick={handleLinkClick}
                className="text-lg text-navy hover:text-honey-gold font-medium py-2 transition-colors duration-fast"
              >
                FAQ
              </Link>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <div className="flex flex-col space-y-4">
                <Button
                  variant="primary"
                  size="md"
                  className="w-full"
                  onClick={handleCTAClick}
                  asChild
                >
                  <Link href="/download">Get the App</Link>
                </Button>
                <div className="text-sm text-slate text-center">
                  <Link
                    href="/download"
                    onClick={handleLinkClick}
                    className="block py-2 hover:text-honey-gold transition-colors"
                  >
                    Download for iOS
                  </Link>
                  <Link
                    href="/download"
                    onClick={handleLinkClick}
                    className="block py-2 hover:text-honey-gold transition-colors"
                  >
                    Download for Android
                  </Link>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
