import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata(
  'Download HoneyDo2Done - Get the App',
  'Start feeling better about home stuff. Free to download. No credit card required. Available on iOS and Android.',
  '/download'
)

export default function DownloadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
