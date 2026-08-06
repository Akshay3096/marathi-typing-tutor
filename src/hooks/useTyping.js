import { useState } from "react";
import { paragraphs } from "../data/paragraphs";

export function useTyping() {
  const [currentParagraphIndex, setCurrentParagraphIndex] = useState(0);

  const [typedText, setTypedText] = useState("");

  const currentParagraph = paragraphs[currentParagraphIndex];

  const currentIndex = typedText.length;

  const handleTyping = (value) => {
    setTypedText(value);
  };

  const restartTyping = () => {
    setTypedText("");
  };

  const nextParagraph = () => {
    const nextIndex =
      (currentParagraphIndex + 1) % paragraphs.length;

    setCurrentParagraphIndex(nextIndex);

    setTypedText("");
  };

  return {
    currentParagraph,
    typedText,
    currentIndex,
    handleTyping,
    restartTyping,
    nextParagraph,
  };
}