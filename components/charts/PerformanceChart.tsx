"use client";

import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
  { date: "2023-01", value: 100 },
  { date: "2023-02", value: 105 },
  { date: "2023-03", value: 108 },
  { date: "2023-04", value: 112 },
  { date: "2023-05", value: 115 },
  { date: "2023-06", value: 120 },
];

export default function PerformanceChart() {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="value" 
            stroke="#3370ff" 
            name="策略收益"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}