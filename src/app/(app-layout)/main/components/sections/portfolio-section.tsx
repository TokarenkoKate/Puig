import { Button } from "@/components/ui/button";
import { brandTitles, NOT_EXISTING_BRANDS } from "@/data/brands-data";
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
                {items.map((brandItem) => {
                  const existingBrand =
                    !NOT_EXISTING_BRANDS.includes(brandItem);
                  return existingBrand ? (
                    <Button
                      variant="link"
                      className="portfolio__item"
                      key={brandItem}
                    >
                      <Link href={`/brands/${brandItem}`}>
                        {brandTitles[brandItem]}
                      </Link>
                    </Button>
                  ) : (
                    <p className="portfolio__item-text text-sm" key={brandItem}>
                      {brandTitles[brandItem]}
                    </p>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
