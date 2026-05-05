function WorkAnniversary() {
  const anniversaries = [
    { name: "Employee 1", years: "2 years" },
    { name: "Employee 2", years: "5 years" },
    { name: "Employee 3", years: "10 years" },
    { name: "Employee 4", years: "3 years" },
  ];

  return (
    <div className="h-full rounded-2xl bg-card border border-border hover:bg-accent/20 p-5 flex flex-col transition-colors">
      {/* Widget title */}
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Work Anniversaries
      </h2>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto min-h-0 space-y-3 pr-2">
        {anniversaries.map((employee, index) => (
          <div
            key={index}
            className="rounded-xl border border-border bg-background p-4 hover:bg-accent transition-colors"
          >
            <h3 className="font-medium text-foreground">
              {employee.name}
            </h3>

            <p className="text-sm text-muted-foreground mt-1">
              {employee.years}
            </p>

            {/* Placeholder for future content */}
            <div className="mt-3 h-20 rounded-lg bg-muted flex items-center justify-center text-sm text-muted-foreground">
              Celebration card
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkAnniversary;