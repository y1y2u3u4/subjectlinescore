'use client';

import { useState } from 'react';
import Scorer from '@/components/Scorer';
import Generator from '@/components/Generator';
import ABTester from '@/components/ABTester';
import SEOContent from '@/components/SEOContent';

type Tab = 'scorer' | 'generator' | 'ab-tester';

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('scorer');

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1e3a5f] to-[#2a4f7f] px-4 py-16 text-center text-white sm:px-6 sm:py-20">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
          Score, Generate & Test Your Email Subject Lines
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
          Boost your email open rates with our free subject line tools. Get instant scores,
          AI-powered suggestions, and side-by-side A/B comparisons.
        </p>
      </section>

      {/* Tool section */}
      <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {/* Tabs */}
        <div className="mb-8 flex gap-1 rounded-xl bg-gray-100 p-1">
          {([
            { key: 'scorer', label: 'Score', desc: 'Rate your subject line' },
            { key: 'generator', label: 'Generate', desc: 'Create new ideas' },
            { key: 'ab-tester', label: 'A/B Test', desc: 'Compare two lines' },
          ] as const).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`flex-1 rounded-lg px-4 py-3 text-center transition ${
                activeTab === tab.key
                  ? 'bg-white font-semibold text-[#1e3a5f] shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <div className="text-sm font-medium sm:text-base">{tab.label}</div>
              <div className="hidden text-xs text-gray-400 sm:block">{tab.desc}</div>
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm sm:p-8">
          {activeTab === 'scorer' && <Scorer />}
          {activeTab === 'generator' && <Generator />}
          {activeTab === 'ab-tester' && <ABTester />}
        </div>
      </section>

      {/* Features */}
      <section className="bg-gray-50 px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-10 text-center text-2xl font-bold text-[#1e3a5f]">
            Why Use SubjectLineScore?
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Instant Scoring',
                desc: 'Get a detailed 0-100 score across 7 dimensions including length, power words, spam risk, and more.',
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
              },
              {
                title: 'Inbox Preview',
                desc: 'See exactly how your subject line appears in Gmail Desktop, Gmail Mobile, and iPhone Mail.',
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
              },
              {
                title: 'Smart Generator',
                desc: 'Generate 10 optimized subject lines based on your email purpose, type, and desired tone.',
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                ),
              },
              {
                title: 'A/B Testing',
                desc: 'Compare two subject lines side by side with detailed dimension-by-dimension analysis.',
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
              },
              {
                title: 'Spam Detection',
                desc: 'Identify words and patterns that could send your email to the spam folder before you hit send.',
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                ),
              },
              {
                title: '100% Free',
                desc: 'No sign-up required, no API keys, no limits. Score unlimited subject lines completely free.',
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-3 text-[#3b82f6]">{feature.icon}</div>
                <h3 className="mb-2 font-semibold text-gray-900">{feature.title}</h3>
                <p className="text-sm leading-6 text-gray-500">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Content */}
      <SEOContent />
    </>
  );
}
