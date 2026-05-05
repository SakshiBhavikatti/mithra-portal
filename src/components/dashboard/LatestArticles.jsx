function LatestArticles() {
  return (
    <div className="h-full rounded-2xl bg-card border border-border hover:bg-accent/20 p-5 flex flex-col">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Latest Articles
      </h2>

      <div className="flex-1 overflow-y-auto min-h-0 space-y-4">
        <div>Article 1</div>
        <div>Article 2</div>
        <div>Article 3</div>
        <div>Article 4</div>
      </div>
    </div>
  );
}

export default LatestArticles;