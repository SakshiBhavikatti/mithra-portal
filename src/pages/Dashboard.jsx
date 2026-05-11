import ApplicationsGrid from "@/components/dashboard/ApplicationsGrid";
import WorkAnniversary from "@/components/dashboard/WorkAnniversary";
import BirthdayWidget from "@/components/dashboard/BirthdayWidget";
import LatestArticles from "@/components/dashboard/LatestArticles";
import CalendarWidget from "@/components/dashboard/CalendarWidget";

function Dashboard() {
  return (
    <div className="flex w-full min-w-0 flex-col">
      <div
        className="
          w-full
          rounded-xl bg-card/70
          shadow-sm backdrop-blur-sm
          sm:rounded-2xl md:rounded-3xl
          p-3 sm:p-4 md:p-5 lg:p-6
        "
      >
        <div
          className="
            grid w-full gap-3 sm:gap-4 md:gap-5 lg:gap-6
            grid-cols-1
            lg:grid-cols-[minmax(280px,1fr)_minmax(0,2fr)]
            lg:items-stretch
          "
        >
          {/* Applications */}
          <div
            className="
              min-w-0
              lg:h-[78vh]
              lg:min-h-0
              flex flex-col
            "
          >
            <ApplicationsGrid />
          </div>

          {/* Widgets */}
          <div
            className="
              grid min-w-0 w-full
              grid-cols-1 gap-3 sm:gap-4 md:gap-5 lg:gap-6
              md:grid-cols-2
              lg:grid-rows-2
              lg:h-[78vh]
              lg:min-h-0
            "
          >
            <div className="min-h-0 min-w-0 flex flex-col">
              <WorkAnniversary />
            </div>

            <div className="min-h-0 min-w-0 flex flex-col">
              <BirthdayWidget />
            </div>

            <div className="min-h-0 min-w-0 flex flex-col">
              <LatestArticles />
            </div>

            <div className="min-h-0 min-w-0 flex flex-col">
              <CalendarWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;