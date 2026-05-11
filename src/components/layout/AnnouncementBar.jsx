function AnnouncementBar() {
  return (
    <div className="overflow-hidden border-b border-border bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-2.5 sm:py-3">
      <div className="animate-marquee flex items-center gap-3 whitespace-nowrap px-4 text-sm sm:gap-4 sm:px-5 sm:text-base">
        <span className="shrink-0 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary sm:px-3.5 sm:py-1.5 sm:text-sm">
          Updates
        </span>

        <span className="text-amber-700 dark:text-amber-300">
          Townhall at 4 PM • Payroll closes Friday • Employee rewards nominations open
        </span>
      </div>
    </div>
  );
}

export default AnnouncementBar;