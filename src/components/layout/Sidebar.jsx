import { useState } from "react";
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
} from "lucide-react";

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

  const allItems = showMore
    ? [...primaryItems, ...extraItems]
    : primaryItems;

  return (
    <aside
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      className={`
        h-screen bg-slate-950 text-white border-r border-slate-800
        transition-all duration-300 ease-in-out
        ${expanded ? "w-64" : "w-20"}
        flex flex-col
      `}
    >
      {/* Logo */}
      <div className="h-20 flex items-center justify-center border-b border-slate-800">
        <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center font-bold">
          M
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto py-4 px-2 space-y-2">
        {allItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              title={!expanded ? item.name : ""}
              className={`
                w-full flex items-center gap-4 px-4 py-3 rounded-xl
                transition-all duration-200
                ${
                  active === item.name
                    ? "bg-blue-600"
                    : "hover:bg-slate-800"
                }
              `}
            >
              <Icon className="w-5 h-5 min-w-[20px]" />

              <span
                className={`
                  whitespace-nowrap overflow-hidden transition-all duration-300
                  ${expanded ? "opacity-100 w-auto" : "opacity-0 w-0"}
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
          className="w-full flex items-center gap-4 px-4 py-3 rounded-xl hover:bg-slate-800 transition-all"
        >
          <Ellipsis className="w-5 h-5 min-w-[20px]" />

          <span
            className={`
              whitespace-nowrap overflow-hidden transition-all duration-300
              ${expanded ? "opacity-100 w-auto" : "opacity-0 w-0"}
            `}
          >
            {showMore ? "Show Less" : "More"}
          </span>
        </button>
      </div>
    </aside>
  );
}

export default Sidebar;