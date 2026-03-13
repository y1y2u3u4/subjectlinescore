import type { Metadata } from 'next';
import Scorer from '@/components/Scorer';

export const metadata: Metadata = {
  title: 'Email Subject Line Tester - Test & Score Your Subject Lines Free',
  description:
    'Test your email subject lines instantly with our free tester. Get a detailed score across 7 dimensions, spam detection, and inbox preview for Gmail, iPhone, and more.',
  keywords: [
    'email subject line tester',
    'subject line tester',
    'test email subject line',
    'email subject line checker',
    'email subject line analyzer',
  ],
};

export default function TesterPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1e3a5f] to-[#2a4f7f] px-4 py-14 text-center text-white sm:px-6 sm:py-18">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
          Email Subject Line Tester
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
          Test your email subject lines before sending. Get instant analysis on length, power words,
          spam risk, readability, and see how it looks in real inboxes.
        </p>
      </section>

      {/* Tool */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8">
          <Scorer heading="Test Your Email Subject Line" />
        </div>
      </section>

      {/* Tips */}
      <section className="bg-gray-50 px-4 py-14 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-2xl font-bold text-[#1e3a5f]">
            Subject Line Testing Tips
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: 'Test Multiple Variations',
                desc: 'Don\'t settle for your first draft. Write 5-10 variations and score each one to find the strongest option.',
              },
              {
                title: 'Check Mobile Preview',
                desc: 'Over 60% of emails are opened on mobile. Make sure your subject line isn\'t truncated on smaller screens.',
              },
              {
                title: 'Avoid Spam Triggers',
                desc: 'Words like "FREE" in all caps, excessive punctuation, and misleading claims can send you straight to spam.',
              },
              {
                title: 'Use Power Words Wisely',
                desc: 'Urgency, curiosity, and benefit-driven words boost open rates, but don\'t overdo it -- balance is key.',
              },
            ].map((tip) => (
              <div key={tip.title} className="rounded-xl border border-gray-200 bg-white p-5">
                <h3 className="mb-2 font-semibold text-gray-900">{tip.title}</h3>
                <p className="text-sm leading-6 text-gray-500">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
