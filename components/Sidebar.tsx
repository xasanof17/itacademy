"use client";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DesktopComputerIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/outline";
import SidebarRow from "./SidebarRow";

const Sidebar = () => {
  const isMobile = useMediaQuery({
    query: "(min-width: 425px)",
  });

  // this state helps to minimize our aside when bottom button click
  const [asideShow, setAsideShow] = useState<boolean>(true);

  useEffect(() => {
    if (isMobile) {
      setAsideShow(false);
    }
  }, [isMobile]);

  return (
    <aside
      className={`sticky left-0 top-0 flex h-full min-h-screen flex-col overflow-hidden border-r p-2 md:p-3 
      ${asideShow ? "w-full md:max-w-[210px] xl:max-w-[280px]" : "max-w-full"} 
      `}
    >
      <div
        className={`sticky top-0 flex cursor-pointer items-center ${
          asideShow ? "space-x-2" : "justify-center"
        }`}
      >
        {/* we can change this svg logo after our own logo will be ready! */}
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
        <h3 className={`${!asideShow && "hidden"} font-bold capitalize`}>
          It Academy
        </h3>
      </div>
      <div className="mt-5 overflow-hidden">
        <ul className="flex flex-col space-y-2">
          {/* SidebarRow components help to show the links */}
          <SidebarRow
            href="/dashboard"
            title={asideShow ? "Dashboard" : ""}
            asideShow={asideShow}
            Icon={<HomeIcon className="sidebarRow" />}
          />
          <SidebarRow
            href="/dashboard/profile"
            title={asideShow ? "Profile" : ""}
            asideShow={asideShow}
            Icon={<UserIcon className="sidebarRow" />}
          />
          <SidebarRow
            href="/dashboard"
            title={asideShow ? "Dashboard" : ""}
            asideShow={asideShow}
            Icon={<DesktopComputerIcon className="sidebarRow" />}
          />
        </ul>
      </div>
      <div className="absolute bottom-1 h-12 w-auto sm:bottom-5 sm:w-12">
        <button
          className="flex w-full items-center justify-center rounded bg-slate-100 p-2 md:p-3"
          onClick={() => setAsideShow((prev) => !prev)}
        >
          {asideShow ? (
            <ArrowLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          ) : (
            <ArrowRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          )}
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
