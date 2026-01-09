import { createPageMetadata } from '@/lib/metadata'

export const metadata = createPageMetadata(
  'Terms of Service - HoneyDo2Done',
  'Our terms of service outline the rules and regulations for using HoneyDo2Done.',
  '/legal/terms'
)

export default function TermsPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h1 className="text-4xl font-display font-bold text-navy mb-8">
            Terms of Service
          </h1>
          
          <p className="text-slate mb-6">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <div className="space-y-6 text-slate leading-relaxed">
            <section>
              <h2 className="text-2xl font-display font-bold text-navy mt-8 mb-4">
                Agreement to Terms
              </h2>
              <p>
                By accessing or using HoneyDo2Done (&quot;the Service&quot;), you agree to be bound by these Terms of Service. 
                If you disagree with any part of these terms, you may not access the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mt-8 mb-4">
                Use License
              </h2>
              <p>
                Permission is granted to temporarily download one copy of HoneyDo2Done for personal, non-commercial transitory 
                viewing only. This is the grant of a license, not a transfer of title.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mt-8 mb-4">
                User Accounts
              </h2>
              <p>
                You are responsible for maintaining the confidentiality of your account and password. You agree to accept 
                responsibility for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mt-8 mb-4">
                Service Availability
              </h2>
              <p>
                We reserve the right to modify, suspend, or discontinue the Service at any time without prior notice. 
                We shall not be liable to you or any third party for any modification, suspension, or discontinuance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mt-8 mb-4">
                Limitation of Liability
              </h2>
              <p>
                In no event shall HoneyDo2Done, its directors, employees, or agents be liable for any indirect, incidental, 
                special, consequential, or punitive damages resulting from your use of the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-display font-bold text-navy mt-8 mb-4">
                Contact Us
              </h2>
              <p>
                If you have questions about these Terms of Service, please contact us at{' '}
                <a href="mailto:legal@honeydo2done.com" className="text-honey-gold hover:text-deep-honey">
                  legal@honeydo2done.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
