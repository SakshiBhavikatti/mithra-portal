function LatestArticles() {
  const articles = [
    {
      title: "HR Policy Update",
      desc: "New attendance guidelines released",
    },
    {
      title: "Townhall Summary",
      desc: "Highlights from leadership session",
    },
    {
      title: "Quarterly Results",
      desc: "Business growth and achievements",
    },
    {
      title: "New Hiring Drive",
      desc: "Open roles across departments",
    },
  ];

  return (
    <div className="h-full rounded-2xl bg-card border border-border hover:bg-accent/20 p-5 flex flex-col transition-colors">
      {/* Widget title */}
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Latest Articles
      </h2>

      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto min-h-0 space-y-3 pr-2">
        {articles.map((article, index) => (
          <div
            key={index}
            className="rounded-xl border border-border bg-background p-4 hover:bg-accent transition-colors"
          >
            <h3 className="font-medium text-foreground">
              {article.title}
            </h3>

            <p className="text-sm text-muted-foreground mt-2">
              {article.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestArticles;