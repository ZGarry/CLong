"use client";

import { Card } from "../ui/card";
import MarketOverview from "../market/MarketOverview";
import SignalMonitor from "../market/SignalMonitor";
import PortfolioStatus from "../market/PortfolioStatus";

export default function RightPanel() {
  return (
    <div className="w-72 border-l border-border/40 p-4 overflow-y-auto">
      <div className="space-y-4">
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">市场概况</h2>
          <MarketOverview />
        </Card>
        
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">策略信号</h2>
          <SignalMonitor />
        </Card>
        
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">持仓状态</h2>
          <PortfolioStatus />
        </Card>
      </div>
    </div>
  );
}