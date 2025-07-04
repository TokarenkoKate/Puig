import { Button } from "@/components/ui/button";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { brands } from "@/data/brands-data";
import Link from "next/link";

export function HeaderNavigationButton() {
  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>
            <Button variant="linkWithCircle">бренды</Button>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[200px] gap-4">
              {brands.map((brand) => (
                <li key={brand.name}>
                  <NavigationMenuLink asChild color="blue">
                    <Link href={`/brands/${brand.name}`}>{brand.label}</Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
