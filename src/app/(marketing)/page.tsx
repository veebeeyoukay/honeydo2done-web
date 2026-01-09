import { Hero } from '@/components/sections/Hero'
import { EmotionalMirror } from '@/components/sections/EmotionalMirror'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { EmotionalPayoff } from '@/components/sections/EmotionalPayoff'
import { SocialProof } from '@/components/sections/SocialProof'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata(
  "From 'Honey, can you...' to Done",
  'The app that finally gets how overwhelming home stuff can be. Capture it. Get guidance. Or let someone handle it. Your call.',
  '/'
)

export default function HomePage() {
  return (
    <>
      <Hero />
      <EmotionalMirror />
      <HowItWorks />
      <EmotionalPayoff />
      <SocialProof />
      <FAQ />
      <CTA />
    </>
  )
}
