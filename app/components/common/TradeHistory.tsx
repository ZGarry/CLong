export default function TradeHistory() {
  return (
    <div className="space-y-4">
      <h3 className="font-medium">交易记录</h3>
      <div className="border rounded-lg p-4">
        <table className="w-full">
          <thead>
            <tr className="text-left">
              <th className="pb-4">日期</th>
              <th className="pb-4">代码</th>
              <th className="pb-4">名称</th>
              <th className="pb-4">操作</th>
              <th className="pb-4">价格</th>
              <th className="pb-4">收益</th>
            </tr>
          </thead>
          <tbody>
            {/* 这里可以动态添加交易记录 */}
          </tbody>
        </table>
      </div>
    </div>
  );
}