'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { MobileMenu } from './MobileMenu'
import { analytics } from '@/lib/analytics'

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCTAClick = () => {
    analytics.ctaClick('Get the App', 'header')
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-normal ${
          isScrolled
            ? 'bg-white shadow-level-2'
            : 'bg-white/95 backdrop-blur-sm'
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center space-x-2 focus:outline-none focus:ring-2 focus:ring-honey-gold focus:ring-offset-2 rounded-md"
              aria-label="HoneyDo2Done Home"
            >
              <span className="text-2xl font-display font-bold">
                <span className="text-navy">HoneyDo</span>
                <span className="text-honey-gold">2Done</span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <Link
                href="/how-it-works"
                className="text-slate hover:text-navy font-medium transition-colors duration-fast"
              >
                How It Works
              </Link>
              <Link
                href="/pricing"
                className="text-slate hover:text-navy font-medium transition-colors duration-fast"
              >
                Pricing
              </Link>
              <Link
                href="/stories"
                className="text-slate hover:text-navy font-medium transition-colors duration-fast"
              >
                Stories
              </Link>
              <Button
                variant="primary"
                size="md"
                onClick={handleCTAClick}
                asChild
              >
                <Link href="/download">Get the App</Link>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-navy hover:text-honey-gold focus:outline-none focus:ring-2 focus:ring-honey-gold rounded-md transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}
