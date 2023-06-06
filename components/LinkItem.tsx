import { ReactElement } from "react";
import Link from "next/link";

type Props = {
  icon: ReactElement<SVGSVGElement> | ReactElement<JSX.Element>;
  href?: string;
  onClick?: () => void;
};

const LinkItem = ({ icon, href, onClick }: Props) => {
  return (
    <>
      {href ? (
        <li>
          <Link
            href={href}
            className="flex items-center justify-center rounded-full bg-gray-100 p-2"
          >
            {icon}
          </Link>
        </li>
      ) : (
        <button
          onClick={onClick}
          className="flex items-center justify-center rounded-full bg-gray-100 p-2"
        >
          {icon}
        </button>
      )}
    </>
  );
};

export default LinkItem;
