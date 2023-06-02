import { Cog8ToothIcon } from "@heroicons/react/24/outline";
import LinkItem from "./LinkItem";

const Navbar = () => {
  return (
    <header className="sticky left-0 top-0 z-10 flex-1 border-b bg-white p-2">
      <nav className="flex items-center justify-between">
        <h2>Dashboard</h2>
        <ul className="flex items-center">
          <LinkItem
            href="/dashboard"
            icon={<Cog8ToothIcon className="h-7 w-7" />}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
