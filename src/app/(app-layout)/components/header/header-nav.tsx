import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";
import { HeaderNavigationButton } from "./navigation-menu";
import { SheetClose } from "@/components/ui/sheet";

export function HeaderNav({
  className,
  isWithinSheet,
}: {
  className?: string;
  isWithinSheet?: boolean;
}) {
  const mainLink = (
    <Link href="/main">
      <Button variant="linkWithCircle">главная</Button>
    </Link>
  );
  return (
    <nav className={clsx("header__nav", className)}>
      {isWithinSheet ? <SheetClose asChild>{mainLink}</SheetClose> : mainLink}
      <HeaderNavigationButton isWithinSheet />
    </nav>
  );
}
