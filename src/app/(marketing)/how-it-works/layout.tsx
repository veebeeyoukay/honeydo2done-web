import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata(
  'How It Works - The Simplest Thing You\'ll Do All Week',
  'Seriously. If you can complain about something, you can use HoneyDo2Done. Voice, text, or photo—we\'ll figure it out.',
  '/how-it-works'
)

export default function HowItWorksLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
