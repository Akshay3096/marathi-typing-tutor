import { compareCharacters } from "./compareCharacters";

/**
 * Returns the status of every character in the paragraph.
 *
 * Status:
 * pending
 * correct
 * incorrect
 * current
 */
export function getCharacterStatuses(
  paragraphCharacters,
  typedCharacters
) {
  return paragraphCharacters.map((character, index) => {
    if (index < typedCharacters.length) {
      return {
        character,
        status: compareCharacters(character, typedCharacters[index])
          ? "correct"
          : "incorrect",
      };
    }

    if (index === typedCharacters.length) {
      return {
        character,
        status: "current",
      };
    }

    return {
      character,
      status: "pending",
    };
  });
}