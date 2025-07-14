import { ContentTextBlock } from "@/lib/types/components";
import React from "react";

// *курсив*
// **жирный**
// ***курсив и жирный***
// [текст](https://example.com)

function parseMarkdown(text: string) {
  // Обновлённое регулярное выражение с поддержкой ссылок и markdown-стилей
  const regex = /(\[.+?\]\(.+?\)|\*\*\*.+?\*\*\*|\*\*.+?\*\*|\*.+?\*)/g;
  const parts = text.split(regex);

  return parts.map((part, index) => {
    const linkMatch = part.match(/^\[(.+?)\]\((.+?)\)$/);
    if (linkMatch) {
      const [, label, href] = linkMatch;
      return (
        <a
          key={index}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {label}
        </a>
      );
    }

    if (/^\*\*\*(.+?)\*\*\*$/.test(part)) {
      return (
        <strong key={index}>
          <em>{part.slice(3, -3)}</em>
        </strong>
      );
    } else if (/^\*\*(.+?)\*\*$/.test(part)) {
      return <strong key={index}>{part.slice(2, -2)}</strong>;
    } else if (/^\*(.+?)\*$/.test(part)) {
      return <em key={index}>{part.slice(1, -1)}</em>;
    } else {
      return <React.Fragment key={index}>{part}</React.Fragment>;
    }
  });
}

export function ContentBlockText({ block }: { block: ContentTextBlock }) {
  return (
    <>
      {block.paragraphs.map((text, idx) => (
        <p key={idx} className="whitespace-pre-line">
          {parseMarkdown(text)}
        </p>
      ))}
    </>
  );
}
