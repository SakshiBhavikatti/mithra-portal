// Layout.jsx

import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AnnouncementBar from "./AnnouncementBar";

function Layout({ children }) {
  return (
    <div className="flex h-screen w-full overflow-hidden bg-sidebar text-foreground">
      <Sidebar />

      <div className="flex h-screen min-w-0 flex-1 flex-col overflow-hidden bg-background">
        {/* Fixed Top Section */}
        <div className="shrink-0">
          <Navbar />
          <AnnouncementBar />
        </div>

        {/* Scrollable Dashboard Content Only */}
        <main
          className="
            flex-1
            min-w-0
            overflow-y-auto
            overflow-x-hidden
            bg-background
            px-3 pt-3 pb-4
            sm:px-4 sm:pt-4 sm:pb-5
            md:px-6 md:py-6
            lg:px-8
            [padding-left:max(0.75rem,env(safe-area-inset-left,0px))]
            [padding-right:max(0.75rem,env(safe-area-inset-right,0px))]
            [padding-bottom:max(1rem,env(safe-area-inset-bottom,0px))]
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;