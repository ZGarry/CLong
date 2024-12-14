interface StatCardProps {
  label: string;
  value: string;
  color?: string;
}

export default function StatCard({ label, value, color = "" }: StatCardProps) {
  return (
    <div className="p-4 border rounded-lg">
      <div className="text-sm text-muted-foreground">{label}</div>
      <div className={`text-2xl font-bold ${color}`}>{value}</div>
    </div>
  );
}