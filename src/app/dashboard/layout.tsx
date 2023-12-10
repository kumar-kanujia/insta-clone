import SideNav from "@/components/SideNav";
import { ReactNode } from "react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen relative flex-col md:flex-row md:overflow-hidden">
      <aside className="w-20 flex-none lg:w-64 md:border-r">
        <SideNav />
      </aside>
      <main className="flex-grow mt-12 md:mt-0 flex-1 w-full md:overflow-y-auto sm:p-6 md:p-12 max-w-7xl mx-auto no-scrollbar">
        {children}
      </main>
    </div>
  );
};
export default DashboardLayout;
