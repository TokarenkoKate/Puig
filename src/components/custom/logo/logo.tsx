import "./logo.css";
import Image from "next/image";

export function Logo() {
  return (
    <Image
      alt="PUIG Logo"
      loading="lazy"
      width="205"
      height="62"
      decoding="async"
      className="logo"
      src="/assets/images/logo.webp"
    />
  );
}
