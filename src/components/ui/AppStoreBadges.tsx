import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { analytics } from '@/lib/analytics'

interface AppStoreBadgesProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export const AppStoreBadges: React.FC<AppStoreBadgesProps> = ({ 
  size = 'md',
  className 
}) => {
  const iosUrl = process.env.NEXT_PUBLIC_APP_STORE_IOS_URL || '#'
  const androidUrl = process.env.NEXT_PUBLIC_APP_STORE_ANDROID_URL || '#'
  
  const sizes = {
    sm: { width: 120, height: 40 },
    md: { width: 152, height: 45 },
    lg: { width: 200, height: 60 },
  }
  
  const { width, height } = sizes[size]
  
  const handleClick = (platform: 'ios' | 'android') => {
    analytics.appStoreClick(platform)
  }
  
  return (
    <div className={className}>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <Link
          href={iosUrl}
          onClick={() => handleClick('ios')}
          className="inline-block transition-transform duration-fast hover:scale-105 focus:outline-none focus:ring-2 focus:ring-honey-gold focus:ring-offset-2 rounded-lg"
          aria-label="Download on the App Store"
        >
          <Image
            src="/images/app-store-badge.svg"
            alt="Download on the App Store"
            width={width}
            height={height}
            className="h-auto"
            priority
            onError={(e) => {
              // Fallback if image doesn't exist
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              const parent = target.parentElement
              if (parent) {
                parent.innerHTML = `
                  <div class="bg-black text-white px-6 py-3 rounded-lg font-semibold text-sm">
                    Download on the<br />App Store
                  </div>
                `
              }
            }}
          />
        </Link>
        <Link
          href={androidUrl}
          onClick={() => handleClick('android')}
          className="inline-block transition-transform duration-fast hover:scale-105 focus:outline-none focus:ring-2 focus:ring-honey-gold focus:ring-offset-2 rounded-lg"
          aria-label="Get it on Google Play"
        >
          <Image
            src="/images/google-play-badge.svg"
            alt="Get it on Google Play"
            width={width}
            height={height}
            className="h-auto"
            priority
            onError={(e) => {
              // Fallback if image doesn't exist
              const target = e.target as HTMLImageElement
              target.style.display = 'none'
              const parent = target.parentElement
              if (parent) {
                parent.innerHTML = `
                  <div class="bg-black text-white px-6 py-3 rounded-lg font-semibold text-sm">
                    Get it on<br />Google Play
                  </div>
                `
              }
            }}
          />
        </Link>
      </div>
    </div>
  )
}
