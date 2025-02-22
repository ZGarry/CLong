import MainLayout from "@/components/layout/MainLayout";
import Sidebar from "@/components/layout/Sidebar";
import RightPanel from "@/components/layout/RightPanel";
import { PortfolioDisplay } from '@/components/PortfolioDisplay';

export default function PortfolioPage() {
  return (
    <MainLayout>
      <Sidebar />
      <main className="flex-1 p-4 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-6">投资组合管理</h1>
          <PortfolioDisplay />
        </div>
      </main>
      <RightPanel />
    </MainLayout>
  );
} 