import { useState, useEffect } from "react";
import { useBodyScrollLock } from "@/lib/useBodyScrollLock";
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

      if (!mobile) {
        setMobileOpen(false);
      }
    };

    checkScreen();

    window.addEventListener("resize", checkScreen);

    return () => window.removeEventListener("resize", checkScreen);
  }, []);

  useBodyScrollLock(isMobile && mobileOpen);

  const allItems = showMore
    ? [...primaryItems, ...extraItems]
    : primaryItems;

  return (
    <>
      {/* Mobile Toggle */}
      {isMobile && (
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="
            fixed left-3 top-3 z-50

            rounded-xl

            bg-[#4B1119]

            p-2

            text-white

            shadow-lg

            border border-white/10

            md:hidden
          "
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      )}

      {/* Overlay */}
      {isMobile && mobileOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm"
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
          fixed md:relative
          top-0 left-0 z-[60]

          flex h-screen shrink-0 flex-col overflow-hidden

          bg-gradient-to-b
          from-[#4A1119]
          via-[#2B0B11]
          to-[#161618]

          text-white

          border-r border-white/6

          shadow-[8px_0_30px_rgba(0,0,0,0.30)]

          transition-all duration-300 ease-in-out

          ${
            isMobile
              ? mobileOpen
                ? "translate-x-0 w-64"
                : "-translate-x-full w-64"
              : expanded
              ? "w-64"
              : "w-[88px]"
          }
        `}
      >
        {/* Logo */}
        <div className="flex h-20 shrink-0 items-center justify-center border-b border-white/5 px-2">
          <img
            src={toyotaIcon}
            alt="Toyota"
            className="h-11 w-auto max-w-[4.5rem] object-contain"
          />
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto py-4 px-2 pr-1.5 space-y-2">
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
                  group
                  relative

                  w-full flex items-center gap-4

                  px-4 py-3

                  rounded-2xl

                  transition-all duration-300

                  ${
                    active === item.name
                      ? `
                        bg-[#EB0A1E]
                        text-white
                        shadow-[0_0_24px_rgba(235,10,30,0.30)]
                      `
                      : `
                        text-white/80

                        hover:bg-white/[0.08]
                        hover:text-white

                        hover:translate-x-[2px]
                        hover:shadow-[0_0_20px_rgba(235,10,30,0.12)]
                      `
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

          {/* More */}
          <button
            onClick={() => setShowMore(!showMore)}
            className="
              w-full flex items-center gap-4

              px-4 py-3

              rounded-2xl

              text-white/80

              transition-all duration-300

              hover:bg-white/[0.08]
              hover:text-white
              hover:translate-x-[2px]
              hover:shadow-[0_0_20px_rgba(235,10,30,0.12)]
            "
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