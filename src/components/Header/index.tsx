import { Icon } from "assets/svg";
import cx from "classnames";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MENU, MenuType } from "utils/constants";

function Header() {
  return (
    <div className="max-w-screen-xl m-auto py-6">
      <ul className="flex gap-6 font-bold">
        {MENU.map((m) => (
          <Menu key={m.path} m={m} />
        ))}
        <li className="text-gray-600 w-max py-1 flex items-center relative hover:text-blue-600">
          <a href="https://github.com/thach2108/cv/blob/master/DoDangThach.pdf">
            DoDangThach.pdf
          </a>
        </li>
      </ul>
    </div>
  );
}

const Menu = ({ m }: { m: MenuType }) => {
  return (
    <MenuItem
      path={m.path}
      subMenu={
        m.children ? (
          <ul className="mt-1 bg-white rounded-xl border border-gray-200 px-4 py-2">
            {m.children.map((m1) => (
              <Menu key={m1.path} m={m1} />
            ))}
          </ul>
        ) : null
      }
    >
      {m.children ? (
        <span className="mr-4 cursor-pointer">{m.text}</span>
      ) : (
        <Link key={m.path} to={m.path}>
          {m.text}
        </Link>
      )}

      {m.children ? (
        <Icon.ArrowUp className={cx(["rotate-180"])} height={12} />
      ) : null}
    </MenuItem>
  );
};

const MenuItem = ({
  path,
  subMenu,
  children,
}: React.PropsWithChildren & {
  path: string;
  subMenu: React.ReactElement | null;
}) => {
  const { hash, pathname } = useLocation();
  const [active, setActive] = useState<boolean>(false);

  const handleClick = () => {
    setActive((old) => !old);
  };

  useEffect(() => {
    setTimeout(() => {
      console.log("hash", hash, document.querySelector(hash));
      document.querySelector(hash)?.scrollIntoView();
    }, 100);
  }, [hash]);

  return (
    <li
      className={cx([
        "w-max py-1",
        "flex items-center relative",
        "hover:text-blue-600",
        pathname === path
          ? pathname === path.split("#")[0]
            ? "text-blue-600"
            : "text-gray-400"
          : hash === path.replace("/", "")
          ? "text-blue-600"
          : "text-gray-400",
      ])}
      onClick={handleClick}
    >
      {children}
      <div
        className="overflow-hidden absolute left-0 top-full transition-all"
        style={{ height: active ? 186 : 0 }}
      >
        {subMenu}
      </div>
    </li>
  );
};

export default Header;
