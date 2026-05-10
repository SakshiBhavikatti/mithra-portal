import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  LayoutGrid,
} from "lucide-react";

import ApplicationsGrid from "@/components/dashboard/ApplicationsGrid";
import WorkAnniversary from "@/components/dashboard/WorkAnniversary";
import BirthdayWidget from "@/components/dashboard/BirthdayWidget";
import LatestArticles from "@/components/dashboard/LatestArticles";
import CalendarWidget from "@/components/dashboard/CalendarWidget";

function Dashboard() {
  const [showApplications, setShowApplications] = useState(false);

  return (
    <div
      className="
        w-full
        min-h-[calc(100vh-120px)]
        bg-gradient-to-br
        from-[#dbebfb]
        via-[#a1b9cf]
        to-[#9caabe]
        p-3 sm:p-4 md:p-6
      "
    >
      {/* Main Wrapper */}
      <div
        className="
          w-full
          rounded-2xl md:rounded-3xl
          border border-border
          bg-card/80
          backdrop-blur-sm
          shadow-sm
          p-3 sm:p-4 md:p-6
        "
      >
        {/* Mobile Applications Toggle */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowApplications(!showApplications)}
            className="w-full flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3 text-left shadow-sm"
          >
            <div className="flex items-center gap-3">
              <LayoutGrid className="w-5 h-5 text-primary" />

              <div>
                <h2 className="font-semibold text-foreground">
                  Applications
                </h2>

                <p className="text-xs text-muted-foreground">
                  Internal and external tools
                </p>
              </div>
            </div>

            {showApplications ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </button>
        </div>

        {/* Mobile Applications */}
        {showApplications && (
          <div className="lg:hidden mb-5 w-full">
            <ApplicationsGrid />
          </div>
        )}

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-4 md:gap-6 w-full">
          
          {/* Desktop Applications */}
          <div className="hidden lg:block w-[320px] shrink-0">
            <ApplicationsGrid />
          </div>

          {/* Widgets Section */}
          <div className="w-full min-w-0 max-h-[calc(100vh-180px)] overflow-y-auto pr-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
              
              <div className="w-full min-w-0">
                <WorkAnniversary />
              </div>

              <div className="w-full min-w-0">
                <BirthdayWidget />
              </div>

              <div className="w-full min-w-0">
                <LatestArticles />
              </div>

              <div className="w-full min-w-0">
                <CalendarWidget />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;