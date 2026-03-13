export default function SEOContent() {
  return (
    <section className="mx-auto max-w-4xl space-y-12 px-4 py-16 sm:px-6">
      {/* What is an Email Subject Line Score */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#1e3a5f]">What is an Email Subject Line Score?</h2>
        <p className="leading-7 text-gray-600">
          An email subject line score is a numerical rating (typically 0-100) that evaluates how effective your subject line
          is likely to be at getting recipients to open your email. Our scoring algorithm analyzes multiple dimensions
          including character length, power words, spam triggers, readability, personalization, emoji usage, and capitalization
          to give you a comprehensive assessment.
        </p>
        <p className="leading-7 text-gray-600">
          Research shows that 47% of email recipients decide whether to open an email based solely on the subject line.
          By scoring and optimizing your subject lines before sending, you can significantly improve your open rates,
          click-through rates, and overall email marketing ROI.
        </p>
      </div>

      {/* How to Write Subject Lines */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#1e3a5f]">How to Write Email Subject Lines That Get Opened</h2>
        <p className="leading-7 text-gray-600">
          Writing compelling email subject lines is both an art and a science. The best subject lines create curiosity,
          communicate value, and motivate the reader to take action -- all within a limited character count.
        </p>
        <p className="leading-7 text-gray-600">
          Start with your main value proposition. What will the reader gain by opening your email? Whether it is saving
          money, learning something new, or solving a problem, lead with the benefit. Subject lines that clearly
          communicate value consistently outperform clever but vague alternatives.
        </p>
        <p className="leading-7 text-gray-600">
          Keep it concise. The optimal length for email subject lines is 30-50 characters. This ensures your full
          message displays across all devices, including mobile phones where over 60% of emails are now opened. Subject
          lines longer than 50 characters risk being truncated, losing their impact.
        </p>
        <p className="leading-7 text-gray-600">
          Use power words strategically. Words like &ldquo;exclusive,&rdquo; &ldquo;limited,&rdquo; &ldquo;proven,&rdquo; and &ldquo;free&rdquo; trigger
          emotional responses that drive opens. However, balance is key -- overusing these words can make your email
          feel spammy.
        </p>
        <p className="leading-7 text-gray-600">
          Personalization matters more than ever. Including the recipient&apos;s name or referencing their specific
          situation can boost open rates by up to 26%. Even simple personalization like using &ldquo;you&rdquo; and
          &ldquo;your&rdquo; creates a more direct, engaging tone.
        </p>
        <p className="leading-7 text-gray-600">
          Test before you send. Using tools like our Subject Line Scorer helps you identify weaknesses before your
          email reaches inboxes. A/B testing different subject lines with a small segment of your list, then sending
          the winner to the rest, is a proven strategy for continuous improvement.
        </p>
      </div>

      {/* Best Practices */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#1e3a5f]">Email Subject Line Best Practices</h2>
        <ul className="space-y-3 text-gray-600">
          {[
            'Keep subject lines between 30-50 characters for optimal display across all devices',
            'Use numbers and statistics to add specificity (e.g., "5 ways to boost your ROI")',
            'Ask questions to spark curiosity and engagement',
            'Avoid ALL CAPS and excessive punctuation (!!!) which trigger spam filters',
            'Include one relevant emoji to stand out, but never more than two',
            'Create urgency with time-sensitive language when appropriate and honest',
            'Personalize with merge tags ({FirstName}) or second-person pronouns (you/your)',
            'Avoid spam trigger words like "FREE" in all caps, "BUY NOW," or "ACT NOW"',
            'A/B test subject lines with a small segment before sending to your full list',
            'Match your subject line tone to your brand voice and audience expectations',
            'Preview how your subject line appears in different email clients before sending',
            'Use sentence case or title case consistently -- avoid random capitalization',
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <svg className="mt-1 h-5 w-5 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span className="leading-7">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold text-[#1e3a5f]">Frequently Asked Questions</h2>
        <div className="space-y-3">
          {[
            {
              q: 'What makes a good email subject line?',
              a: 'A good email subject line is concise (30-50 characters), clearly communicates value, creates curiosity or urgency, and avoids spam triggers. It should be relevant to your audience and match the content of your email. The best subject lines balance being informative with being intriguing enough to drive opens.',
            },
            {
              q: 'How long should an email subject line be?',
              a: 'The optimal length is 30-50 characters (6-10 words). This range ensures full visibility on both desktop and mobile email clients. On iPhone Mail, subject lines are truncated after approximately 35-40 characters, while Gmail desktop shows about 70 characters. When in doubt, front-load your most important words.',
            },
            {
              q: 'What words should I avoid in email subject lines?',
              a: 'Avoid spam trigger words like "FREE" (all caps), "BUY NOW," "CLICK HERE," "ACT NOW," "CONGRATULATIONS," and "$$$". Also avoid excessive exclamation marks, all-caps words, and misleading claims. These can trigger spam filters and reduce your sender reputation, causing your emails to land in spam folders.',
            },
            {
              q: 'Do emojis improve email open rates?',
              a: 'Studies show that emails with 1-2 relevant emojis can increase open rates by up to 56% in certain industries. However, overusing emojis (more than 2) can have the opposite effect and may trigger spam filters. The key is to use emojis that are relevant to your message and appropriate for your audience.',
            },
            {
              q: 'How can I test my email subject line before sending?',
              a: 'Use our free Subject Line Scorer to get an instant analysis of your subject line across 7 key dimensions. You can also use the A/B Tester to compare two versions side by side. For live testing, send your email with different subject lines to small segments of your list (10-20%), then send the winning version to the remaining subscribers.',
            },
            {
              q: 'What is a good email open rate?',
              a: 'Average email open rates vary by industry, but generally range from 15-25%. A good open rate is above your industry average. B2B emails typically see 15-20% open rates, while B2C can range from 18-25%. Government and nonprofit sectors often see higher rates (25-30%). Focus on consistently improving your own benchmarks rather than chasing a universal "good" number.',
            },
          ].map((faq, i) => (
            <details
              key={i}
              className="group rounded-lg border border-gray-200 bg-white"
            >
              <summary className="cursor-pointer px-5 py-4 text-sm font-semibold text-gray-800 transition hover:text-[#1e3a5f]">
                {faq.q}
              </summary>
              <div className="px-5 pb-4 text-sm leading-7 text-gray-600">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
