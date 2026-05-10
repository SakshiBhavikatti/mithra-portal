function AnnouncementBar() {
  return (
    <div className="overflow-hidden border-b border-border bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 py-1.5 sm:py-2">
      <div className="animate-marquee flex items-center gap-2 whitespace-nowrap px-3 text-xs sm:gap-3 sm:px-4 sm:text-sm">
        <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[0.65rem] font-semibold text-primary sm:px-2.5 sm:py-1 sm:text-xs">
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

