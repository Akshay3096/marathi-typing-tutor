import { useMemo } from "react";

import {
  calculateAccuracy,
  calculateCPM,
  calculateWPM,
} from "../utils";

/**
 * Calculates all typing statistics.
 *
 * @param {Array} characterStatuses
 * @param {number} elapsedSeconds
 */
export function useStatistics(characterStatuses, elapsedSeconds = 0) {
  return useMemo(() => {
    let correctCharacters = 0;
    let wrongCharacters = 0;

    characterStatuses.forEach((item) => {
      if (item.status === "correct") {
        correctCharacters++;
      }

      if (item.status === "incorrect") {
        wrongCharacters++;
      }
    });

    const typedCharacters = correctCharacters + wrongCharacters;

    const accuracy = calculateAccuracy(
      correctCharacters,
      typedCharacters
    );

    const cpm = calculateCPM(
      correctCharacters,
      elapsedSeconds
    );

    const wpm = calculateWPM(
      correctCharacters,
      elapsedSeconds
    );

    return {
      correctCharacters,
      wrongCharacters,
      typedCharacters,
      accuracy,
      cpm,
      wpm,
    };
  }, [characterStatuses, elapsedSeconds]);
}