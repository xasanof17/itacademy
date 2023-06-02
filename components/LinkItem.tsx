import { ReactElement } from "react";
import Link from "next/link";

type Props = {
  icon: ReactElement<SVGSVGElement> | ReactElement<JSX.Element>;
  href: string;
};

const LinkItem = ({ icon, href }: Props) => {
  return (
    <li>
      <Link
        href={href}
        className="items-cener flex justify-center rounded-full bg-gray-100 p-2"
      >
        {icon}
      </Link>
    </li>
  );
};

export default LinkItem;
