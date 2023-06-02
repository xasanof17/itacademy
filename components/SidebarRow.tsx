import Link from "next/link";
import { ReactElement } from "react";

type Props = {
  Icon: ReactElement<SVGSVGElement>;
  title: string;
  href: string;
};

const SidebarRow = ({ Icon, title, href }: Props) => {
  return (
    <Link
      href={href}
      className="group flex items-center space-x-2 rounded-xl px-3 py-2 transition-all duration-200 hover:bg-gray-100"
    >
      {Icon}
      <p className="text-lg font-medium text-black group-hover:text-blue-500">
        {title}
      </p>
    </Link>
  );
};

export default SidebarRow;
