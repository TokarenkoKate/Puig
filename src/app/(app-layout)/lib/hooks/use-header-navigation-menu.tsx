import { useState, useEffect } from "react";

export function useHeaderNavigationMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
    setTimeout(() => setIsVisible(true), 10);
  };

  const closeMenu = () => {
    setIsVisible(false);
    setTimeout(() => setIsMenuOpen(false), 300);
  };

  useEffect(() => {
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isMenuOpen]);

  return {
    isMenuOpen,
    isVisible,
    openMenu,
    closeMenu,
  };
}
