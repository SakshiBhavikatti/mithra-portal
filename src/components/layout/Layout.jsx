import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AnnouncementBar from "./AnnouncementBar";

function Layout({ children }) {
  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground">
      <Sidebar />

      <div className="flex-1 flex flex-col min-w-0">
        <Navbar />
        <AnnouncementBar />

        <main
          className="
            flex-1 overflow-y-auto
            p-4 md:p-8
            bg-background
          "
        >
          {children}
        </main>
      </div>
    </div>
  );
}

export default Layout;