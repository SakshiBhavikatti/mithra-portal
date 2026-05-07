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
        h-16 border-b border-border backdrop-blur-md
        px-4 md:px-6
        flex items-center justify-between
        sticky top-0 z-40
        gap-3
      "
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* Left */}
      <div className="flex items-center gap-3 ml-14 md:ml-0">
        <img
          src={toyotaNameLogo}
          alt="Toyota"
          className="h-14 md:h-20 w-auto object-contain"
        />
      </div>

      {/* Search */}
      <div className="flex-1 max-w-md relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/70" />

        <input
          type="text"
          placeholder="Search..."
          className="
            w-full pl-11 pr-4 py-2.5
            rounded-xl border border-border
            shadow-sm text-white
            placeholder:text-white/60
            outline-none focus:ring-2 focus:ring-ring
            transition-all
          "
          style={{ backgroundColor: "var(--sidebar)" }}
        />
      </div>

      {/* Right */}
      <div className="flex items-center gap-2 md:gap-5">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="relative w-14 h-8 rounded-full transition-all duration-300 flex items-center px-1 bg-secondary border border-border"
        >
          <div
            className={`w-6 h-6 rounded-full bg-card shadow-md flex items-center justify-center transform transition-all duration-300 ${
              darkMode ? "translate-x-6" : "translate-x-0"
            }`}
          >
            {darkMode ? (
              <Moon className="w-3.5 h-3.5 text-primary" />
            ) : (
              <Sun className="w-3.5 h-3.5 text-primary" />
            )}
          </div>
        </button>

        {/* Notifications */}
        <button className="relative p-2 rounded-xl hover:bg-accent transition-colors">
          <Bell className="w-5 h-5 text-foreground" />
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* Profile */}
        <button
          onClick={() => setProfileOpen(!profileOpen)}
          className="w-10 h-10 rounded-full bg-card border border-border flex items-center justify-center hover:bg-accent transition-colors"
        >
          <User className="w-5 h-5 text-foreground" />
        </button>

        {profileOpen && (
          <ProfilePanel onClose={() => setProfileOpen(false)} />
        )}
      </div>
    </nav>
  );
}

export default Navbar;