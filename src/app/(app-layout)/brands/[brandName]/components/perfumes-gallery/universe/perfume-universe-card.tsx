import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { PerfumeUniverse } from "@/lib/types/general";
import Image from "next/image";
import { useState } from "react";
import { PerfumeUniverseCardModal } from "./perfume-universe-card-modal";

export function PerfumeUniverseCard({
  perfumeImage,
}: {
  perfumeImage: PerfumeUniverse["images"][0];
}) {
  const { title, url } = perfumeImage;
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="perfume-universe__card">
          <Image
            alt={title}
            loading="lazy"
            width={url?.width}
            height={url?.height}
            className="perfume-universe__card-image"
            src={url?.src}
          />
          <span className="perfume-universe__card-title">{title}</span>
        </div>
      </DialogTrigger>
      <DialogContent className="perfume-universe__modal">
        <PerfumeUniverseCardModal perfumeName={title} />
      </DialogContent>
    </Dialog>
  );
}
