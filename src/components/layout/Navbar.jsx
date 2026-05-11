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
        flex h-16 min-h-16 w-full min-w-0 items-center justify-between gap-2
        border-b border-border px-3 backdrop-blur-md
        pt-[env(safe-area-inset-top,0px)]
        sm:h-[72px] sm:min-h-[72px] sm:gap-3 sm:px-5
        md:gap-4 md:px-6
        sticky top-0 z-40
      "
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="flex shrink-0 items-center pl-14 md:pl-0">
        <img
          src={toyotaNameLogo}
          alt="Toyota"
          className="hidden h-10 w-auto max-w-[min(10rem,30vw)] object-contain @min-[52rem]/nav:block sm:h-18 md:h-20"
        />
      </div>

      <div className="relative min-w-0 max-w-lg flex-1">
        <Search className="pointer-events-none absolute left-4 top-1/2 size-[1.05rem] -translate-y-1/2 text-white/70 sm:left-4.5" />

        <input
          type="text"
          placeholder="Search..."
          className="
            w-full min-w-0 rounded-xl border border-border
            py-2.5 pl-11 pr-4
            text-base text-white shadow-sm outline-none transition-all
            placeholder:text-base placeholder:text-white/60
            focus:ring-2 focus:ring-ring
            sm:py-3 sm:pl-12 sm:pr-4
          "
          style={{ backgroundColor: "var(--sidebar)" }}
        />
      </div>

      <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-4">
        <button
          type="button"
          onClick={toggleTheme}
          className="relative flex h-8 w-14 shrink-0 items-center rounded-full border border-border bg-secondary px-1 transition-all duration-300 sm:h-9 sm:w-16"
        >
          <div
            className={`flex size-6 items-center justify-center rounded-full bg-card shadow-md transition-transform duration-300 sm:size-7 ${
              darkMode ? "translate-x-6 sm:translate-x-7" : "translate-x-0"
            }`}
          >
            {darkMode ? (
              <Moon className="size-4 text-primary" />
            ) : (
              <Sun className="size-4 text-primary" />
            )}
          </div>
        </button>

        <button
          type="button"
          className="relative shrink-0 rounded-xl p-2 hover:bg-accent"
        >
          <Bell className="size-6 text-foreground" />

          <span className="absolute right-0.5 top-0.5 h-2.5 w-2.5 rounded-full bg-red-500"></span>
        </button>

        <button
          type="button"
          onClick={() => setProfileOpen(!profileOpen)}
          className="flex size-10 shrink-0 items-center justify-center rounded-full border border-border bg-card hover:bg-accent sm:size-11"
        >
          <User className="size-5 text-foreground sm:size-6" />
        </button>

        {profileOpen && (
          <ProfilePanel onClose={() => setProfileOpen(false)} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;