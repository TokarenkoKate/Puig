import {
  BrandContentType,
  BrandName,
  PerfumeDetails,
} from "@/lib/types/general";
import { carolinaBrandContent } from "./brands/carolina/carolina";
import { carolinePerfumeDetails } from "./brands/carolina/perfume-details";
import { penhaligonsBrandContent } from "./brands/penhaligons/penhaligons";
import { penhaligonsPerfumes } from "./brands/penhaligons/perfume-details";

// Бренды
export const BRANDS = {
  CAROLINA: "carolina",
  PENHALIGONS: "penhaligons",
  LARTISANPARFUMEUR: "lartisanparfumeur",
  PACORABBANE: "pacorabanne",
  NINARICCI: "ninaricci",
  JEANPAULGAULTIER: "jeanpaulgaultier",
  BANDERAS: "banderas",
} as const;

// Список брендов для навигационного меню
export const brands: { label: string; name: BrandName }[] = [
  {
    label: "Carolina Herrera",
    name: BRANDS.CAROLINA,
  },
  {
    label: "Penhaligon’s",
    name: BRANDS.PENHALIGONS,
  },
  {
    label: "L’Artisan Parfumeur",
    name: BRANDS.LARTISANPARFUMEUR,
  },
  {
    label: "Rabanne",
    name: BRANDS.PACORABBANE,
  },
  {
    label: "Nina Ricci",
    name: BRANDS.NINARICCI,
  },
  {
    label: "Jean Paul Gaultier",
    name: BRANDS.JEANPAULGAULTIER,
  },
  {
    label: "Banderas",
    name: BRANDS.BANDERAS,
  },
];

// Данные для страниц /brands/[brandName]
export const brandsData: Record<BrandName, BrandContentType> = {
  [BRANDS.CAROLINA]: carolinaBrandContent,
  [BRANDS.PENHALIGONS]: penhaligonsBrandContent,
  [BRANDS.LARTISANPARFUMEUR]: carolinaBrandContent,
  [BRANDS.PACORABBANE]: carolinaBrandContent,
  [BRANDS.NINARICCI]: carolinaBrandContent,
  [BRANDS.JEANPAULGAULTIER]: carolinaBrandContent,
  [BRANDS.BANDERAS]: carolinaBrandContent,
};

// Данные с подробной информацией о парфюмах
// на странице /brands/[brandName]
export const perfumesDetailsData: Record<BrandName, PerfumeDetails[]> = {
  [BRANDS.CAROLINA]: carolinePerfumeDetails,
  [BRANDS.PENHALIGONS]: penhaligonsPerfumes,
  [BRANDS.LARTISANPARFUMEUR]: carolinePerfumeDetails,
  [BRANDS.PACORABBANE]: carolinePerfumeDetails,
  [BRANDS.NINARICCI]: carolinePerfumeDetails,
  [BRANDS.JEANPAULGAULTIER]: carolinePerfumeDetails,
  [BRANDS.BANDERAS]: carolinePerfumeDetails,
};
