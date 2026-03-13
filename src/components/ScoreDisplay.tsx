'use client';

import type { ScoreResult } from '@/lib/scorer';

interface ScoreDisplayProps {
  result: ScoreResult;
  compact?: boolean;
}

export default function ScoreDisplay({ result, compact = false }: ScoreDisplayProps) {
  if (result.dimensions.length === 0) return null;

  return (
    <div className={compact ? 'space-y-3' : 'space-y-6'}>
      {/* Total score circle */}
      <div className="flex flex-col items-center gap-2">
        <div
          className="relative flex h-28 w-28 items-center justify-center rounded-full border-4"
          style={{ borderColor: result.gradeColor }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold" style={{ color: result.gradeColor }}>
              {result.totalScore}
            </div>
            <div className="text-xs text-gray-500">/ 100</div>
          </div>
        </div>
        <span
          className="rounded-full px-3 py-1 text-sm font-semibold text-white"
          style={{ backgroundColor: result.gradeColor }}
        >
          {result.grade}
        </span>
      </div>

      {/* Dimension scores */}
      {!compact && (
        <div className="space-y-4">
          {result.dimensions.map((dim) => (
            <div key={dim.name} className="space-y-1.5">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-gray-700">{dim.name}</span>
                <span className="font-semibold" style={{ color: dim.color }}>
                  {Math.round(dim.score)}/100
                </span>
              </div>
              <div className="h-2 w-full overflow-hidden rounded-full bg-gray-200">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${dim.score}%`,
                    backgroundColor: dim.color,
                  }}
                />
              </div>
              <p className="text-xs text-gray-500">{dim.feedback}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
