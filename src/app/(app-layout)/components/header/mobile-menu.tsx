import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NavigationMenuList } from "../navigation-menu/navigation-menu-list";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mobile-menu__btn" variant="ghost" size="icon">
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent className="mobile-menu">
        <div className="mobile-menu__content">
          <Link href="/main" className="mobile-menu__logo">
            <Image
              alt="Logo"
              width={100}
              height={80}
              src="/assets/images/logo.webp"
            />
          </Link>
        </div>
        <div className="header__nav">
          <NavigationMenuList isWithinSheet />
        </div>
        <SheetClose asChild>
          <Button variant="default">Выйти</Button>
        </SheetClose>
      </SheetContent>
    </Sheet>
  );
}
