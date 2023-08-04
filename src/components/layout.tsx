// Create layout for dashboard page and add it to the page
import { LayoutProps } from "@/types/types";

const LayoutDashboard = ({ children }: LayoutProps) => {
  return <div className="pt-14">{children}</div>;
};
export { LayoutDashboard };
