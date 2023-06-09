import Link from "next/link";
import { ReactElement } from "react";

type Props = {
  Icon: ReactElement<SVGSVGElement>;
  title: string;
  href: string;
  asideShow: boolean;
};

const SidebarRow = ({ Icon, title, href, asideShow }: Props) => {
  return (
    <Link
      href={href}
      className={`asideLink group ${
        asideShow ? "justif-center space-x-2" : "justify-center"
      }`}
    >
      {Icon}
      {asideShow && (
        <p className="text-base font-medium text-black group-hover:text-blue-500 sm:text-lg">
          {title}
        </p>
      )}
    </Link>
  );
};

export default SidebarRow;
