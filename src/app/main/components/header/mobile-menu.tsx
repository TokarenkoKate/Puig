import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HeaderNav } from "./header-nav";

export function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="mobile-menu__btn" variant="ghost">
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
          <HeaderNav />
        </div>
      </SheetContent>
    </Sheet>
  );
}
