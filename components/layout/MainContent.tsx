"use client";

import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import PerformanceChart from "../charts/PerformanceChart";
import PerformanceMetrics from "../performance/PerformanceMetrics";
import TradeHistory from "../trades/TradeHistory";
import { PortfolioDisplay } from "../PortfolioDisplay";

export default function MainContent() {
  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <Tabs defaultValue="backtest" className="space-y-4">
        <TabsList>
          <TabsTrigger value="backtest">回测结果</TabsTrigger>
          <TabsTrigger value="portfolio">当前持仓</TabsTrigger>
        </TabsList>

        <TabsContent value="backtest" className="space-y-4">
          <Card className="p-4">
            <h2 className="text-lg font-semibold mb-4">回测结果</h2>
            <PerformanceChart />
          </Card>
          
          <PerformanceMetrics />
          
          <TradeHistory />
        </TabsContent>

        <TabsContent value="portfolio" className="space-y-4">
          <PortfolioDisplay />
        </TabsContent>
      </Tabs>
    </div>
  );
}