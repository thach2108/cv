import { Icon } from "assets/svg";
import cx from "classnames";
import CollectContent from "components/CollectContent";
import MenuIcon from "components/MenuIcon";
import jsPDF from "jspdf";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { Link, useLocation } from "react-router-dom";
import { useMainStore } from "store";
import { MENU, MenuType } from "utils/constants";
import { fontBlack } from "./font/Roboto-Black-normal";
import { fontBold } from "./font/Roboto-Bold-normal";
import { fontLight } from "./font/Roboto-Light-normal";
import { fontMedium } from "./font/Roboto-Medium-normal";
import { font } from "./font/Roboto-Regular-normal";
import { fontThin } from "./font/Roboto-Thin-normal";

function Header() {
  const { activeMenu } = useMainStore();
  const [exporting, setExporting] = useState(false);

  const handleExport = async () => {
    const html = renderToStaticMarkup(<CollectContent />);

    const doc = new jsPDF({
      unit: "px",
      format: "a4",
      putOnlyUsedFonts: true,
      hotfixes: ["px_scaling"],
    });

    // Adding the fonts.
    doc.addFileToVFS("Roboto-Thin-normal.ttf", fontThin);
    doc.addFont("Roboto-Thin-normal.ttf", "Roboto", "normal", 100);

    doc.addFileToVFS("Roboto-Light-normal.ttf", fontLight);
    doc.addFont("Roboto-Light-normal.ttf", "Roboto", "normal", 300);

    doc.addFileToVFS("Roboto-Regular-normal.ttf", font);
    doc.addFont("Roboto-Regular-normal.ttf", "Roboto", "normal", 400);

    doc.addFileToVFS("Roboto-Medium-normal.ttf", fontMedium);
    doc.addFont("Roboto-Medium-normal.ttf", "Roboto", "normal", 500);

    doc.addFileToVFS("Roboto-Bold-normal.ttf", fontBold);
    doc.addFont("Roboto-Bold-normal.ttf", "Roboto", "normal", 700);

    doc.addFileToVFS("Roboto-Black-normal.ttf", fontBlack);
    doc.addFont("Roboto-Black-normal.ttf", "Roboto", "normal", 900);

    doc.setFont("Roboto", "normal", 100);
    doc.setFont("Roboto", "normal", 300);
    doc.setFont("Roboto", "normal", 400);
    doc.setFont("Roboto", "normal", 500);
    doc.setFont("Roboto", "normal", 700);
    doc.setFont("Roboto", "normal", 900);

    if (!html) return;

    setExporting(true);
    doc.html(html, {
      x: 50,
      autoPaging: true,
      html2canvas: {
        letterRendering: true,
      },
      async callback(doc: any) {
        await doc.save("Do Dang Thach");
        setExporting(false);
      },
    });
  };

  return (
    <div className="max-w-screen-xl m-auto py-6 relative">
      <div className="flex justify-end">
        <MenuIcon></MenuIcon>
      </div>
      <ul
        className={cx([
          activeMenu ? "block shadow-xl" : "hidden",
          "py-2 px-4 md:p-0",
          "absolute md:static",
          "border md:border-transparent",
          "gap-6 font-bold -right-4 top-full bg-white",
          "md:flex rounded-bl-xl md:rounded-none md:mt-0",
        ])}
      >
        {MENU.map((m) => (
          <Menu key={m.path} m={m} />
        ))}
        <li className="text-gray-600 w-max py-1 flex items-center relative hover:text-blue-600">
          <button onClick={handleExport}>
            {exporting ? "Exporting..." : "Export pdf"}
          </button>
        </li>
      </ul>
    </div>
  );
}

const Menu = ({ m, isChild = false }: { m: MenuType; isChild?: Boolean }) => {
  return (
    <MenuItem
      path={m.path}
      isChild={isChild}
      subMenu={
        m.children ? (
          <ul
            className={cx(["bg-white rounded-xl md:border", "px-4 py-2 mt-1"])}
          >
            {m.children.map((m1) => (
              <Menu isChild key={m1.path} m={m1} />
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
  isChild,
  children,
}: React.PropsWithChildren & {
  path: string;
  isChild: Boolean;
  subMenu: React.ReactElement | null;
}) => {
  const { hash, pathname } = useLocation();
  const [active, setActive] = useState<boolean>(false);
  const { activeMenu, toggleMenu } = useMainStore();

  const handleClick = () => {
    setActive((old) => !old);

    if (!subMenu && activeMenu) toggleMenu();
  };

  useEffect(() => {
    setTimeout(() => {
      try {
        document.querySelector(hash)?.scrollIntoView();
      } catch {}
    }, 100);
  }, [hash]);

  return (
    <li
      className={cx([
        "relative w-max py-1",
        "hover:text-blue-600",
        isChild ? "text-sm" : "",
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
          style={{ height: active ? 22 + 7 * 28 : 0 }}
        >
          {subMenu}
        </div>
      ) : null}
    </li>
  );
};

export default observer(Header);
