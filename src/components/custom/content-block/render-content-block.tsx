import { ContentBlock, ContentBlockType } from "@/lib/types/components";
import React from "react";
import { ContentBlockText } from "./variants/content-block-text";
import { ContentBlockHeading } from "./variants/content-block-heading";
import { ContentBlockQuote } from "./variants/content-block-quote";
import { ContentBlockImage } from "./variants/content-block-image";
import { ContentBlockVideo } from "./variants/content-block-video";

export function renderContentBlock(block: ContentBlock) {
  const { type } = block;

  switch (type) {
    case ContentBlockType.TEXT:
      return <ContentBlockText block={block} key={block.id} />;
    case ContentBlockType.HEADING:
      return <ContentBlockHeading block={block} key={block.id} />;
    case ContentBlockType.QUOTE:
      return <ContentBlockQuote block={block} key={block.id} />;
    case ContentBlockType.IMAGE:
      return <ContentBlockImage block={block} key={block.id} />;
    case ContentBlockType.VIDEO:
      return <ContentBlockVideo block={block} key={block.id} />;
    default:
      return null;
  }
}
