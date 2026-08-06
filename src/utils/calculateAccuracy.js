/**
 * Calculates typing accuracy.
 *
 * @param {number} correctCharacters
 * @param {number} typedCharacters
 * @returns {number}
 */
export function calculateAccuracy(correctCharacters, typedCharacters) {
  if (typedCharacters === 0) {
    return 100;
  }

  const accuracy = (correctCharacters / typedCharacters) * 100;

  return Number(accuracy.toFixed(2));
}