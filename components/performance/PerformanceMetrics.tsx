"use client";

import { Card } from "../ui/card";

interface PerformanceMetricsProps {
  metrics: {
    total_return: number;
    annual_return: number;
    sharpe_ratio: number;
    max_drawdown: number;
  };
}

export default function PerformanceMetrics({ metrics }: PerformanceMetricsProps) {
  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">性能指标</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div>
          <p className="text-sm text-muted-foreground">总收益率</p>
          <p className="text-2xl font-bold">{(metrics.total_return * 100).toFixed(2)}%</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">年化收益率</p>
          <p className="text-2xl font-bold">{(metrics.annual_return * 100).toFixed(2)}%</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">夏普比率</p>
          <p className="text-2xl font-bold">{metrics.sharpe_ratio.toFixed(2)}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground">最大回撤</p>
          <p className="text-2xl font-bold">{(metrics.max_drawdown * 100).toFixed(2)}%</p>
        </div>
      </div>
    </Card>
  );
}