import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import AnnouncementBar from "./AnnouncementBar";

function Layout({ children }) {
  return (
    <div className="flex min-h-screen bg-background text-foreground items-stretch">
      <Sidebar />

      <div className="flex flex-col flex-1 min-w-0 min-h-screen">
        <Navbar />
        <AnnouncementBar />

        <main
          className="
            flex-1
            min-w-0
            overflow-x-hidden
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