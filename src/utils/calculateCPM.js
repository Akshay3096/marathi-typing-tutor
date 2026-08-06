/**
 * Calculates Characters Per Minute (CPM).
 *
 * @param {number} correctCharacters
 * @param {number} elapsedSeconds
 * @returns {number}
 */
export function calculateCPM(correctCharacters, elapsedSeconds) {
  if (elapsedSeconds === 0) {
    return 0;
  }

  const minutes = elapsedSeconds / 60;

  return Math.round(correctCharacters / minutes);
}