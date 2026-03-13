interface ScoreBadgeProps {
  score: number;
  grade: string;
  color: string;
}

export default function ScoreBadge({ score, grade, color }: ScoreBadgeProps) {
  return (
    <div
      className="flex shrink-0 flex-col items-center rounded-lg px-2 py-1"
      style={{ backgroundColor: `${color}15` }}
    >
      <span className="text-lg font-bold leading-tight" style={{ color }}>{score}</span>
      <span className="text-[10px] font-medium" style={{ color }}>{grade}</span>
    </div>
  );
}
