import { ContentTextBlock } from "@/lib/types/components";

export function ContentBlockText({ block }: { block: ContentTextBlock }) {
  return (
    <>
      {block.paragraphs.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </>
  );
}
