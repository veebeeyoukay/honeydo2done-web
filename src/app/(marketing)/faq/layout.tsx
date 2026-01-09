import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata(
  'FAQ - Questions? Answered.',
  'Find answers to common questions about HoneyDo2Done. Learn about features, pricing, family plans, and more.',
  '/faq'
)

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
