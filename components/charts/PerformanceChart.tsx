"use client";

import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface PerformanceChartProps {
  returns: number[];
  dates: string[];
}

export default function PerformanceChart({ returns, dates }: PerformanceChartProps) {
  const data = {
    labels: dates,
    datasets: [
      {
        label: '累计收益率',
        data: returns,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: '策略回测收益曲线',
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (value: number) => `${(value * 100).toFixed(2)}%`,
        },
      },
    },
  };

  return (
    <div className="w-full h-[400px]">
      <Line data={data} options={options} />
    </div>
  );
}