'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { initAnalytics, trackPageView } from '@/lib/analytics'

export const Analytics: React.FC = () => {
  const pathname = usePathname()

  useEffect(() => {
    initAnalytics()
  }, [])

  useEffect(() => {
    if (pathname) {
      trackPageView(pathname)
    }
  }, [pathname])

  // Google Analytics 4 script
  useEffect(() => {
    const gaId = process.env.NEXT_PUBLIC_GA_ID
    if (!gaId || typeof window === 'undefined') return

    // Load gtag script
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(script)

    // Initialize gtag
    if (!window.dataLayer) {
      window.dataLayer = []
    }
    function gtag(...args: any[]) {
      if (window.dataLayer) {
        window.dataLayer.push(args)
      }
    }
    window.gtag = gtag
    gtag('js', new Date())
    gtag('config', gaId, {
      page_path: pathname,
    })

    return () => {
      // Cleanup if needed
    }
  }, [pathname])

  return null
}

declare global {
  interface Window {
    dataLayer?: any[]
    gtag?: (...args: any[]) => void
  }
}
