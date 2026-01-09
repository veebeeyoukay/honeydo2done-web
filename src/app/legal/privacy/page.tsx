import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata(
  'Privacy Policy - HoneyDo2Done',
  'Our privacy policy explains how we collect, use, and protect your personal information.',
  '/legal/privacy'
)

export default function PrivacyPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h1 className="text-4xl font-display font-bold text-navy mb-8">
            Privacy Policy
          </h1>
          
          <p className="text-slate mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-6 text-slate leading-relaxed">
            <section>
              <h2 className="text-2xl font-display font-bold text-navy mt-8 mb-4">
                Introduction
              </h2>
              <p>
                HoneyDo2Done (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use 
                our mobile application and website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mt-8 mb-4">
                Information We Collect
              </h2>
              <p>We collect information that you provide directly to us, including:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Account information (name, email address, phone number)</li>
                <li>Property and task information</li>
                <li>Payment information (processed securely through third-party providers)</li>
                <li>Communications with our support team</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mt-8 mb-4">
                How We Use Your Information
              </h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Monitor and analyze trends and usage</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mt-8 mb-4">
                Data Security
              </h2>
              <p>
                We implement appropriate technical and organizational security measures to protect your personal information. 
                However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mt-8 mb-4">
                Contact Us
              </h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at{' '}
                <a href="mailto:privacy@honeydo2done.com" className="text-honey-gold hover:text-deep-honey">
                  privacy@honeydo2done.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
