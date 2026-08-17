import { Check } from "lucide-react";
import { journeyStages } from "@/data/site";

export default function StageTracker({
  currentStage,
  orientation = "horizontal",
}: {
  currentStage: (typeof journeyStages)[number];
  orientation?: "horizontal" | "vertical";
}) {
  const currentIndex = journeyStages.indexOf(currentStage);

  return (
    <div
      className={
        orientation === "horizontal"
          ? "flex flex-col gap-6 sm:flex-row sm:items-start"
          : "flex flex-col gap-6"
      }
    >
      {journeyStages.map((stage, index) => {
        const done = index < currentIndex;
        const active = index === currentIndex;
        return (
          <div key={stage} className={orientation === "horizontal" ? "flex flex-1 items-start gap-3 sm:flex-col sm:items-center sm:text-center" : "flex items-start gap-3"}>
            <div className="flex items-center sm:flex-col sm:items-center">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold ${
                  done
                    ? "border-teal bg-teal-cyan text-white"
                    : active
                    ? "border-amber bg-amber text-ink"
                    : "border-line bg-white text-text-soft"
                }`}
              >
                {done ? <Check className="h-4 w-4" /> : index + 1}
              </div>
              {orientation === "horizontal" && index < journeyStages.length - 1 && (
                <div className={`hidden h-0.5 flex-1 sm:mt-4 sm:block sm:w-full ${done ? "bg-teal" : "bg-line"}`} />
              )}
            </div>
            <div>
              <p className={`text-sm font-semibold ${active ? "text-amber" : done ? "text-navy" : "text-text-soft"}`}>
                {stage}
              </p>
              {active && <p className="text-xs text-text-soft">Current stage</p>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
