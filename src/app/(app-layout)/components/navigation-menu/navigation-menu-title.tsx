import { forwardRef, useImperativeHandle, useRef } from "react";

export const NavigationMenuTitle = forwardRef<
  HTMLSpanElement[],
  { title: string }
>(function NavigationMenuTitle({ title }, ref) {
  const internalRefs = useRef<HTMLSpanElement[]>([]);
  useImperativeHandle(ref, () => internalRefs.current, []);

  const letters = title.split("");

  return (
    <div className="navigation-menu__group-title">
      {letters.map((ch, idx) => (
        <span
          key={idx}
          className="navigation-menu__group-letter"
          ref={(el) => {
            if (el) {
              internalRefs.current[idx] = el;
            }
          }}
        >
          {ch}
        </span>
      ))}
    </div>
  );
});
