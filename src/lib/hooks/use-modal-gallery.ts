import { useState } from "react";

export const useModalGallery = <T>(galleryItems: T[] = []) => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const selectedItem =
    selectedIndex !== null ? galleryItems[selectedIndex] : null;

  const handleNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => (prev! + 1) % galleryItems.length);
  };

  const handlePrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) =>
      prev! - 1 < 0 ? galleryItems.length - 1 : prev! - 1
    );
  };

  const selectItem = (index: number | null) => {
    setSelectedIndex(index);
  };

  return { selectedIndex, selectedItem, selectItem, handleNext, handlePrev };
};
