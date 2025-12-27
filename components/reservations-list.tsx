"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Avatar, AvatarFallback } from "./ui/avatar"
import { MessageSquare, Check, X, Filter } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table"
import { Tabs, TabsList, TabsTrigger } from "./ui/tabs"

interface Reservation {
  id: string
  guest: {
    name: string
    avatar: string
  }
  date: string
  time: string
  status: "pending" | "confirmed" | "cancelled"
  amount: string
}

const reservationsData: Reservation[] = [
  {
    id: "1",
    guest: { name: "Sarah Kim", avatar: "SK" },
    date: "Dec 28, 2025",
    time: "14:00 - 18:00",
    status: "confirmed",
    amount: "₩80,000",
  },
  {
    id: "2",
    guest: { name: "James Park", avatar: "JP" },
    date: "Dec 29, 2025",
    time: "10:00 - 13:00",
    status: "pending",
    amount: "₩60,000",
  },
  {
    id: "3",
    guest: { name: "Michelle Lee", avatar: "ML" },
    date: "Dec 30, 2025",
    time: "15:00 - 20:00",
    status: "pending",
    amount: "₩100,000",
  },
  {
    id: "4",
    guest: { name: "David Choi", avatar: "DC" },
    date: "Jan 2, 2026",
    time: "11:00 - 13:00",
    status: "confirmed",
    amount: "₩40,000",
  },
  {
    id: "5",
    guest: { name: "Emily Chen", avatar: "EC" },
    date: "Jan 5, 2026",
    time: "16:00 - 19:00",
    status: "pending",
    amount: "₩60,000",
  },
  {
    id: "6",
    guest: { name: "John Smith", avatar: "JS" },
    date: "Dec 15, 2025",
    time: "10:00 - 15:00",
    status: "cancelled",
    amount: "₩100,000",
  },
]

export function ReservationsList() {
  const [filter, setFilter] = useState<"all" | "pending" | "confirmed" | "cancelled">("all")

  const filteredReservations = filter === "all" ? reservationsData : reservationsData.filter((r) => r.status === filter)

  const pendingCount = reservationsData.filter((r) => r.status === "pending").length

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Reservations</h1>
          <p className="text-muted-foreground mt-1">Manage all your booking requests</p>
        </div>

        {pendingCount > 0 && (
          <Badge variant="destructive" className="text-base px-4 py-2">
            {pendingCount} Pending
          </Badge>
        )}
      </div>

      {/* Filter Tabs */}
      <Tabs value={filter} onValueChange={(v) => setFilter(v as typeof filter)}>
        <TabsList>
          <TabsTrigger value="all">All ({reservationsData.length})</TabsTrigger>
          <TabsTrigger value="pending">
            Pending ({reservationsData.filter((r) => r.status === "pending").length})
          </TabsTrigger>
          <TabsTrigger value="confirmed">
            Confirmed ({reservationsData.filter((r) => r.status === "confirmed").length})
          </TabsTrigger>
          <TabsTrigger value="cancelled">
            Cancelled ({reservationsData.filter((r) => r.status === "cancelled").length})
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Reservations Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <span>All Reservations</span>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Filter className="h-4 w-4" />
              More Filters
            </Button>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Guest</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredReservations.map((reservation) => (
                  <TableRow key={reservation.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar>
                          <AvatarFallback>{reservation.guest.avatar}</AvatarFallback>
                        </Avatar>
                        <span className="font-medium">{reservation.guest.name}</span>
                      </div>
                    </TableCell>
                    <TableCell>{reservation.date}</TableCell>
                    <TableCell className="text-muted-foreground">{reservation.time}</TableCell>
                    <TableCell>
                      {reservation.status === "confirmed" && (
                        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Confirmed</Badge>
                      )}
                      {reservation.status === "pending" && (
                        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Pending</Badge>
                      )}
                      {reservation.status === "cancelled" && (
                        <Badge variant="secondary" className="bg-gray-200 text-gray-700">
                          Cancelled
                        </Badge>
                      )}
                    </TableCell>
                    <TableCell className="text-right font-semibold">{reservation.amount}</TableCell>
                    <TableCell>
                      <div className="flex items-center justify-end gap-2">
                        {reservation.status === "pending" && (
                          <>
                            <Button size="sm" variant="default" className="gap-1">
                              <Check className="h-4 w-4" />
                              Approve
                            </Button>
                            <Button size="sm" variant="destructive" className="gap-1">
                              <X className="h-4 w-4" />
                              Reject
                            </Button>
                          </>
                        )}
                        <Button size="sm" variant="ghost">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredReservations.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <p>No {filter !== "all" ? filter : ""} reservations found</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
