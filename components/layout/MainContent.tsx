"use client";

import { Card } from "../ui/card";
import PerformanceChart from "../charts/PerformanceChart";
import PerformanceMetrics from "../performance/PerformanceMetrics";
import TradeHistory from "../trades/TradeHistory";

export default function MainContent() {
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <div className="space-y-4">
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">回测结果</h2>
          <PerformanceChart />
        </Card>
        
        <PerformanceMetrics />
        
        <TradeHistory />
      </div>
    </div>
  );
}