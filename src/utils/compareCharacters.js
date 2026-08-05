/**
 * Compares one expected grapheme with one typed grapheme.
 *
 * @param {string} expected
 * @param {string} typed
 * @returns {boolean}
 */
export function compareCharacters(expected, typed) {
  return expected === typed;
}