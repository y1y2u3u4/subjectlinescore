'use client';

import { useState, useCallback } from 'react';
import { generateSubjectLines, EMAIL_TYPES, TONES, type EmailType, type Tone } from '@/data/templates';
import { scoreSubjectLine } from '@/lib/scorer';
import ScoreBadge from './ScoreBadge';
import CopyButton from './CopyButton';

const EXAMPLE_PROMPTS = [
  'Promote our summer sale with 30% discount',
  'Welcome new subscribers to our newsletter',
  'Follow up on a sales demo meeting',
];

export default function Generator() {
  const [description, setDescription] = useState('');
  const [emailType, setEmailType] = useState<EmailType>('marketing');
  const [tone, setTone] = useState<Tone>('professional');
  const [includeEmoji, setIncludeEmoji] = useState(false);
  const [results, setResults] = useState<string[]>([]);

  const handleGenerate = useCallback(() => {
    if (description.trim()) {
      const lines = generateSubjectLines(description, emailType, tone, includeEmoji);
      setResults(lines);
    }
  }, [description, emailType, tone, includeEmoji]);

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#1e3a5f]">Generate Subject Lines</h2>

      <div className="space-y-4">
        {/* Description input */}
        <div>
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Describe your email purpose
          </label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="What is your email about? E.g., Promote our new product launch..."
            rows={3}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20"
          />
        </div>

        {/* Example prompts */}
        <div className="flex flex-wrap gap-2">
          {EXAMPLE_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              onClick={() => setDescription(prompt)}
              className="rounded-full border border-gray-200 bg-gray-50 px-3 py-1.5 text-xs text-gray-600 transition hover:border-[#3b82f6] hover:bg-blue-50 hover:text-[#3b82f6]"
            >
              {prompt}
            </button>
          ))}
        </div>

        {/* Options row */}
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-600">Email Type</label>
            <select
              value={emailType}
              onChange={(e) => setEmailType(e.target.value as EmailType)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20"
            >
              {EMAIL_TYPES.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-gray-600">Tone</label>
            <select
              value={tone}
              onChange={(e) => setTone(e.target.value as Tone)}
              className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-900 focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20"
            >
              {TONES.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
          <div className="flex items-end">
            <label className="flex cursor-pointer items-center gap-2">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={includeEmoji}
                  onChange={(e) => setIncludeEmoji(e.target.checked)}
                  className="sr-only"
                />
                <div className={`h-6 w-11 rounded-full transition ${includeEmoji ? 'bg-[#3b82f6]' : 'bg-gray-300'}`} />
                <div className={`absolute left-0.5 top-0.5 h-5 w-5 rounded-full bg-white transition ${includeEmoji ? 'translate-x-5' : ''}`} />
              </div>
              <span className="text-sm text-gray-700">Include Emoji</span>
            </label>
          </div>
        </div>

        {/* Generate button */}
        <button
          onClick={handleGenerate}
          disabled={!description.trim()}
          className="w-full rounded-lg bg-[#3b82f6] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2563eb] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          Generate 10 Subject Lines
        </button>
      </div>

      {/* Results */}
      {results.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-sm font-semibold text-gray-700">Generated Subject Lines</h3>
          <div className="space-y-2">
            {results.map((line, i) => {
              const score = scoreSubjectLine(line);
              return (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-lg border border-gray-200 bg-white p-3 transition hover:border-[#3b82f6]/30 hover:shadow-sm"
                >
                  <ScoreBadge score={score.totalScore} grade={score.grade} color={score.gradeColor} />
                  <span className="min-w-0 flex-1 text-sm text-gray-800">{line}</span>
                  <CopyButton text={line} />
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
