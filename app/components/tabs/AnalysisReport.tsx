"use client";

import { Card, CardContent } from "@/components/ui/card";
import TradeHistory from "../common/TradeHistory";

export default function AnalysisReport() {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium">持仓分析</h3>
              <div className="h-[300px] bg-muted rounded-lg"></div>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">行业分布</h3>
              <div className="h-[300px] bg-muted rounded-lg"></div>
            </div>
          </div>
          
          <TradeHistory />
        </div>
      </CardContent>
    </Card>
  );
}