"use client";

import { useState } from "react";
import { Card } from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Button } from "../ui/button";
import PerformanceChart from "../charts/PerformanceChart";
import PerformanceMetrics from "../performance/PerformanceMetrics";
import TradeHistory from "../trades/TradeHistory";
import { PortfolioDisplay } from "../PortfolioDisplay";

interface BacktestResult {
  returns: number[];
  dates: string[];
  metrics: {
    total_return: number;
    annual_return: number;
    sharpe_ratio: number;
    max_drawdown: number;
  };
  trades: any[];
}

export default function MainContent() {
  const [isLoading, setIsLoading] = useState(false);
  const [currentStrategy, setCurrentStrategy] = useState<string | null>(null);
  const [backtestResult, setBacktestResult] = useState<BacktestResult | null>(null);

  const runBacktest = async (strategy: string) => {
    try {
      setIsLoading(true);
      setCurrentStrategy(strategy);
      
      const response = await fetch(`http://localhost:8000/backtest/${strategy}`);
      const data = await response.json();
      
      setBacktestResult(data);
    } catch (error) {
      console.error('回测执行失败:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex-1 p-4 overflow-y-auto">
      <Tabs defaultValue="backtest" className="space-y-4">
        <TabsList>
          <TabsTrigger value="backtest">回测结果</TabsTrigger>
          <TabsTrigger value="portfolio">当前持仓</TabsTrigger>
        </TabsList>

        <TabsContent value="backtest" className="space-y-4">
          <Card className="p-4">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold">策略选择</h2>
              <div className="space-x-4">
                <Button 
                  onClick={() => runBacktest('low_price')}
                  disabled={isLoading}
                  variant={currentStrategy === 'low_price' ? 'default' : 'outline'}
                >
                  {isLoading && currentStrategy === 'low_price' ? '回测中...' : '低价策略回测'}
                </Button>
                <Button 
                  onClick={() => runBacktest('double_low')}
                  disabled={isLoading}
                  variant={currentStrategy === 'double_low' ? 'default' : 'outline'}
                >
                  {isLoading && currentStrategy === 'double_low' ? '回测中...' : '双低策略回测'}
                </Button>
              </div>
            </div>

            {backtestResult && (
              <>
                <h3 className="text-lg font-semibold mb-4">回测结果</h3>
                <PerformanceChart 
                  returns={backtestResult.returns}
                  dates={backtestResult.dates}
                />
              </>
            )}
          </Card>
          
          {backtestResult && (
            <>
              <PerformanceMetrics metrics={backtestResult.metrics} />
              <TradeHistory trades={backtestResult.trades} />
            </>
          )}
        </TabsContent>

        <TabsContent value="portfolio" className="space-y-4">
          <PortfolioDisplay />
        </TabsContent>
      </Tabs>
    </div>
  );
}