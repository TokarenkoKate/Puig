"use client";

import { useRef, useEffect } from "react";
import Image from "next/image";
import { SheetClose } from "@/components/ui/sheet";
import { brandLogos } from "@/data/brands-data";
import { BrandName } from "@/lib/types/general";
import { NavigationMenuTitle } from "./navigation-menu-title";
import Link from "next/link";

type NavigationMenuGroupProps = {
  brandsGroup: {
    title: string;
    brands: BrandName[];
  };
  isWithinSheet: boolean;
  onItemClick?: VoidFunction;
};

const ANIMATION_DELAY = 0.03;

export function NavigationMenuGroup({
  brandsGroup,
  isWithinSheet,
  onItemClick,
}: NavigationMenuGroupProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const lettersRef = useRef<Array<HTMLSpanElement>>([]);

  useEffect(() => {
    const container = containerRef.current;
    const letters = lettersRef.current;

    const onMouseEnter = () => {
      letters.forEach((letter, i) => {
        const delay = i * ANIMATION_DELAY;
        letter.style.transitionDelay = `${delay}s`;
      });
    };

    const onMouseLeave = () => {
      letters.forEach((letter, i) => {
        const reverseDelay = (letters.length - i - 1) * ANIMATION_DELAY;
        letter.style.transitionDelay = `${reverseDelay}s`;
      });
    };

    if (container) {
      container.addEventListener("mouseenter", onMouseEnter);
      container.addEventListener("mouseleave", onMouseLeave);

      return () => {
        container.removeEventListener("mouseenter", onMouseEnter);
        container.removeEventListener("mouseleave", onMouseLeave);
      };
    }
  }, []);

  return (
    <div
      key={brandsGroup.title}
      className="navigation-menu__group"
      ref={containerRef}
    >
      <NavigationMenuTitle title={brandsGroup.title} ref={lettersRef} />
      <div className="navigation-menu__brands">
        {brandsGroup.brands.map((brand) => {
          const link = (
            <Link href={`/brands/${brand}`} key={brand} onClick={onItemClick}>
              <Image
                width={240}
                height={80}
                src={brandLogos[brand]}
                alt={brand}
                className="navigation-menu__brand"
              />
            </Link>
          );
          return isWithinSheet ? <SheetClose asChild>{link}</SheetClose> : link;
        })}
      </div>
    </div>
  );
}
