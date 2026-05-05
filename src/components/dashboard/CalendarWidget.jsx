function CalendarWidget() {
  const events = [
    {
      title: "Team Meeting",
      date: "12 May, 10:00 AM",
    },
    {
      title: "Workshop",
      date: "14 May, 2:00 PM",
    },
    {
      title: "Payroll Deadline",
      date: "20 May",
    },
    {
      title: "Leadership Townhall",
      date: "25 May, 4:00 PM",
    },
  ];

  return (
    <div className="h-full rounded-2xl bg-card border border-border hover:bg-accent/20 p-5 flex flex-col transition-colors">
      {/* Widget title */}
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Calendar
      </h2>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto min-h-0 space-y-3 pr-2">
        {events.map((event, index) => (
          <div
            key={index}
            className="rounded-xl border border-border bg-background p-4 hover:bg-accent transition-colors"
          >
            <h3 className="font-medium text-foreground">
              {event.title}
            </h3>

            <p className="text-sm text-muted-foreground mt-2">
              {event.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarWidget;