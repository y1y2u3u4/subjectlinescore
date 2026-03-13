'use client';

import { useState, useMemo } from 'react';
import { examples, CATEGORY_OPTIONS, type ExampleCategory } from '@/data/examples';
import { scoreSubjectLine } from '@/lib/scorer';
import ScoreBadge from '@/components/ScoreBadge';
import CopyButton from '@/components/CopyButton';

export default function ExamplesPage() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState<ExampleCategory | 'all'>('all');

  const filtered = useMemo(() => {
    return examples.filter((ex) => {
      const matchesCategory = category === 'all' || ex.category === category;
      const matchesSearch =
        !search.trim() ||
        ex.text.toLowerCase().includes(search.toLowerCase()) ||
        ex.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-[#1e3a5f] to-[#2a4f7f] px-4 py-14 text-center text-white sm:px-6 sm:py-18">
        <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight sm:text-4xl">
          Email Subject Line Examples
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-blue-100 sm:text-lg">
          Browse 100+ proven email subject line examples with scores. Filter by category,
          search by keyword, and copy the best ones with one click.
        </p>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search examples by keyword or tag..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20"
          />
          <div className="flex flex-wrap gap-2">
            {CATEGORY_OPTIONS.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setCategory(cat.value)}
                className={`rounded-full px-3 py-1.5 text-xs font-medium transition ${
                  category === cat.value
                    ? 'bg-[#1e3a5f] text-white'
                    : 'border border-gray-200 bg-white text-gray-600 hover:border-[#3b82f6] hover:text-[#3b82f6]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-3 text-sm text-gray-400">
          Showing {filtered.length} of {examples.length} examples
        </div>
      </section>

      {/* Examples list */}
      <section className="mx-auto max-w-5xl px-4 pb-16 sm:px-6">
        <div className="space-y-2">
          {filtered.map((ex) => {
            const score = scoreSubjectLine(ex.text);
            return (
              <div
                key={ex.id}
                className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 transition hover:border-[#3b82f6]/30 hover:shadow-sm sm:p-4"
              >
                <ScoreBadge score={score.totalScore} grade={score.grade} color={score.gradeColor} />
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-medium text-gray-800">{ex.text}</div>
                  <div className="mt-1 flex flex-wrap gap-1">
                    <span className="rounded bg-blue-50 px-1.5 py-0.5 text-[10px] font-medium text-blue-600">
                      {ex.category}
                    </span>
                    {ex.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-gray-100 px-1.5 py-0.5 text-[10px] text-gray-500"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <CopyButton text={ex.text} />
              </div>
            );
          })}
        </div>

        {filtered.length === 0 && (
          <div className="py-12 text-center text-gray-400">
            No examples match your search. Try a different keyword or category.
          </div>
        )}
      </section>
    </>
  );
}
