import { NavigationMenuList } from "./navigation-menu-list";

export function NavigationMenu({
  isVisible,
  onCloseMenu,
}: {
  isVisible: boolean;
  onCloseMenu: VoidFunction;
}) {
  return (
    <div className="navigation-menu__wrapper" onClick={onCloseMenu}>
      <div
        className={`navigation-menu ${
          isVisible ? "navigation-menu_opened" : "navigation-menu_closing"
        }`}
      >
        <NavigationMenuList isWithinSheet={false} onItemClick={onCloseMenu} />
      </div>
    </div>
  );
}
