"use client";

import { Card } from "../ui/card";
import StrategyForm from "../strategy/StrategyForm";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-80 border-r border-border/40 p-4 overflow-y-auto">
      <div className="space-y-4">
        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">导航菜单</h2>
          <nav className="space-y-2">
            <Link 
              href="/" 
              className="block px-3 py-2 rounded-lg hover:bg-accent transition-colors"
            >
              首页
            </Link>
            <Link 
              href="/portfolio" 
              className="block px-3 py-2 rounded-lg hover:bg-accent transition-colors"
            >
              投资组合
            </Link>
          </nav>
        </Card>

        <Card className="p-4">
          <h2 className="text-lg font-semibold mb-4">策略配置</h2>
          <StrategyForm />
        </Card>
      </div>
    </div>
  );
}