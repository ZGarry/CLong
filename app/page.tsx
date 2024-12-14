import MainLayout from "@/components/layout/MainLayout";
import Sidebar from "@/components/layout/Sidebar";
import MainContent from "@/components/layout/MainContent";
import RightPanel from "@/components/layout/RightPanel";

export default function Home() {
  return (
    <MainLayout>
      <Sidebar />
      <MainContent />
      <RightPanel />
    </MainLayout>
  );
}