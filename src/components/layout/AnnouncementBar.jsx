function AnnouncementBar() {
  return (
    <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-b border-border py-2 overflow-hidden whitespace-nowrap">
      <div className="animate-marquee flex items-center gap-3 px-4 text-base">
        <span className="px-2 py-1 rounded-full bg-primary/10 text-primary font-semibold">
          Updates
        </span>

        <span className="text-amber-600 dark:text-amber-300">
          Townhall at 4 PM • Payroll closes Friday • Employee rewards nominations open
        </span>
      </div>
    </div>
  );
}

export default AnnouncementBar;

