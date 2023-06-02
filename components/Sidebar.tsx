import {
  ArrowLeftIcon,
  ComputerDesktopIcon,
  HomeIcon,
  CalendarDaysIcon,
  BellIcon,
  PresentationChartLineIcon,
  BanknotesIcon,
  UserIcon,
  ScaleIcon,
} from "@heroicons/react/24/outline";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  return (
    <aside className="sticky left-0 top-0 flex h-full min-h-screen w-full max-w-[280px] flex-col overflow-hidden border-r p-3">
      <div className="sticky top-0 flex cursor-pointer items-center space-x-2">
        <svg
          className="logo-abbr"
          width="40"
          height="40"
          viewBox="0 0 48 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect y="3" width="48" height="48" rx="16" fill="#FB7D5B"></rect>
          <path
            d="M28.964 35.536H19.532L18.02 40H11.576L20.72 14.728H27.848L36.992 40H30.476L28.964 35.536ZM27.38 30.784L24.248 21.532L21.152 30.784H27.38Z"
            fill="white"
          ></path>
        </svg>
        <h3 className="font-bold capitalize">It Academy</h3>
      </div>
      <div className="mt-5 overflow-hidden">
        <ul className="flex flex-col justify-start">
          <SidebarRow
            href="/dashboard"
            title="Dashboard"
            Icon={
              <HomeIcon className="h-6 w-6 group-hover:text-blue-500 group-active:text-blue-500" />
            }
          />
          <SidebarRow
            href="/dashboard"
            title="Profile"
            Icon={
              <UserIcon className="h-6 w-6 group-hover:text-blue-500 group-active:text-blue-500" />
            }
          />
          <SidebarRow
            href="/dashboard"
            title="Dashboard"
            Icon={
              <ComputerDesktopIcon className="h-6 w-6 group-hover:text-blue-500 group-active:text-blue-500" />
            }
          />
        </ul>
      </div>
      <div className="absolute bottom-5 h-12 w-12">
        <button title="Bu" className="flex items-center justify-center rounded bg-slate-300 p-3">
          <ArrowLeftIcon className="h-6 w-6" />
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
