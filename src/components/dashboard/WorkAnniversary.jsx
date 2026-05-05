function WorkAnniversary() {
  return (
    <div className="h-full rounded-2xl bg-card border border-border hover:bg-accent/20 p-5 flex flex-col">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Work Anniversaries
      </h2>

      <div className="flex-1 overflow-y-auto min-h-0 space-y-3">
        <div>Employee 1 - 2 years</div>
        <div>Employee 2 - 5 years</div>
        <div>Employee 3 - 10 years</div>
        <div>Employee 4 - 3 years</div>
      </div>
    </div>
  );
}

export default WorkAnniversary;