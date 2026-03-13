'use client';

import { useState, useCallback } from 'react';
import { scoreSubjectLine, type ScoreResult } from '@/lib/scorer';
import ScoreDisplay from './ScoreDisplay';
import InboxPreview from './InboxPreview';

interface ScorerProps {
  heading?: string;
}

export default function Scorer({ heading = 'Score Your Subject Line' }: ScorerProps) {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<ScoreResult | null>(null);

  const handleScore = useCallback(() => {
    if (input.trim()) {
      setResult(scoreSubjectLine(input.trim()));
    }
  }, [input]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleScore();
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#1e3a5f]">{heading}</h2>

      <div className="space-y-3">
        <div className="flex flex-col gap-3 sm:flex-row">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Paste your email subject line here..."
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20"
          />
          <button
            onClick={handleScore}
            disabled={!input.trim()}
            className="rounded-lg bg-[#1e3a5f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2a4f7f] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Score It
          </button>
        </div>
        <p className="text-xs text-gray-400">
          Enter your subject line and get an instant score with detailed feedback.
        </p>
      </div>

      {result && result.dimensions.length > 0 && (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <ScoreDisplay result={result} />
          </div>
          <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <InboxPreview subjectLine={input} />
          </div>
        </div>
      )}
    </div>
  );
}
