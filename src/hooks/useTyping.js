import { useMemo, useState } from "react";

import { paragraphs } from "../data/paragraphs";

import {
  splitGraphemes,
  getCharacterStatuses,
} from "../utils";

export function useTyping() {
  // Current paragraph index
  const [paragraphIndex, setParagraphIndex] = useState(0);

  // User typed text
  const [typedText, setTypedText] = useState("");

  // Current paragraph object
  const currentParagraph = paragraphs[paragraphIndex];

  // Split paragraph into graphemes
  const paragraphCharacters = useMemo(() => {
    return splitGraphemes(currentParagraph.text);
  }, [currentParagraph]);

  // Split typed text into graphemes
  const typedCharacters = useMemo(() => {
    return splitGraphemes(typedText);
  }, [typedText]);

  // Character status list
  const characterStatuses = useMemo(() => {
    return getCharacterStatuses(
      paragraphCharacters,
      typedCharacters
    );
  }, [paragraphCharacters, typedCharacters]);

  // Handle typing
  function handleTyping(value) {
    setTypedText(value);
  }

  // Restart current paragraph
  function restartTyping() {
    setTypedText("");
  }

  // Load next paragraph
  function nextParagraph() {
    setParagraphIndex((previousIndex) => {
      return (previousIndex + 1) % paragraphs.length;
    });

    setTypedText("");
  }

  return {
    currentParagraph,

    typedText,

    paragraphCharacters,

    typedCharacters,

    characterStatuses,

    handleTyping,

    restartTyping,

    nextParagraph,
  };
}