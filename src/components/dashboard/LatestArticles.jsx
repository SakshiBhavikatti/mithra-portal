import { useState } from "react";
import { Heart, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <div
  className="
    flex h-full min-h-0 w-full min-w-0 flex-col overflow-hidden

    rounded-3xl
    bg-white/45 dark:bg-white/[0.03]
    hover:bg-accent/20 dark:hover:bg-indigo-500/10
    backdrop-blur-xl

    p-4 sm:p-5

    shadow-[0_8px_28px_rgba(0,0,0,0.06)]
    hover:shadow-[0_12px_35px_rgba(0,0,0,0.10)]

    transition-all duration-300
  "
>
  <h2 className="mb-3 text-lg font-semibold text-foreground sm:mb-4">
        Latest Articles
      </h2>

      <div
        className={cn(
          "min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain pr-1 sm:pr-2",
          "max-lg:max-h-[min(58vh,480px)]"
        )}
      >
        {articles.map((article, index) => (
          <div
            key={index}
            className={`
  rounded-2xl

  border border-white/20 dark:border-white/5
  backdrop-blur-md

  p-4

  shadow-[0_4px_18px_rgba(0,0,0,0.05)]
  hover:shadow-[0_10px_28px_rgba(0,0,0,0.10)]

  hover:-translate-y-1
  transition-all duration-300

  ${article.color}
`}
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
