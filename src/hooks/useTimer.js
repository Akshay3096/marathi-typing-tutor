import { useEffect, useState } from "react";
import { formatTime } from "../utils";

/**
 * Timer Hook
 *
 * Starts automatically on first typing.
 * Supports reset and stop.
 *
 * @param {boolean} isTyping
 * @param {number} initialTime
 */
export function useTimer(isTyping, initialTime = 300) {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  // Start timer on first typing
  useEffect(() => {
    if (isTyping && !isRunning && timeLeft > 0) {
      setIsRunning(true);
    }
  }, [isTyping, isRunning, timeLeft]);

  // Countdown
  useEffect(() => {
    if (!isRunning) return;

    if (timeLeft <= 0) {
      setIsRunning(false);
      return;
    }

    const interval = setInterval(() => {
      setTimeLeft((previous) => previous - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  // Reset timer
  function resetTimer() {
    setTimeLeft(initialTime);
    setIsRunning(false);
  }

  // Stop timer
  function stopTimer() {
    setIsRunning(false);
  }

  return {
    timeLeft,
    formattedTime: formatTime(timeLeft),
    isRunning,
    isFinished: timeLeft === 0,
    resetTimer,
    stopTimer,
  };
}