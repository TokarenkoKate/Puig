import { Button } from "@/components/ui/button";
import clsx from "clsx";
import Link from "next/link";
import { HeaderNavigationButton } from "./navigation-menu";

export function HeaderNav({ className }: { className?: string }) {
  return (
    <nav className={clsx("header__nav", className)}>
      <Link href="/main">
        <Button variant="linkWithCircle">главная</Button>
      </Link>
      <HeaderNavigationButton />
    </nav>
  );
}
