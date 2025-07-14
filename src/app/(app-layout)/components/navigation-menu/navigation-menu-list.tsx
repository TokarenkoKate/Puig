import Image from "next/image";
import Link from "next/link";
import { SheetClose } from "@/components/ui/sheet";
import { brandLogos, brandsNavigationMenu } from "@/data/brands-data";

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
        <div key={brandsGroup.title} className="navigation-menu__group">
          <p className="heading-3 navigation-menu__group-title">
            {brandsGroup.title}
          </p>
          <div className="navigation-menu__brands">
            {brandsGroup.brands.map((brand) => {
              const link = (
                <Link
                  href={`/brands/${brand}`}
                  key={brand}
                  onClick={onItemClick}
                >
                  <Image
                    width={240}
                    height={80}
                    src={brandLogos[brand]}
                    alt={brand}
                    className="navigation-menu__brand"
                    loading="lazy"
                  />
                </Link>
              );
              return isWithinSheet ? (
                <SheetClose asChild>{link}</SheetClose>
              ) : (
                link
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
