export function NavigationMenuOverlay({
  isVisible,
  closeMenu,
}: {
  isVisible: boolean;
  closeMenu: VoidFunction;
}) {
  return (
    <div
      className={`navigation-menu__overlay ${
        isVisible
          ? "navigation-menu__overlay_visible"
          : "navigation-menu__overlay_hidden"
      }`}
      onClick={closeMenu}
    />
  );
}
