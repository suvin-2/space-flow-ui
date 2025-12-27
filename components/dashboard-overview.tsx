"use client"

import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { TrendingUp, Calendar, AlertCircle, DollarSign } from "lucide-react"

export function DashboardOverview() {
  const stats = [
    {
      title: "Monthly Revenue",
      value: "₩2,450,000",
      change: "+12.5%",
      trend: "up",
      icon: DollarSign,
    },
    {
      title: "Booking Rate",
      value: "78%",
      change: "+5.2%",
      trend: "up",
      icon: TrendingUp,
    },
    {
      title: "Total Bookings",
      value: "42",
      change: "This month",
      trend: "neutral",
      icon: Calendar,
    },
    {
      title: "Pending Approvals",
      value: "3",
      change: "Needs attention",
      trend: "alert",
      icon: AlertCircle,
    },
  ]

  const recentActivity = [
    {
      guest: "Sarah Kim",
      space: "Modern Photo Studio",
      date: "Dec 28, 2025",
      time: "14:00 - 18:00",
      status: "confirmed",
      amount: "₩80,000",
    },
    {
      guest: "James Park",
      space: "Modern Photo Studio",
      date: "Dec 29, 2025",
      time: "10:00 - 13:00",
      status: "pending",
      amount: "₩60,000",
    },
    {
      guest: "Michelle Lee",
      space: "Modern Photo Studio",
      date: "Dec 30, 2025",
      time: "15:00 - 20:00",
      status: "pending",
      amount: "₩100,000",
    },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground mt-1">Welcome back! Here&apos;s your overview.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="flex items-center gap-2 mt-1">
                {stat.trend === "up" && (
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    {stat.change}
                  </Badge>
                )}
                {stat.trend === "alert" && <Badge variant="destructive">{stat.change}</Badge>}
                {stat.trend === "neutral" && <p className="text-xs text-muted-foreground">{stat.change}</p>}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Recent Activity */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Activity</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentActivity.map((activity, i) => (
              <div key={i} className="flex items-center justify-between p-4 bg-muted/50 rounded-lg">
                <div className="space-y-1">
                  <p className="font-medium">{activity.guest}</p>
                  <p className="text-sm text-muted-foreground">{activity.space}</p>
                  <p className="text-sm text-muted-foreground">
                    {activity.date} • {activity.time}
                  </p>
                </div>
                <div className="text-right space-y-2">
                  <p className="font-semibold">{activity.amount}</p>
                  <Badge
                    variant={activity.status === "confirmed" ? "secondary" : "outline"}
                    className={
                      activity.status === "confirmed"
                        ? "bg-green-100 text-green-800"
                        : "border-yellow-500 text-yellow-700"
                    }
                  >
                    {activity.status === "confirmed" ? "Confirmed" : "Pending"}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
