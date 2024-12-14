"use client";

import { Card, CardContent } from "@/components/ui/card";
import StatCard from "@/app/components/common/StatCard";
import { BacktestResult } from "@/app/types/backtest";

interface BacktestResultsProps {
  result: BacktestResult | null;
}

export default function BacktestResults({ result }: BacktestResultsProps) {
  if (!result) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="h-[400px] flex items-center justify-center text-muted-foreground">
            暂无回测结果
          </div>
        </CardContent>
      </Card>
    );
  }

  const stats = [
    { label: "年化收益", value: `${result.annualReturn.toFixed(1)}%`, color: result.annualReturn >= 0 ? "text-green-500" : "text-red-500" },
    { label: "最大回撤", value: `${result.maxDrawdown.toFixed(1)}%`, color: "text-red-500" },
    { label: "夏普比率", value: result.sharpeRatio.toFixed(2) },
    { label: "胜率", value: `${result.winRate.toFixed(1)}%` },
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

          {result.trades.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-medium">交易记录</h3>
              <div className="border rounded-lg divide-y">
                {result.trades.map((trade, index) => (
                  <div key={index} className="p-4 flex items-center justify-between">
                    <div>
                      <span className="font-medium">{trade.symbol}</span>
                      <span className="ml-4 text-sm text-muted-foreground">{trade.date}</span>
                    </div>
                    <div>
                      <span className={trade.type === 'buy' ? 'text-green-500' : 'text-red-500'}>
                        {trade.type === 'buy' ? '买入' : '卖出'}
                      </span>
                      <span className="ml-4">{trade.quantity}股</span>
                      <span className="ml-4">¥{trade.price.toFixed(2)}</span>
                      {trade.profit !== undefined && (
                        <span className={`ml-4 ${trade.profit >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                          {trade.profit >= 0 ? '+' : ''}{trade.profit.toFixed(2)}%
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}