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
  flex h-14 min-h-14 w-full min-w-0 items-center justify-between gap-1.5
  border-b border-border px-2.5 backdrop-blur-md
  pt-[env(safe-area-inset-top,0px)]
  sm:h-16 sm:min-h-16 sm:gap-2 sm:px-4
  md:gap-3 md:px-6
  sticky top-0 z-40
"
      style={{ backgroundColor: "var(--background)" }}
    >
      <div className="flex shrink-0 items-center pl-14 md:pl-0">
        <img
          src={toyotaNameLogo}
          alt="Toyota"
          className="hidden h-8 w-auto max-w-[min(9rem,28vw)] object-contain @min-[52rem]/nav:block sm:h-9 md:h-11"
        />
      </div>

      <div className="relative min-w-0 max-w-md flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-white/70 sm:left-3.5" />

        <input
          type="text"
          placeholder="Search..."
          className="
  w-full min-w-0 rounded-lg border border-border py-2 pl-9 pr-3
  text-sm text-white shadow-sm outline-none transition-all
  placeholder:text-sm placeholder:text-white/60
  focus:ring-2 focus:ring-ring
  sm:rounded-xl sm:py-2.5 sm:pl-10 sm:pr-3.5 sm:text-base sm:placeholder:text-base
"
          style={{ backgroundColor: "var(--sidebar)" }}
        />
      </div>

      <div className="flex shrink-0 items-center gap-1.5 sm:gap-2 md:gap-4">
        <button
          type="button"
          onClick={toggleTheme}
          className="relative flex h-7 w-12 shrink-0 items-center rounded-full border border-border bg-secondary px-0.5 transition-all duration-300 sm:h-8 sm:w-14 sm:px-1"
        >
          <div
            className={`flex size-5 items-center justify-center rounded-full bg-card shadow-md transition-transform duration-300 sm:size-6 ${
              darkMode ? "translate-x-5 sm:translate-x-6" : "translate-x-0"
            }`}
          >
            {darkMode ? (
              <Moon className="size-3 text-primary sm:size-3.5" />
            ) : (
              <Sun className="size-3 text-primary sm:size-3.5" />
            )}
          </div>
        </button>

        <button
          type="button"
          className="relative shrink-0 rounded-lg p-1.5 hover:bg-accent sm:rounded-xl sm:p-2"
        >
          <Bell className="size-[1.15rem] text-foreground sm:size-5" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 rounded-full bg-red-500"></span>
        </button>

        <button
          type="button"
          onClick={() => setProfileOpen(!profileOpen)}
          className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-card hover:bg-accent sm:size-9 md:size-10"
        >
          <User className="size-[1.05rem] text-foreground sm:size-5" />
        </button>

        {profileOpen && (
          <ProfilePanel onClose={() => setProfileOpen(false)} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
