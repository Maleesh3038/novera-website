"use client";

import { useEffect, useState } from "react";
import { AlarmClock } from "lucide-react";

function getTimeParts(target: Date) {
  const now = new Date().getTime();
  const diff = Math.max(target.getTime() - now, 0);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

export default function CountdownCard({
  title,
  targetDate,
  subtitle,
}: {
  title: string;
  targetDate: Date;
  subtitle?: string;
}) {
  const [parts, setParts] = useState(() => getTimeParts(targetDate));

  useEffect(() => {
    const interval = setInterval(() => setParts(getTimeParts(targetDate)), 1000);
    return () => clearInterval(interval);
    // targetDate is intentionally treated as stable for the widget's lifetime
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center gap-2 bg-navy px-5 py-3 text-white">
        <AlarmClock className="h-4 w-4 text-amber" />
        <p className="text-sm font-semibold">{title}</p>
      </div>
      <div className="grid grid-cols-4 gap-2 px-5 py-5">
        {[
          { label: "Days", value: parts.days },
          { label: "Hrs", value: parts.hours },
          { label: "Min", value: parts.minutes },
          { label: "Sec", value: parts.seconds },
        ].map((p) => (
          <div key={p.label} className="flex flex-col items-center rounded-xl bg-mist-2 py-3">
            <span className="font-mono text-xl font-bold text-navy sm:text-2xl">
              {String(p.value).padStart(2, "0")}
            </span>
            <span className="text-[10px] uppercase tracking-wide text-text-soft">{p.label}</span>
          </div>
        ))}
      </div>
      {subtitle && <p className="px-5 pb-4 text-xs text-text-soft">{subtitle}</p>}
    </div>
  );
}
