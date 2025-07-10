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
import { christianlouboutinBrandContent } from "./brands/christianlouboutin/christianlouboutin";
import { christianlouboutinPerfumeDetails } from "./brands/christianlouboutin/perfume-details";

// Бренды
export const BRANDS = {
  CAROLINA: "carolina",
  PENHALIGONS: "penhaligons",
  LARTISANPARFUMEUR: "lartisanparfumeur",
  PACORABBANE: "pacorabanne",
  NINARICCI: "ninaricci",
  JEANPAULGAULTIER: "jeanpaulgaultier",
  BANDERAS: "banderas",
  CHRISTIANLOUBOUTIN: "christianlouboutin",
  BYREDO: "byredo",
  BENETON: "united-colors-of-benetton",
  SHAKIRA: "shakira",
} as const;

export const brandTitles = {
  [BRANDS.CAROLINA]: "Carolina Herrera",
  [BRANDS.PENHALIGONS]: "Penhaligon’s",
  [BRANDS.LARTISANPARFUMEUR]: "L’Artisan Parfumeur",
  [BRANDS.PACORABBANE]: "Rabanne",
  [BRANDS.NINARICCI]: "Nina Ricci",
  [BRANDS.JEANPAULGAULTIER]: "Jean Paul Gaultier",
  [BRANDS.BANDERAS]: "Banderas",
  [BRANDS.CHRISTIANLOUBOUTIN]: "Christian Louboutin",
  [BRANDS.BYREDO]: "Byredo",
  [BRANDS.BENETON]: "United Colors of Benetton",
  [BRANDS.SHAKIRA]: "Shakira",
};

export const NOT_EXISTING_BRANDS: BrandName[] = [
  BRANDS.BYREDO,
  BRANDS.BENETON,
  BRANDS.SHAKIRA,
];

export const brandLogos = {
  [BRANDS.CAROLINA]: "/assets/images/brands/carolina/logo.png",
  [BRANDS.PENHALIGONS]: "/assets/images/brands/penhaligons/logo.png",
  [BRANDS.LARTISANPARFUMEUR]:
    "/assets/images/brands/lartisanparfumeur/logo.png",
  [BRANDS.PACORABBANE]: "/assets/images/brands/pacorabanne/logo.png",
  [BRANDS.NINARICCI]: "/assets/images/brands/ninaricci/logo.png",
  [BRANDS.JEANPAULGAULTIER]: "/assets/images/brands/jeanpaulgaultier/logo.png",
  [BRANDS.BANDERAS]: "/assets/images/brands/banderas/logo.png",
  [BRANDS.CHRISTIANLOUBOUTIN]:
    "/assets/images/brands/christianlouboutin/logo.png",
  [BRANDS.BYREDO]: "",
  [BRANDS.BENETON]: "",
  [BRANDS.SHAKIRA]: "",
};

export const brandsNavigationMenu = [
  {
    title: "NICHE",
    brands: [
      BRANDS.PENHALIGONS,
      BRANDS.LARTISANPARFUMEUR,
      BRANDS.CHRISTIANLOUBOUTIN,
    ],
  },
  {
    title: "PRESTIGE",
    brands: [
      BRANDS.PACORABBANE,
      BRANDS.NINARICCI,
      BRANDS.CAROLINA,
      BRANDS.JEANPAULGAULTIER,
    ],
  },
  {
    title: "LIFESTYLE",
    brands: [BRANDS.BANDERAS],
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
  [BRANDS.CHRISTIANLOUBOUTIN]: christianlouboutinBrandContent,
  [BRANDS.BYREDO]: carolinaBrandContent,
  [BRANDS.BENETON]: carolinaBrandContent,
  [BRANDS.SHAKIRA]: carolinaBrandContent,
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
  [BRANDS.CHRISTIANLOUBOUTIN]: christianlouboutinPerfumeDetails,
  [BRANDS.BYREDO]: carolinePerfumeDetails,
  [BRANDS.BENETON]: carolinePerfumeDetails,
  [BRANDS.SHAKIRA]: carolinePerfumeDetails,
};
