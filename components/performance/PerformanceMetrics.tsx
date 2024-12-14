"use client";

import { Card } from "@/components/ui/card";

const metrics = [
  { label: "年化收益率", value: "15.8%", type: "positive" },
  { label: "最大回撤", value: "8.2%", type: "negative" },
  { label: "夏普比率", value: "1.85", type: "neutral" },
  { label: "胜率", value: "68.5%", type: "positive" },
];

export default function PerformanceMetrics() {
  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">绩效指标</h2>
      <div className="grid grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <div key={index} className="p-4 border rounded-lg">
            <div className="text-sm text-muted-foreground">{metric.label}</div>
            <div className={`text-2xl font-bold ${
              metric.type === "positive" ? "text-green-500" :
              metric.type === "negative" ? "text-red-500" : ""
            }`}>
              {metric.value}
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}