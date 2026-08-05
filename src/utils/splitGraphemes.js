/**
 * Unicode-safe grapheme splitter.
 * Splits text into user-visible characters (graphemes)
 * instead of UTF-16 code units.
 *
 * Example:
 * "कि" => ["कि"]
 * "त्र" => ["त्र"]
 * "ज्ञ" => ["ज्ञ"]
 */

const segmenter = new Intl.Segmenter("mr", {
  granularity: "grapheme",
});

export function splitGraphemes(text = "") {
  return [...segmenter.segment(text)].map(
    ({ segment }) => segment
  );
}