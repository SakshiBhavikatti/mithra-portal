import {
  User,
  Network,
  Bell,
  Settings,
  SlidersHorizontal,
  Moon,
  Sun,
  X,
} from "lucide-react";

function ProfilePanel({ onClose }) {
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
      <div className="fixed top-16 right-4 w-80 h-[85vh] bg-card border border-border rounded-3xl shadow-2xl z-50 overflow-y-auto">
        
        {/* Header */}
        <div className="sticky top-0 bg-card border-b border-border p-4 flex justify-between items-center">
          <h2 className="font-semibold text-lg text-foreground">
            Profile
          </h2>

          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-accent"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* User Info */}
        <div className="p-6 border-b border-border text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-primary flex items-center justify-center text-primary-foreground text-xl font-bold">
            S
          </div>

          <h3 className="mt-4 font-semibold text-lg text-foreground">
            Sakshi
          </h3>

          <p className="text-sm text-muted-foreground">
            sakshi@company.com
          </p>
        </div>

        {/* Menu */}
        <div className="p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.label}
                className="w-full flex items-center gap-4 p-4 rounded-2xl hover:bg-accent transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                  <Icon className="w-5 h-5 text-primary" />
                </div>

                <span className="text-sm font-medium text-foreground">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Themes
        <div className="p-4 border-t border-border">
          <p className="text-xs uppercase tracking-wide text-muted-foreground mb-4">
            Themes
          </p>

          <div className="grid grid-cols-2 gap-3">
            <button className="p-4 rounded-2xl border border-border hover:bg-accent">
              <Sun className="w-5 h-5 mx-auto mb-2" />
              Light
            </button>

            <button className="p-4 rounded-2xl border border-border hover:bg-accent">
              <Moon className="w-5 h-5 mx-auto mb-2" />
              Dark
            </button>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default ProfilePanel;