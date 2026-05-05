function BirthdayWidget() {
  const birthdays = [
    { name: "Employee 1", date: "12 May" },
    { name: "Employee 2", date: "18 May" },
    { name: "Employee 3", date: "25 May" },
    { name: "Employee 4", date: "30 May" },
  ];

  return (
    <div className="h-full rounded-2xl bg-card border border-border hover:bg-accent/20 p-5 flex flex-col transition-colors">
      {/* Widget title */}
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Birthdays
      </h2>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto min-h-0 space-y-3 pr-2">
        {birthdays.map((employee, index) => (
          <div
            key={index}
            className="rounded-xl border border-border bg-background p-4 hover:bg-accent transition-colors"
          >
            <h3 className="font-medium text-foreground">
              {employee.name}
            </h3>

            <p className="text-sm text-muted-foreground mt-1">
              Birthday: {employee.date}
            </p>

            <div className="mt-3 h-20 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground">
              Birthday card
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BirthdayWidget;