import { useState } from "react";
import { Heart, MessageCircle } from "lucide-react";

function LatestArticles() {
  const [articles, setArticles] = useState([
    {
      title: "HR Policy Update",
      desc: "New attendance guidelines released",
      likes: 12,
      comments: 4,
      liked: false,
      color: "bg-blue-50 dark:bg-blue-950/40",
      buttonColor: "text-blue-500 dark:text-blue-300",
    },
    {
      title: "Townhall Summary",
      desc: "Highlights from leadership session",
      likes: 18,
      comments: 6,
      liked: false,
      color: "bg-pink-50 dark:bg-pink-950/40",
      buttonColor: "text-pink-500 dark:text-pink-300",
    },
    {
      title: "Quarterly Results",
      desc: "Business growth and achievements",
      likes: 25,
      comments: 9,
      liked: false,
      color: "bg-green-50 dark:bg-green-950/40",
      buttonColor: "text-green-500 dark:text-green-300",
    },
    {
      title: "New Hiring Drive",
      desc: "Open roles across departments",
      likes: 10,
      comments: 3,
      liked: false,
      color: "bg-violet-50 dark:bg-violet-950/40",
      buttonColor: "text-violet-500 dark:text-violet-300",
    },
  ]);

  const handleLike = (index) => {
    const updated = [...articles];

    if (updated[index].liked) {
      updated[index].likes -= 1;
    } else {
      updated[index].likes += 1;
    }

    updated[index].liked = !updated[index].liked;
    setArticles(updated);
  };

  const handleComment = (index) => {
    const updated = [...articles];
    updated[index].comments += 1;
    setArticles(updated);
  };

  return (
    <div className="h-full rounded-2xl bg-card border border-border hover:bg-accent/20 p-5 flex flex-col transition-colors">
      <h2 className="text-lg font-semibold text-foreground mb-4">
        Latest Articles
      </h2>

      <div className="flex-1 overflow-y-auto min-h-0 space-y-3 pr-2">
        {articles.map((article, index) => (
          <div
            key={index}
            className={`rounded-xl border border-border p-4 transition-colors ${article.color}`}
          >
            <h3 className="font-medium text-foreground">
              {article.title}
            </h3>

            <p className="text-sm text-muted-foreground mt-2">
              {article.desc}
            </p>

            <div className="flex items-center gap-5 mt-4">
              <button
                onClick={() => handleLike(index)}
                className={`flex items-center gap-2 ${article.buttonColor}`}
              >
                <Heart
                  className="w-4 h-4"
                  fill={article.liked ? "currentColor" : "none"}
                />
                <span className="text-sm">{article.likes}</span>
              </button>

              <button
                onClick={() => handleComment(index)}
                className={`flex items-center gap-2 ${article.buttonColor}`}
              >
                <MessageCircle className="w-4 h-4" />
                <span className="text-sm">{article.comments}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestArticles;