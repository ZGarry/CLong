"use client";

import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const trades = [
  {
    date: "2024-03-20",
    code: "113050",
    name: "南银转债",
    action: "买入",
    price: 100.52,
    profit: null,
  },
  {
    date: "2024-03-19",
    code: "113049",
    name: "长汽转债",
    action: "卖出",
    price: 115.80,
    profit: 5.2,
  },
];

export default function TradeHistory() {
  return (
    <Card className="p-4">
      <h2 className="text-lg font-semibold mb-4">交易记录</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>日期</TableHead>
            <TableHead>代码</TableHead>
            <TableHead>名称</TableHead>
            <TableHead>操作</TableHead>
            <TableHead>价格</TableHead>
            <TableHead>收益(%)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {trades.map((trade, index) => (
            <TableRow key={index}>
              <TableCell>{trade.date}</TableCell>
              <TableCell>{trade.code}</TableCell>
              <TableCell>{trade.name}</TableCell>
              <TableCell>{trade.action}</TableCell>
              <TableCell>{trade.price}</TableCell>
              <TableCell className={trade.profit ? (trade.profit > 0 ? "text-green-500" : "text-red-500") : ""}>
                {trade.profit ? `${trade.profit > 0 ? "+" : ""}${trade.profit}` : "-"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
  );
}