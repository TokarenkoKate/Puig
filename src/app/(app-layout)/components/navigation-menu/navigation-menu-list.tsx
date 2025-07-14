import { brandsNavigationMenu } from "@/data/brands-data";
import { NavigationMenuGroup } from "./navigation-menu-group";

type NavigationMenuListProps = {
  isWithinSheet: boolean;
  onItemClick?: VoidFunction;
};

export function NavigationMenuList({
  isWithinSheet,
  onItemClick,
}: NavigationMenuListProps) {
  return (
    <div className="navigation-menu__list">
      {brandsNavigationMenu.map((brandsGroup) => (
        <NavigationMenuGroup
          brandsGroup={brandsGroup}
          key={brandsGroup.title}
          onItemClick={onItemClick}
          isWithinSheet={isWithinSheet}
        />
      ))}
    </div>
  );
}
