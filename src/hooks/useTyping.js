import { useMemo, useState } from "react";
import { paragraphs } from "../data/paragraphs";
import { splitGraphemes } from "../utils";

export function useTyping() {
  const [paragraphIndex, setParagraphIndex] = useState(0);
  const [typedText, setTypedText] = useState("");

  const currentParagraph = paragraphs[paragraphIndex];

  const paragraphCharacters = useMemo(() => {
    return splitGraphemes(currentParagraph.text);
  }, [currentParagraph]);

  const typedCharacters = useMemo(() => {
    return splitGraphemes(typedText);
  }, [typedText]);

  function handleTyping(value) {
    setTypedText(value);
  }

  function restartTyping() {
    setTypedText("");
  }

  function nextParagraph() {
    setParagraphIndex((prev) => (prev + 1) % paragraphs.length);
    setTypedText("");
  }

  return {
    currentParagraph,
    paragraphCharacters,
    typedText,
    typedCharacters,
    handleTyping,
    restartTyping,
    nextParagraph,
  };
}