'use client';

import { useState, useCallback } from 'react';
import { scoreSubjectLine, type ScoreResult } from '@/lib/scorer';
import ScoreDisplay from './ScoreDisplay';

export default function ABTester() {
  const [lineA, setLineA] = useState('');
  const [lineB, setLineB] = useState('');
  const [resultA, setResultA] = useState<ScoreResult | null>(null);
  const [resultB, setResultB] = useState<ScoreResult | null>(null);

  const handleCompare = useCallback(() => {
    if (lineA.trim() && lineB.trim()) {
      setResultA(scoreSubjectLine(lineA.trim()));
      setResultB(scoreSubjectLine(lineB.trim()));
    }
  }, [lineA, lineB]);

  const winner = resultA && resultB
    ? resultA.totalScore > resultB.totalScore ? 'A' : resultA.totalScore < resultB.totalScore ? 'B' : 'tie'
    : null;

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-bold text-[#1e3a5f]">A/B Test Your Subject Lines</h2>
      <p className="text-sm text-gray-500">Compare two subject lines side by side to see which one performs better.</p>

      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Version A</label>
          <input
            type="text"
            value={lineA}
            onChange={(e) => setLineA(e.target.value)}
            placeholder="Enter subject line A..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20"
          />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Version B</label>
          <input
            type="text"
            value={lineB}
            onChange={(e) => setLineB(e.target.value)}
            placeholder="Enter subject line B..."
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder-gray-400 transition focus:border-[#3b82f6] focus:outline-none focus:ring-2 focus:ring-[#3b82f6]/20"
          />
        </div>
      </div>

      <button
        onClick={handleCompare}
        disabled={!lineA.trim() || !lineB.trim()}
        className="rounded-lg bg-[#1e3a5f] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#2a4f7f] disabled:cursor-not-allowed disabled:opacity-50"
      >
        Compare
      </button>

      {resultA && resultB && (
        <>
          {/* Winner banner */}
          {winner && winner !== 'tie' && (
            <div className="rounded-lg bg-green-50 border border-green-200 p-4 text-center">
              <span className="text-lg font-bold text-green-700">
                Version {winner} wins!
              </span>
              <span className="ml-2 text-sm text-green-600">
                (Score: {winner === 'A' ? resultA.totalScore : resultB.totalScore} vs {winner === 'A' ? resultB.totalScore : resultA.totalScore})
              </span>
            </div>
          )}
          {winner === 'tie' && (
            <div className="rounded-lg bg-yellow-50 border border-yellow-200 p-4 text-center">
              <span className="text-lg font-bold text-yellow-700">It&apos;s a tie!</span>
              <span className="ml-2 text-sm text-yellow-600">(Both scored {resultA.totalScore})</span>
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            <div className={`rounded-xl border-2 p-6 shadow-sm ${winner === 'A' ? 'border-green-400 bg-green-50/30' : 'border-gray-200 bg-white'}`}>
              <div className="mb-4 text-center text-sm font-semibold text-gray-500">Version A</div>
              <div className="mb-4 rounded-lg bg-gray-50 p-3 text-center text-sm font-medium text-gray-800">
                &ldquo;{lineA}&rdquo;
              </div>
              <ScoreDisplay result={resultA} />
            </div>
            <div className={`rounded-xl border-2 p-6 shadow-sm ${winner === 'B' ? 'border-green-400 bg-green-50/30' : 'border-gray-200 bg-white'}`}>
              <div className="mb-4 text-center text-sm font-semibold text-gray-500">Version B</div>
              <div className="mb-4 rounded-lg bg-gray-50 p-3 text-center text-sm font-medium text-gray-800">
                &ldquo;{lineB}&rdquo;
              </div>
              <ScoreDisplay result={resultB} />
            </div>
          </div>

          {/* Dimension comparison table */}
          <div className="overflow-x-auto rounded-xl border border-gray-200 bg-white shadow-sm">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <th className="px-4 py-3 text-left font-semibold text-gray-700">Dimension</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Version A</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Version B</th>
                  <th className="px-4 py-3 text-center font-semibold text-gray-700">Winner</th>
                </tr>
              </thead>
              <tbody>
                {resultA.dimensions.map((dimA, i) => {
                  const dimB = resultB.dimensions[i];
                  const dimWinner = dimA.score > dimB.score ? 'A' : dimA.score < dimB.score ? 'B' : '-';
                  return (
                    <tr key={dimA.name} className="border-b border-gray-100 last:border-0">
                      <td className="px-4 py-2.5 font-medium text-gray-700">{dimA.name}</td>
                      <td className="px-4 py-2.5 text-center">
                        <span className="font-semibold" style={{ color: dimA.color }}>{Math.round(dimA.score)}</span>
                      </td>
                      <td className="px-4 py-2.5 text-center">
                        <span className="font-semibold" style={{ color: dimB.color }}>{Math.round(dimB.score)}</span>
                      </td>
                      <td className="px-4 py-2.5 text-center font-bold">
                        {dimWinner === '-' ? (
                          <span className="text-gray-400">Tie</span>
                        ) : (
                          <span className={dimWinner === 'A' ? 'text-blue-600' : 'text-purple-600'}>
                            {dimWinner}
                          </span>
                        )}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}
