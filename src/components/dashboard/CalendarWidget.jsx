function CalendarWidget() {
  return (
    <div className="h-full rounded-2xl bg-card border border-border hover:bg-accent/20 p-5 flex flex-col">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Calendar
      </h2>

      <div className="flex-1 overflow-y-auto min-h-0 space-y-3">
        <div>Meeting</div>
        <div>Event</div>
        <div>Holiday</div>
        <div>Workshop</div>
      </div>
    </div>
  );
}

export default CalendarWidget;