import { ContentQuoteBlock } from "@/lib/types/components";
import { Quote } from "../../quote/quote";

export function ContentBlockQuote({ block }: { block: ContentQuoteBlock }) {
  return <Quote text={block.text} author={block.author} />;
}
