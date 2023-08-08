// Create layout for dashboard page and add it to the page
import { LayoutProps } from "@/types/types";
import { NavDashboard } from "./NavDashboard";


const LayoutDashboard = ({ children }: LayoutProps) => {
  return <div className="pt-14">
    <NavDashboard />
    {children}
    </div>;
};
export { LayoutDashboard };
