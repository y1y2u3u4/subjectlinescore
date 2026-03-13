import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'SubjectLineScore - Free Email Subject Line Scorer, Generator & A/B Tester',
    template: '%s | SubjectLineScore',
  },
  description:
    'Score, generate, and A/B test your email subject lines for free. Get instant feedback on length, power words, spam risk, readability, and inbox preview across Gmail, iPhone, and more.',
  keywords: [
    'email subject line',
    'subject line scorer',
    'subject line generator',
    'email subject line tester',
    'email open rate',
    'email marketing',
    'subject line examples',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-white antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
