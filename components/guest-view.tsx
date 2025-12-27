"use client"

import { HeroSection } from "./hero-section"
import { SpaceListSection } from "./space-list-section"
import { SpaceDetail } from "./space-detail"
import { CompactSearchHeader } from "./compact-search-header"
import { ExpandedSearchOverlay } from "./expanded-search-overlay"
import { useState } from "react"

export function GuestView() {
  const [showDetail, setShowDetail] = useState(false)
  const [isSearching, setIsSearching] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isSearchExpanded, setIsSearchExpanded] = useState(false)
  const [searchParams, setSearchParams] = useState({
    activity: "",
    date: new Date().toISOString().split("T")[0],
    time: "",
  })

  const handleSearch = (params: { activity: string; date: string; time: string }) => {
    setSearchParams(params)
    setIsLoading(true)
    setIsSearching(false)
    setIsSearchExpanded(false)

    // Simulate API delay with skeleton loader
    setTimeout(() => {
      setIsLoading(false)
      setIsSearching(true)
    }, 800)
  }

  const handleEditSearch = () => {
    setIsSearchExpanded(true)
  }

  const handleBackToHome = () => {
    setIsSearching(false)
    setIsLoading(false)
    setShowDetail(false)
  }

  return (
    <div className="min-h-screen">
      {(isSearching || isLoading) && !showDetail && (
        <CompactSearchHeader searchParams={searchParams} onEdit={handleEditSearch} onLogoClick={handleBackToHome} />
      )}

      {!showDetail && !isSearching && !isLoading && <HeroSection onSearch={handleSearch} />}

      {!showDetail && isLoading && <SpaceListSection onSelectSpace={() => setShowDetail(true)} isLoading={true} />}

      {!showDetail && isSearching && <SpaceListSection onSelectSpace={() => setShowDetail(true)} isLoading={false} />}

      {showDetail && (
        <SpaceDetail
          onBack={() => {
            setShowDetail(false)
          }}
        />
      )}

      {isSearchExpanded && (
        <ExpandedSearchOverlay
          searchParams={searchParams}
          onSearch={handleSearch}
          onClose={() => setIsSearchExpanded(false)}
        />
      )}
    </div>
  )
}
