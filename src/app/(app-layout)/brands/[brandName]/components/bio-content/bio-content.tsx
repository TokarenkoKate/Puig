import { Quote } from "@/components/custom/quote/quote";
import { BioSectionContentType } from "@/lib/types/general";

export function BioContent({
  text,
  quote,
  quoteAuthor,
}: BioSectionContentType) {
  if (quote && quoteAuthor) {
    return <Quote text={quote} author={quoteAuthor} />;
  }

  return <p className="brand-bio__text">{text}</p>;
}
