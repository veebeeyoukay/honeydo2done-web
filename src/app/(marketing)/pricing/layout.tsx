import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata(
  'Pricing - Pick Your Peace of Mind',
  'Start free. Upgrade when life gets busier. Plans from $0 to $79/month with DIY guidance, family features, and pro access.',
  '/pricing'
)

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
