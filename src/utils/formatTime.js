/**
 * Converts seconds into MM:SS format.
 *
 * Examples:
 * 300 -> 05:00
 * 65  -> 01:05
 * 9   -> 00:09
 *
 * @param {number} seconds
 * @returns {string}
 */
export function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${String(minutes).padStart(2, "0")}:${String(
    remainingSeconds
  ).padStart(2, "0")}`;
}