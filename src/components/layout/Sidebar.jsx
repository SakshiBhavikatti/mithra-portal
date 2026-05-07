import { useState, useEffect } from "react";
import {
  House,
  Newspaper,
  ShieldCheck,
  Users,
  BadgeAlert,
  CalendarDays,
  Map,
  ClipboardList,
  Lightbulb,
  FileText,
  GraduationCap,
  Gift,
  Headphones,
  Settings,
  LogOut,
  Ellipsis,
  Menu,
  X,
} from "lucide-react";
import toyotaIcon from "../../assets/toyota_icon.png";

const primaryItems = [
  { name: "Home", icon: House },
  { name: "Feeds", icon: Newspaper },
  { name: "MediaAssist", icon: ShieldCheck },
  { name: "Groups", icon: Users },
  { name: "Grievances", icon: BadgeAlert },
  { name: "Events", icon: CalendarDays },
  { name: "Customer Maps", icon: Map },
  { name: "Survey", icon: ClipboardList },
];

const extraItems = [
  { name: "Ideas", icon: Lightbulb },
  { name: "Policies", icon: FileText },
  { name: "Learning", icon: GraduationCap },
  { name: "Rewards", icon: Gift },
  { name: "Support", icon: Headphones },
  { name: "Settings", icon: Settings },
  { name: "Logout", icon: LogOut },
];

function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const [active, setActive] = useState("Home");
  const [isMobile, setIsMobile] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const checkScreen = () => {
      const mobile = window.innerWidth < 768;

      setIsMobile(mobile);

      // Close mobile sidebar when switching to desktop
      if (!mobile) {
        setMobileOpen(false);
      }
    };

    checkScreen();
    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  // Prevent body scroll when mobile sidebar is open
  useEffect(() => {
    if (isMobile && mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobile, mobileOpen]);

  const allItems = showMore
    ? [...primaryItems, ...extraItems]
    : primaryItems;

  return (
    <>
      {/* Mobile Toggle Button */}
      {isMobile && (
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="fixed top-3 left-3 z-50 md:hidden p-2 rounded-xl bg-sidebar text-sidebar-foreground shadow-md"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      )}

      {/* Overlay */}
      {isMobile && mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      <aside
        onMouseEnter={() => {
          if (!isMobile) setExpanded(true);
        }}
        onMouseLeave={() => {
          if (!isMobile) setExpanded(false);
        }}
        className={`
          fixed md:relative z-[60]
          h-screen bg-sidebar text-sidebar-foreground border-r border-sidebar-border
          transition-all duration-300 ease-in-out transform-gpu flex flex-col
          ${
            isMobile
              ? mobileOpen
                ? "translate-x-0 w-64"
                : "-translate-x-full w-64"
              : expanded
              ? "w-64"
              : "w-20"
          }
        `}
      >
        {/* Logo */}
        <div className="h-20 flex items-center justify-center border-b border-sidebar-border">
          <img
            src={toyotaIcon}
            alt="Toyota"
            className="w-12 h-12 object-contain"
          />
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto py-4 px-2 space-y-2">
          {allItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => {
                  setActive(item.name);

                  if (isMobile) {
                    setMobileOpen(false);
                  }
                }}
                title={!expanded && !isMobile ? item.name : ""}
                className={`
                  w-full flex items-center gap-4 px-4 py-3 rounded-2xl
                  transition-all duration-200
                  ${
                    active === item.name
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                  }
                `}
              >
                <Icon className="w-5 h-5 min-w-[20px]" />

                <span
                  className={`
                    whitespace-nowrap overflow-hidden transition-all duration-300
                    ${
                      expanded || isMobile
                        ? "opacity-100 w-auto"
                        : "opacity-0 w-0"
                    }
                  `}
                >
                  {item.name}
                </span>
              </button>
            );
          })}

          {/* More Button */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="w-full flex items-center gap-4 px-4 py-3 rounded-2xl hover:bg-sidebar-accent hover:text-sidebar-accent-foreground transition-all"
          >
            <Ellipsis className="w-5 h-5 min-w-[20px]" />

            <span
              className={`
                whitespace-nowrap overflow-hidden transition-all duration-300
                ${
                  expanded || isMobile
                    ? "opacity-100 w-auto"
                    : "opacity-0 w-0"
                }
              `}
            >
              {showMore ? "Show Less" : "More"}
            </span>
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;