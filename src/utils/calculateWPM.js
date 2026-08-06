/**
 * Calculates Words Per Minute (WPM).
 *
 * Standard Formula:
 * 1 Word = 5 Characters
 *
 * @param {number} correctCharacters
 * @param {number} elapsedSeconds
 * @returns {number}
 */
export function calculateWPM(correctCharacters, elapsedSeconds) {
  if (elapsedSeconds === 0) {
    return 0;
  }

  const minutes = elapsedSeconds / 60;

  return Math.round((correctCharacters / 5) / minutes);
}