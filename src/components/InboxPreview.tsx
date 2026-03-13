'use client';

interface InboxPreviewProps {
  subjectLine: string;
  senderName?: string;
  previewText?: string;
}

export default function InboxPreview({
  subjectLine,
  senderName = 'Your Brand',
  previewText = 'Preview text goes here. This is the beginning of your email content...',
}: InboxPreviewProps) {
  if (!subjectLine.trim()) return null;

  return (
    <div className="space-y-4">
      <h3 className="text-sm font-semibold text-gray-700">Inbox Preview</h3>

      {/* Gmail Desktop */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="border-b border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500">
          Gmail Desktop
        </div>
        <div className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#1e3a5f] text-xs font-bold text-white">
            {senderName.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-gray-900">{senderName}</span>
            </div>
            <div className="flex items-baseline gap-1">
              <span className="truncate text-sm font-semibold text-gray-900">
                {subjectLine.length > 70 ? subjectLine.slice(0, 70) + '...' : subjectLine}
              </span>
              <span className="truncate text-sm text-gray-500">
                {' - '}{previewText.length > 60 ? previewText.slice(0, 60) + '...' : previewText}
              </span>
            </div>
          </div>
          <span className="shrink-0 text-xs text-gray-500">10:30 AM</span>
        </div>
      </div>

      {/* Gmail Mobile */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="border-b border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500">
          Gmail Mobile
        </div>
        <div className="flex items-start gap-3 px-4 py-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1e3a5f] text-sm font-bold text-white">
            {senderName.charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-gray-900">{senderName}</span>
              <span className="text-xs text-gray-500">10:30 AM</span>
            </div>
            <div className="truncate text-sm font-semibold text-gray-900">
              {subjectLine.length > 40 ? subjectLine.slice(0, 40) + '...' : subjectLine}
            </div>
            <div className="truncate text-sm text-gray-500">
              {previewText.length > 45 ? previewText.slice(0, 45) + '...' : previewText}
            </div>
          </div>
        </div>
      </div>

      {/* iPhone Mail */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
        <div className="border-b border-gray-200 bg-gray-50 px-3 py-1.5 text-xs font-medium text-gray-500">
          iPhone Mail
        </div>
        <div className="px-4 py-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-semibold text-gray-900">{senderName}</span>
            <span className="text-xs text-gray-400">10:30 AM &gt;</span>
          </div>
          <div className="truncate text-sm font-semibold text-gray-900">
            {subjectLine.length > 35 ? subjectLine.slice(0, 35) + '...' : subjectLine}
          </div>
          <div className="truncate text-sm text-gray-500">
            {previewText.length > 50 ? previewText.slice(0, 50) + '...' : previewText}
          </div>
        </div>
      </div>
    </div>
  );
}
