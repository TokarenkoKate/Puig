"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/custom/logo/logo";
import { MobileMenu } from "./mobile-menu";
import { AnimationLogo } from "../animation-logo/animation-logo";
import { NavigationMenu } from "../navigation-menu/navigation-menu";
import { NavigationMenuOverlay } from "../navigation-menu/navigation-menu-overlay";
import { useHeaderNavigationMenu } from "../../lib/hooks/use-header-navigation-menu";
import "./header.css";

export function Header() {
  const { isMenuOpen, isVisible, openMenu, closeMenu } =
    useHeaderNavigationMenu();

  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <div className="header__logo-wrapper">
            <Link href="/main">
              <Logo />
            </Link>
          </div>
          <div className="header__nav">
            <Link href="/main">
              <Button variant="linkWithCircle">главная</Button>
            </Link>
            <Button variant="linkWithCircle" onClick={openMenu}>
              бренды
            </Button>
          </div>
          <Button variant="linkWithCircle" className="header__logout-btn">
            выход
          </Button>
          <MobileMenu />
        </div>
        <AnimationLogo />
        {isMenuOpen && (
          <NavigationMenu isVisible={isVisible} onCloseMenu={closeMenu} />
        )}
      </header>
      {isMenuOpen && (
        <NavigationMenuOverlay isVisible={isVisible} closeMenu={closeMenu} />
      )}
    </>
  );
}
