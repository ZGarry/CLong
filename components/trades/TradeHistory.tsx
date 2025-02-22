"use client";

import { Card } from "../ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

interface Trade {
  date: string;
  symbol: string;
  type: 'buy' | 'sell';
  price: number;
  quantity: number;
  profit?: number;
}

interface TradeHistoryProps {
  trades: Trade[];
}

export default function TradeHistory({ trades }: TradeHistoryProps) {
  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">交易记录</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>日期</TableHead>
              <TableHead>代码</TableHead>
              <TableHead>类型</TableHead>
              <TableHead className="text-right">价格</TableHead>
              <TableHead className="text-right">数量</TableHead>
              <TableHead className="text-right">收益</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {trades.map((trade, index) => (
              <TableRow key={index}>
                <TableCell>{trade.date}</TableCell>
                <TableCell>{trade.symbol}</TableCell>
                <TableCell>
                  <span className={trade.type === 'buy' ? 'text-red-500' : 'text-green-500'}>
                    {trade.type === 'buy' ? '买入' : '卖出'}
                  </span>
                </TableCell>
                <TableCell className="text-right">{trade.price.toFixed(2)}</TableCell>
                <TableCell className="text-right">{trade.quantity}</TableCell>
                <TableCell className="text-right">
                  {trade.profit !== undefined ? (
                    <span className={trade.profit >= 0 ? 'text-green-500' : 'text-red-500'}>
                      {trade.profit >= 0 ? '+' : ''}{trade.profit.toFixed(2)}
                    </span>
                  ) : '-'}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </Card>
  );
}