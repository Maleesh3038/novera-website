export default function StatTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="card flex flex-col items-center gap-1 px-4 py-6 text-center">
      <span className="font-mono text-3xl font-bold text-navy sm:text-4xl">{value}</span>
      <span className="text-xs font-medium uppercase tracking-wide text-text-soft sm:text-sm">{label}</span>
    </div>
  );
}
