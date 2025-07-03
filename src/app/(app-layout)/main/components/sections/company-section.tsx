export function CompanySection() {
  return (
    <section className="company">
      <div className="company__text-wrapper">
        <h2 className="company__title">Компания PUIG ― </h2>
        <div className="company__counted-column">
          <p className="company__text">
            семейная компания, которой в настоящее время управляет третье
            поколение семьи Puig. Штаб-квартира Puig располагается в Барселоне.
            Залог успеха компании ― в умелом развитии модных и парфюмерных
            брендов, грамотном использовании уникальных концепций и высоком
            качестве продукции.
          </p>
          <p className="company__text">
            PUIG полностью владеет такими домами моды как: Paco Rabanne,
            Carolina Herrera, Nina Ricci, Jean Paul Gaultier и Dries Van Noten.
            А также работает по лицензии с марками: Christian Louboutin, Comme
            Des Garçons, Antonio Banderas, Shakira и United Colors of Benetton.
            Продукция компании представлена более чем в 150 странах мира.
          </p>
        </div>
      </div>
      <div className="company__image-wrapper">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="company__video-overlay"
          src="/assets/video/puig-history.mp4"
        />
      </div>
    </section>
  );
}
