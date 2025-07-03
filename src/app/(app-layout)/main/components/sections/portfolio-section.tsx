import { portfolioGroups } from "../../lib/placeholder-data";

export function PortfolioSection() {
  return (
    <section className="portfolio">
      <section className="w-fixed pl-15 portfolio__wrapper">
        <div className="row">
          <h1 className="portfolio__title">Портфолио брендов PUIG в России </h1>
        </div>
        <div className="pt-10 pl-15 portfolio__list-wrapper">
          {portfolioGroups.map(({ title, items }) => (
            <div key={title}>
              <ul className="portfolio__list-circle">
                <li>{title}</li>
              </ul>
              <ul className="portfolio__items">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
