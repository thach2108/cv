import { Icon } from "assets/svg";
import cx from "classnames";
import { useMainStore } from "store";

const MenuIcon = () => {
  const { activeMenu, toggleMenu } = useMainStore();

  return (
    <div
      className={cx([
        "menu-icon cursor-pointer",
        "block md:hidden relative my-2",
      ])}
      onClick={toggleMenu}
    >
      <Icon.Line
        className={cx([
          activeMenu ? "rotate-45 top-1/2 -translate-y-1/2" : "top-0",
          "w-full absolute left-0 right-0 transition-all",
        ])}
      />
      <Icon.Line
        className={cx([
          activeMenu && "opacity-0",
          "w-full absolute top-1/2 -translate-y-1/2 left-0 right-0 transition-opacity",
        ])}
      />
      <Icon.Line
        className={cx([
          activeMenu ? "-rotate-45 bottom-1/2 translate-y-1/2" : "bottom-0",
          "w-full absolute left-0 right-0 transition-all",
        ])}
      />
    </div>
  );
};

export default MenuIcon;
