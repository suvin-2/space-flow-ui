export function ScheduleLegend() {
  return (
    <div className="flex items-center gap-6 text-sm">
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded bg-green-500" />
        <span>Confirmed</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded bg-yellow-500" />
        <span>Pending</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-4 h-4 rounded bg-gray-500" />
        <span>Blocked</span>
      </div>
    </div>
  )
}
