export function StatusBadge({ label }: { label: string }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-line bg-base-surface/60 px-3 py-1.5 backdrop-blur-sm">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-60" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
      </span>
      <span className="font-mono text-xs text-ink-muted">{label}</span>
    </div>
  );
}
