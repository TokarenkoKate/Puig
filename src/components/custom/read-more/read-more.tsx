"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import "./read-more.css";

type ReadMoreProps = {
  buttonText?: string;
  children: React.ReactNode;
};

export function ReadMore({
  buttonText = "Читать далее",
  children,
}: ReadMoreProps) {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      {!showMore && (
        <div className="read-more w-fixed">
          <Button className="read-more__btn" onClick={() => setShowMore(true)}>
            {buttonText}
          </Button>
        </div>
      )}
      {showMore && children}
    </>
  );
}
