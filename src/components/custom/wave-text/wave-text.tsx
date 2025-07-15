"use client";

import { RefObject, useEffect, useRef } from "react";
import gsap from "gsap";
import clsx from "clsx";
import "./wave-text.css";

type WaveTextProps = {
  children: React.ReactNode;
  ref: RefObject<HTMLElement | null>;
  className?: string;
};

export function WaveText({ children, className, ref }: WaveTextProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const srcRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth <= 768) {
      return;
    }

    const wrapper = wrapperRef.current!;
    const srcTxt = srcRef.current!;
    const topTxt = topRef.current!;
    const txt = srcTxt.textContent || "";
    const bb = srcTxt.getBoundingClientRect();

    for (let i = 0; i <= bb.width * 0.55; i++) {
      const div = document.createElement("div");
      topTxt.appendChild(div);
      gsap.set(div, {
        position: "absolute",
        width: 4,
        height: bb.height,
        x: i * 2,
        y: -bb.height,
        textIndent: -i * 2,
        color: "#fff",
        overflow: "hidden",
        textContent: txt,
      });
    }

    const tl = gsap
      .timeline({
        paused: true,
        defaults: {
          duration: 0.25,
          ease: "power3.inOut",
          yoyoEase: "sine.inOut",
        },
      })
      .to(topTxt.children, {
        y: "-=20",
        stagger: { amount: 1, repeat: 1, ease: "none" },
      });

    gsap
      .timeline()
      .fromTo(
        tl,
        { progress: 0.9 },
        { duration: 1.5, progress: 0.1, ease: "power2.inOut" }
      )
      .to(tl, { duration: 4, progress: 0.4, ease: "elastic.out(0.8)" });

    const onPointerMove = (e: PointerEvent) => {
      const xp = e.x / window.innerWidth;
      gsap.to(tl, { progress: xp, overwrite: true });
      gsap.to(wrapper, {
        x: gsap.utils.mapRange(0, 1, 30, -30, xp),
        y: gsap.utils.mapRange(0, 1, -30, 30, xp),
      });
    };

    const onPointerLeave = () => {
      gsap.to(tl, { progress: 0, duration: 0.8, ease: "power3.out" });
      gsap.to(wrapper, { x: 0, y: 0, duration: 0.8, ease: "power3.out" });
    };

    if (ref.current) {
      ref.current.addEventListener("pointermove", onPointerMove);
      ref.current.addEventListener("pointerleave", onPointerLeave);
    }

    return () => {
      if (ref.current) {
        ref.current.removeEventListener("pointermove", onPointerMove);
        ref.current.removeEventListener("pointerleave", onPointerLeave);
      }
      topTxt.innerHTML = "";
      gsap.killTweensOf(topTxt.children);
      gsap.killTweensOf(wrapper);
    };
  }, []);

  return (
    <div className={clsx("wave-text", className)} ref={wrapperRef}>
      <div className="wave-text__content wave-text__content_main" ref={srcRef}>
        {children}
      </div>
      <div
        className="wave-text__content wave-text__content_top"
        ref={topRef}
        aria-disabled="true"
      ></div>
    </div>
  );
}
