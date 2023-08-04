import { Avatar } from "./profil/Avatar";
import { Logo } from "./profil/Logo";

const NavDashboard = () => {
  return (
    <div className="flex justify-between fixed top-0 left-0 py-4 w-full bg-[#3d3936] px-6">
      <Logo />
      <Avatar />
    </div>
  );
};

export { NavDashboard };
