import { Icon } from "assets/svg";
import cx from "classnames";
import MenuIcon from "components/MenuIcon";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMainStore } from "store";
import { MENU, MenuType } from "utils/constants";

function Header() {
  const { activeMenu } = useMainStore();

  return (
    <div className="max-w-screen-xl m-auto py-6 relative">
      <div className="flex justify-end">
        <MenuIcon></MenuIcon>
      </div>
      <ul
        className={cx([
          activeMenu ? "block" : "hidden",
          "py-2 px-4 md:p-0",
          "absolute md:static",
          "border md:border-transparent",
          "gap-6 font-bold right-0 top-full bg-white",
          "md:flex rounded-xl md:rounded-none mt-5 md:mt-0",
        ])}
      >
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
          <ul
            className={cx(["bg-white rounded-xl md:border", "px-4 py-2 mt-1"])}
          >
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
        "relative w-max py-1",
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
      <div className="flex items-center cursor-pointer">{children}</div>
      {subMenu ? (
        <div
          className={cx([
            "top-full transition-all",
            "overflow-hidden md:absolute left-0",
          ])}
          style={{ height: active ? 186 : 0 }}
        >
          {subMenu}
        </div>
      ) : null}
    </li>
  );
};

export default observer(Header);
