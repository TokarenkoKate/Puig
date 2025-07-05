import {
  BrandContentType,
  BrandName,
  PerfumeDetails,
} from "@/lib/types/general";
import { carolinaBrandContent } from "./brands/carolina/carolina";
import { carolinePerfumeDetails } from "./brands/carolina/perfume-details";
import { penhaligonsBrandContent } from "./brands/penhaligons/penhaligons";
import { penhaligonsPerfumeDetails } from "./brands/penhaligons/perfume-details";
import { lartisanparfumeurBrandContent } from "./brands/lartisanparfumeur/lartisanparfumeur";
import { lartisanparfumeurPerfumeDetails } from "./brands/lartisanparfumeur/perfume-details";
import { pacorabanneBrandContent } from "./brands/pacorabanne/pacorabanne";
import { pacorabannePerfumeDetails } from "./brands/pacorabanne/perfume-details";
import { ninaricciBrandContent } from "./brands/ninaricci/ninaricci";
import { ninaricciPerfumeDetails } from "./brands/ninaricci/perfume-details";
import { jeanpaulgaultierPerfumeDetails } from "./brands/jeanpaulgaultier/perfume-details";
import { jeanpaulgaultierBrandContent } from "./brands/jeanpaulgaultier/jeanpaulgaultier";
import { banderasPerfumeDetails } from "./brands/banderas/perfume-details";
import { banderasBrandContent } from "./brands/banderas/banderas";

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
  [BRANDS.LARTISANPARFUMEUR]: lartisanparfumeurBrandContent,
  [BRANDS.PACORABBANE]: pacorabanneBrandContent,
  [BRANDS.NINARICCI]: ninaricciBrandContent,
  [BRANDS.JEANPAULGAULTIER]: jeanpaulgaultierBrandContent,
  [BRANDS.BANDERAS]: banderasBrandContent,
};

// Данные с подробной информацией о парфюмах
// на странице /brands/[brandName]
export const perfumesDetailsData: Record<BrandName, PerfumeDetails[]> = {
  [BRANDS.CAROLINA]: carolinePerfumeDetails,
  [BRANDS.PENHALIGONS]: penhaligonsPerfumeDetails,
  [BRANDS.LARTISANPARFUMEUR]: lartisanparfumeurPerfumeDetails,
  [BRANDS.PACORABBANE]: pacorabannePerfumeDetails,
  [BRANDS.NINARICCI]: ninaricciPerfumeDetails,
  [BRANDS.JEANPAULGAULTIER]: jeanpaulgaultierPerfumeDetails,
  [BRANDS.BANDERAS]: banderasPerfumeDetails,
};
