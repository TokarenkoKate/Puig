import { Button } from "@/components/ui/button";
import { brandTitles } from "@/data/brands-data";
import { mainPagePortfolioGroups } from "@/data/main-page-data";
import Link from "next/link";

export function PortfolioSection() {
  return (
    <section className="portfolio">
      <section className="portfolio__wrapper w-fixed">
        <div className="row">
          <h1 className="portfolio__title heading-1">
            Портфолио брендов PUIG в России
          </h1>
        </div>
        <div className="pt-10 portfolio__list-wrapper">
          {mainPagePortfolioGroups.map(({ title, items }) => (
            <div key={title}>
              <ul className="portfolio__list-circle">
                <li className="heading-4">{title}</li>
              </ul>
              <ul className="portfolio__items">
                {items.map((brandItem) => (
                  <Button
                    variant="link"
                    className="portfolio__item"
                    key={brandItem}
                  >
                    <Link href={`/brands/${brandItem}`}>
                      {brandTitles[brandItem]}
                    </Link>
                  </Button>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
