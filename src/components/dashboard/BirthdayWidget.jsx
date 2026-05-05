function BirthdayWidget() {
  return (
    <div className="h-full rounded-2xl bg-card border border-border hover:bg-accent/20 p-5 flex flex-col">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Birthdays
      </h2>

      <div className="flex-1 overflow-y-auto min-h-0 space-y-3">
        <div>Employee Birthday 1</div>
        <div>Employee Birthday 2</div>
        <div>Employee Birthday 3</div>
        <div>Employee Birthday 4</div>
      </div>
    </div>
  );
}

export default BirthdayWidget;