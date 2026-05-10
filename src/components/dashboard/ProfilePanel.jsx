import {
  User,
  Network,
  Bell,
  Settings,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { useBodyScrollLock } from "@/lib/useBodyScrollLock";

function ProfilePanel({ onClose }) {
  useBodyScrollLock(true);
  const menuItems = [
    {
      label: "My Profile",
      icon: User,
    },
    {
      label: "My Networks",
      icon: Network,
    },
    {
      label: "Notification Preferences",
      icon: Bell,
    },
    {
      label: "My Account",
      icon: Settings,
    },
    {
      label: "My Preferences",
      icon: SlidersHorizontal,
    },
  ];

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/20 z-40"
        onClick={onClose}
      />

      {/* Panel */}
      <div
        className="
          fixed z-[55]
          top-14 right-[max(0.5rem,env(safe-area-inset-right,0px))] sm:top-16 md:right-4
          left-auto
          w-[min(calc(100vw-1rem),18rem)] md:w-[95vw] md:max-w-80
          h-auto max-h-[min(24rem,78dvh)] md:h-[calc(100vh-5rem)] md:max-h-[calc(100vh-5rem)]
          bg-card border border-border
          rounded-2xl md:rounded-3xl
          shadow-2xl
          flex flex-col overflow-hidden
        "
      >
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-4 flex justify-between items-center shrink-0">
          <h2 className="font-semibold text-base md:text-lg text-foreground">
            Profile
          </h2>

          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-accent transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 min-h-0 overflow-y-auto overscroll-y-contain touch-pan-y">
          
          {/* User Info */}
          <div className="p-5 md:p-6 border-b border-border text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto rounded-full bg-primary flex items-center justify-center text-primary-foreground text-lg md:text-xl font-bold">
              S
            </div>

            <h3 className="mt-4 font-semibold text-base md:text-lg text-foreground">
              Sakshi
            </h3>

            <p className="text-xs md:text-sm text-muted-foreground break-all">
              sakshi@company.com
            </p>
          </div>

          {/* Menu */}
          <div className="p-3 md:p-4 space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.label}
                  className="
                    w-full flex items-center gap-3 md:gap-4
                    p-3 md:p-4
                    rounded-2xl
                    hover:bg-accent
                    transition-all
                  "
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-xl bg-secondary flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                  </div>

                  <span className="text-sm font-medium text-foreground text-left">
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePanel;