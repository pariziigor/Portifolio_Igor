/**
 * Divide o texto em palavras; cada palavra sobe de dentro de uma "máscara" (CSS .split-word).
 * O texto completo fica em aria-label e as palavras visuais ficam aria-hidden.
 */
export function SplitText({ text, as: Tag = "span", className = "" }) {
  return (
    <Tag className={className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span key={`${word}-${i}`} className="split-word" aria-hidden="true" style={{ "--i": i }}>
          <span>{word}&nbsp;</span>
        </span>
      ))}
    </Tag>
  );
}

