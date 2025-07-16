import Image from "next/image";
import { VideoComponent } from "@/components/custom/video-component/video-component";

export function BiographySection() {
  return (
    <section className="biography w-fixed">
      <div className="biography__photo-wrapper">
        <Image
          alt="Bio"
          loading="lazy"
          decoding="async"
          width={260}
          height={260}
          className="biography__photo"
          src="/assets/images/executive-photo.webp"
        />
      </div>
      <p className="biography__bio-text" data-speed="0.9">
        Компания Puig известна своим умением развивать модные бренды, и мы
        делаем все возможное, чтобы так же успешно действовать в сфере
        парфюмерии. Мы верим, что основа нашего успеха ― сочетание талантливого
        управления бизнесом и страсти к моде и ароматам. Мы объединили
        творчество и увлеченность в уникальную бизнес-модель.
      </p>
      <div className="biography__executive-data" data-speed="0.9">
        <p className="biography__name text-xs">Марк Пуч</p>
        <p className="biography__position text-sm">Президент компании</p>
      </div>
      <VideoComponent
        autoPlay
        muted
        playsInline
        preload="auto"
        data-speed="0.9"
        className="biography__signature"
        src="/assets/video/main-page/signature.mp4"
      />
    </section>
  );
}
