import mixpanel from 'mixpanel-browser'

// Initialize Mixpanel
export const initAnalytics = () => {
  const token = process.env.NEXT_PUBLIC_MIXPANEL_TOKEN
  
  if (typeof window !== 'undefined' && token) {
    mixpanel.init(token, {
      debug: process.env.NODE_ENV === 'development',
      track_pageview: false, // We'll track manually
    })
  }
}

// Track page views
export const trackPageView = (path: string) => {
  if (typeof window === 'undefined') return
  
  // Mixpanel
  if (process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) {
    mixpanel.track('page_view', {
      path,
      timestamp: new Date().toISOString(),
    })
  }
  
  // Google Analytics 4
  if (typeof window.gtag !== 'undefined' && process.env.NEXT_PUBLIC_GA_ID) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
      page_path: path,
    })
  }
}

// Track custom events
export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window === 'undefined') return
  
  // Mixpanel
  if (process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) {
    mixpanel.track(eventName, {
      ...properties,
      timestamp: new Date().toISOString(),
    })
  }
  
  // Google Analytics 4
  if (typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, properties)
  }
}

// Event helpers
export const analytics = {
  appStoreClick: (platform: 'ios' | 'android') => {
    trackEvent('app_store_click', { platform })
  },
  emailSubmit: (source: string) => {
    trackEvent('email_submit', { source })
  },
  ctaClick: (ctaText: string, location: string) => {
    trackEvent('cta_click', { cta_text: ctaText, location })
  },
  faqExpand: (question: string) => {
    trackEvent('faq_expand', { question })
  },
  pricingView: () => {
    trackEvent('pricing_view')
  },
  planSelect: (plan: string) => {
    trackEvent('plan_select', { plan })
  },
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (...args: any[]) => void
  }
}
