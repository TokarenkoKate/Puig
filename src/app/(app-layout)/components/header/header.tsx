import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MobileMenu } from "./mobile-menu";
import { HeaderNav } from "./header-nav";
import { AnimationLogo } from "../animation-logo/animation-logo";
import "./header.css";

export function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo-wrapper">
          <Link href="/main">
            <Image
              alt="Logo"
              width={205}
              height={62}
              className="header__logo"
              src="/assets/images/logo.webp"
            />
          </Link>
        </div>
        <HeaderNav className="header__nav_desktop" />
        <Button variant="linkWithCircle" className="header__logout-btn">
          выход
        </Button>
        <MobileMenu />
      </div>
      <AnimationLogo />
    </header>
  );
}
