import {
  CogIcon,
  SearchIcon,
  MoonIcon,
} from "@heroicons/react/outline";
import LinkItem from "./LinkItem";

const Navbar = () => {
  return (
    <header className="sticky left-0 top-0 z-10 flex-1 border-b bg-white p-2">
      <nav className="flex items-center justify-between space-x-2">
        {/* <h2 className="text-lg font-medium">Dashboard</h2> */}
        <form className="flex flex-1 items-center rounded-md border px-2 shadow-sm">
          <SearchIcon className="h-6 w-6" />
          <input
            type="text"
            className="w-full py-2 pl-3 font-medium outline-none"
            placeholder="Search..."
          />
        </form>
        <ul className="flex items-center space-x-2">
          <LinkItem icon={<MoonIcon className="h-6 w-6" />} />
          <LinkItem
            href="/dashboard"
            icon={<CogIcon className="h-6 w-6" />}
          />
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
