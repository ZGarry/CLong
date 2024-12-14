"use client";

import { Card, CardContent } from "@/components/ui/card";
import StatCard from "../common/StatCard";

export default function BacktestResults() {
  const stats = [
    { label: "年化收益", value: "+15.8%", color: "text-green-500" },
    { label: "最大回撤", value: "-8.2%", color: "text-red-500" },
    { label: "夏普比率", value: "1.85" },
    { label: "胜率", value: "68.5%" },
  ];

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="h-[400px] bg-muted rounded-lg flex items-center justify-center">
            回测结果图表区域
          </div>
          
          <div className="grid grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}