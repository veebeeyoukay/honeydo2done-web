import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Linkedin } from 'lucide-react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-cloud-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-block mb-4 focus:outline-none focus:ring-2 focus:ring-honey-gold focus:ring-offset-2 focus:ring-offset-navy rounded-md"
            >
              <span className="text-2xl font-display font-bold">
                <span className="text-cloud-white">HoneyDo</span>
                <span className="text-honey-gold">2Done</span>
              </span>
            </Link>
            <p className="text-slate-300 text-sm leading-relaxed">
              The app for everyone who's tired of carrying the mental load of home stuff.
            </p>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/how-it-works"
                  className="text-slate-300 hover:text-honey-gold transition-colors duration-fast text-sm"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-slate-300 hover:text-honey-gold transition-colors duration-fast text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/rewards"
                  className="text-slate-300 hover:text-honey-gold transition-colors duration-fast text-sm"
                >
                  Rewards
                </Link>
              </li>
              <li>
                <Link
                  href="/download"
                  className="text-slate-300 hover:text-honey-gold transition-colors duration-fast text-sm"
                >
                  Download
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-slate-300 hover:text-honey-gold transition-colors duration-fast text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/stories"
                  className="text-slate-300 hover:text-honey-gold transition-colors duration-fast text-sm"
                >
                  Stories
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-slate-300 hover:text-honey-gold transition-colors duration-fast text-sm"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-slate-300 hover:text-honey-gold transition-colors duration-fast text-sm"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-slate-300 hover:text-honey-gold transition-colors duration-fast text-sm"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/help"
                  className="text-slate-300 hover:text-honey-gold transition-colors duration-fast text-sm"
                >
                  Help Center
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-600">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-slate-300">
              <span>© {currentYear} HoneyDo2Done</span>
              <span className="hidden md:inline">•</span>
              <Link
                href="/legal/privacy"
                className="hover:text-honey-gold transition-colors duration-fast"
              >
                Privacy Policy
              </Link>
              <span className="hidden md:inline">•</span>
              <Link
                href="/legal/terms"
                className="hover:text-honey-gold transition-colors duration-fast"
              >
                Terms of Service
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/honeydo2done"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-honey-gold transition-colors duration-fast focus:outline-none focus:ring-2 focus:ring-honey-gold focus:ring-offset-2 focus:ring-offset-navy rounded-md p-1"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/honeydo2done"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-honey-gold transition-colors duration-fast focus:outline-none focus:ring-2 focus:ring-honey-gold focus:ring-offset-2 focus:ring-offset-navy rounded-md p-1"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/honeydo2done"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-300 hover:text-honey-gold transition-colors duration-fast focus:outline-none focus:ring-2 focus:ring-honey-gold focus:ring-offset-2 focus:ring-offset-navy rounded-md p-1"
                aria-label="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-slate-400">
            <p>Tampa, FL — Made with 🍯 for people who get it.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
