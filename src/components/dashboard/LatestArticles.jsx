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
    },
    {
      title: "Townhall Summary",
      desc: "Highlights from leadership session",
      likes: 18,
      comments: 6,
      liked: false,
    },
    {
      title: "Quarterly Results",
      desc: "Business growth and achievements",
      likes: 25,
      comments: 9,
      liked: false,
    },
    {
      title: "New Hiring Drive",
      desc: "Open roles across departments",
      likes: 10,
      comments: 3,
      liked: false,
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

        border border-white/30 dark:border-white/[0.06]

        bg-white/55 dark:bg-[#1C1C1E]/70

        backdrop-blur-2xl

        p-4 sm:p-5

        shadow-[0_10px_35px_rgba(0,0,0,0.06)]
        dark:shadow-[0_10px_35px_rgba(0,0,0,0.28)]

        transition-all duration-300

        hover:border-[#EB0A1E]/10
        hover:shadow-[0_18px_45px_rgba(235,10,30,0.10)]
      "
    >
      <h2 className="mb-3 text-lg font-semibold text-foreground sm:mb-4">
        Latest Articles
      </h2>

      <div
        className={cn(
          "min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain px-1 pb-2 sm:px-1.5",
          "max-lg:max-h-[min(58vh,480px)]"
        )}
      >
        {articles.map((article, index) => (
          <div
            key={index}
            className="
              rounded-3xl

              border border-white/30 dark:border-white/[0.06]

              bg-gradient-to-br
              from-[#FFF5F5]/95
              to-[#FFEAEA]/88

              dark:from-[#2B1619]/92
              dark:to-[#1C1C1E]/95

              backdrop-blur-xl

              p-4

              shadow-[0_8px_24px_rgba(0,0,0,0.06)]
              dark:shadow-[0_8px_24px_rgba(0,0,0,0.24)]

              transition-all duration-300

              hover:-translate-y-1
              hover:scale-[1.01]

              hover:border-[#EB0A1E]/25

              hover:shadow-[0_16px_36px_rgba(235,10,30,0.16)]
            "
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
                className="
                  flex items-center gap-2

                  rounded-xl

                  px-3 py-1.5

                  text-[#C40D1F]
                  dark:text-[#FF6B75]

                  bg-[#EB0A1E]/8
                  dark:bg-[#EB0A1E]/12

                  transition-all duration-300

                  hover:bg-[#EB0A1E]/16
                  hover:scale-105
                "
              >
                <Heart
                  className="w-4 h-4"
                  fill={article.liked ? "currentColor" : "none"}
                />

                <span className="text-sm">{article.likes}</span>
              </button>

              <button
                onClick={() => handleComment(index)}
                className="
                  flex items-center gap-2

                  rounded-xl

                  px-3 py-1.5

                  text-[#C40D1F]
                  dark:text-[#FF6B75]

                  bg-[#EB0A1E]/8
                  dark:bg-[#EB0A1E]/12

                  transition-all duration-300

                  hover:bg-[#EB0A1E]/16
                  hover:scale-105
                "
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