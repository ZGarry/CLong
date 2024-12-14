"use client";

import { Card, CardContent } from "@/components/ui/card";
import { BacktestResult } from "@/app/types/backtest";

interface AnalysisReportProps {
  result: BacktestResult | null;
}

export default function AnalysisReport({ result }: AnalysisReportProps) {
  if (!result) {
    return (
      <Card>
        <CardContent className="pt-6">
          <div className="h-[400px] flex items-center justify-center text-muted-foreground">
            暂无分析报告
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="font-medium">持仓分析</h3>
              <div className="h-[300px] bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                持仓分析图表
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium">行业分布</h3>
              <div className="h-[300px] bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                行业分布图表
              </div>
            </div>
          </div>
          
          {result.trades.length > 0 && (
            <div className="space-y-4">
              <h3 className="font-medium">交易历史</h3>
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