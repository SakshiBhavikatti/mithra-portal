function AnnouncementBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2.5 overflow-hidden whitespace-nowrap border-b border-border shadow-sm">
      <div className="animate-marquee inline-block font-medium text-base tracking-wide">
        📢 Quarterly Townhall at 4:00 PM • New HR policy updates are live • Payroll submissions close this Friday • Employee wellness drive starts Monday
      </div>
    </div>
  );
}

export default AnnouncementBar;