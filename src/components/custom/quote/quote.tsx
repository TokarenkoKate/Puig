import "./quote.css";

export type QuoteText = {
  text: string;
  author: string;
};

export function Quote({ text, author }: QuoteText) {
  return (
    <div className="quote">
      <div className="quote__content">
        <p className="quote__text text-lg">{text}</p>
        <p className="quote__author text-sm">{author}</p>
      </div>
    </div>
  );
}
