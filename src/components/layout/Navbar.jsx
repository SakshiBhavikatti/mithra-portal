import { Bell, Search, Moon, Sun, User } from "lucide-react";
import { useEffect, useState } from "react";
import ProfilePanel from "@/components/dashboard/ProfilePanel";
import toyotaNameLogo from "../../assets/toyota_icon_name.png";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !darkMode;

    setDarkMode(newTheme);

    if (newTheme) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav
      className="
        @container/nav
        sticky top-0 z-40

        flex h-16 min-h-16 w-full min-w-0 items-center justify-between gap-2

        border-b border-[#E5E7EB] dark:border-white/5

        px-3
        backdrop-blur-2xl

        bg-gradient-to-r
        from-[#FFF8F8]
        via-[#FFFFFF]
        to-[#FFF4F5]

        dark:from-[#2B0B11]
        dark:via-[#1C1C1E]
        dark:to-[#2B0B11]

        text-foreground
        dark:text-white

        pt-[env(safe-area-inset-top,0px)]

        shadow-[0_4px_20px_rgba(0,0,0,0.06)]
        dark:shadow-[0_4px_20px_rgba(0,0,0,0.18)]

        sm:h-[72px] sm:min-h-[72px] sm:gap-3 sm:px-5
        md:gap-4 md:px-6
      "
    >
      {/* Logo */}
      <div className="flex shrink-0 items-center pl-14 md:pl-0">
        <img
          src={toyotaNameLogo}
          alt="Toyota"
          className="hidden h-10 w-auto max-w-[min(10rem,30vw)] object-contain @min-[52rem]/nav:block sm:h-18 md:h-20"
        />
      </div>

      {/* Search */}
      <div className="relative min-w-0 max-w-lg flex-1">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-[1.05rem] -translate-y-1/2 text-white/70 sm:left-4.5" />

        <input
          type="text"
          placeholder="Search..."
          className="
            w-full min-w-0

            rounded-2xl

            border border-[#5C1720]/20
            dark:border-white/10

            bg-[#4B1119]
            dark:bg-[#3A0E15]

            py-2.5 pl-11 pr-4

            text-base text-white

            shadow-sm
            outline-none

            backdrop-blur-md

            transition-all duration-300

            placeholder:text-base
            placeholder:text-white/55

            hover:border-[#EB0A1E]/50
            hover:bg-[#55141D]

            focus:border-[#EB0A1E]
            focus:ring-2
            focus:ring-[#EB0A1E]/25

            sm:py-3 sm:pl-12 sm:pr-4
          "
        />
      </div>

      {/* Actions */}
      <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4">
        {/* Theme Toggle */}
        <button
          type="button"
          onClick={toggleTheme}
          className="
            relative flex h-8 w-14 shrink-0 items-center

            rounded-full

            border border-[#5C1720]/20
            dark:border-white/10

            bg-[#4B1119]
            dark:bg-[#3A0E15]

            backdrop-blur-md
            px-1

            transition-all duration-300

            hover:border-[#EB0A1E]/50
            hover:shadow-[0_0_18px_rgba(235,10,30,0.18)]

            sm:h-9 sm:w-16
          "
        >
          <div
            className={`flex size-6 items-center justify-center rounded-full bg-white shadow-md transition-transform duration-300 sm:size-7 ${
              darkMode ? "translate-x-6 sm:translate-x-7" : "translate-x-0"
            }`}
          >
            {darkMode ? (
              <Moon className="size-4 text-[#EB0A1E]" />
            ) : (
              <Sun className="size-4 text-[#EB0A1E]" />
            )}
          </div>
        </button>

        {/* Notification */}
        <button
          type="button"
          className="
            relative shrink-0 rounded-xl p-2

            border border-[#5C1720]/20
            dark:border-white/10

            bg-[#4B1119]
            dark:bg-[#3A0E15]

            text-white

            transition-all duration-300

            hover:border-[#EB0A1E]/45
            hover:bg-[#5A1520]
            hover:shadow-[0_0_18px_rgba(235,10,30,0.20)]
          "
        >
          <Bell className="size-5 sm:size-6 text-white" />

          <span className="absolute right-0.5 top-0.5 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>

        {/* Profile */}
        <button
          type="button"
          onClick={() => setProfileOpen(!profileOpen)}
          className="
            flex size-10 shrink-0 items-center justify-center

            rounded-full

            border border-[#5C1720]/20
            dark:border-white/10

            bg-[#4B1119]
            dark:bg-[#3A0E15]

            backdrop-blur-md

            transition-all duration-300

            hover:border-[#EB0A1E]/45
            hover:bg-[#5A1520]
            hover:shadow-[0_0_18px_rgba(235,10,30,0.20)]

            sm:size-11
          "
        >
          <User className="size-5 text-white sm:size-6" />
        </button>

        {profileOpen && (
          <ProfilePanel onClose={() => setProfileOpen(false)} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;