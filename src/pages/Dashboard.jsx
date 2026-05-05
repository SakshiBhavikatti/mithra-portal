import ApplicationsGrid from "@/components/dashboard/ApplicationsGrid";
import WorkAnniversary from "@/components/dashboard/WorkAnniversary";
import BirthdayWidget from "@/components/dashboard/BirthdayWidget";
import LatestArticles from "@/components/dashboard/LatestArticles";
import CalendarWidget from "@/components/dashboard/CalendarWidget";

function Dashboard() {
  return (
    <div className="h-[calc(100vh-120px)]">
      {/* Main Dashboard Wrapper */}
      <div className="h-full rounded-3xl border border-border bg-card shadow-sm p-6 overflow-hidden">
        <div className="grid h-full grid-cols-12 gap-6">
          
          {/* Applications (Left Side) */}
          <div className="col-span-4 h-full min-h-0">
            <ApplicationsGrid />
          </div>

          {/* Widgets (Right Side) */}
          <div className="col-span-8 h-full min-h-0">
            <div className="grid h-full grid-cols-2 grid-rows-2 gap-6">
              <WorkAnniversary />
              <BirthdayWidget />
              <LatestArticles />
              <CalendarWidget />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;