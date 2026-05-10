import ApplicationsGrid from "@/components/dashboard/ApplicationsGrid";
import WorkAnniversary from "@/components/dashboard/WorkAnniversary";
import BirthdayWidget from "@/components/dashboard/BirthdayWidget";
import LatestArticles from "@/components/dashboard/LatestArticles";
import CalendarWidget from "@/components/dashboard/CalendarWidget";

function Dashboard() {
  return (
    <div className="flex min-h-0 w-full min-w-0 flex-1 flex-col">
      <div
        className="
          flex w-full flex-1 flex-col
          rounded-xl border border-border bg-card/80
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
          <div
            className="
              min-w-0
              max-lg:flex max-lg:min-h-0 max-lg:flex-col
              lg:flex lg:h-[min(88dvh,920px)] lg:max-h-[min(88dvh,920px)] lg:min-h-0 lg:flex-col
            "
          >
            <ApplicationsGrid />
          </div>

          <div
            className="
              grid min-w-0 w-full
              grid-cols-1 gap-3 sm:gap-4 md:gap-5 lg:gap-6
              md:grid-cols-2
              max-lg:h-full max-lg:min-h-0 max-lg:overflow-hidden
              max-lg:[grid-template-rows:repeat(2,minmax(0,1fr))]
              lg:grid-rows-2 lg:overflow-hidden
              lg:h-[min(88dvh,920px)] lg:max-h-[min(88dvh,920px)] lg:min-h-0
            "
          >
            <div className="min-h-0 min-w-0 max-lg:flex max-lg:h-full max-lg:min-h-0 max-lg:flex-col md:max-lg:min-h-[220px] lg:flex lg:h-full lg:min-h-0 lg:flex-col">
              <WorkAnniversary />
            </div>

            <div className="min-h-0 min-w-0 max-lg:flex max-lg:h-full max-lg:min-h-0 max-lg:flex-col md:max-lg:min-h-[220px] lg:flex lg:h-full lg:min-h-0 lg:flex-col">
              <BirthdayWidget />
            </div>

            <div className="min-h-0 min-w-0 max-lg:flex max-lg:h-full max-lg:min-h-0 max-lg:flex-col md:max-lg:min-h-[220px] lg:flex lg:h-full lg:min-h-0 lg:flex-col">
              <LatestArticles />
            </div>

            <div className="min-h-0 min-w-0 max-lg:flex max-lg:h-full max-lg:min-h-0 max-lg:flex-col md:max-lg:min-h-[220px] lg:flex lg:h-full lg:min-h-0 lg:flex-col">
              <CalendarWidget />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
