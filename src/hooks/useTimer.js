import { useEffect, useState } from "react";
import { formatTime } from "../utils";

const DEFAULT_TIME = 300; // 5 Minutes

export function useTimer(isRunning) {
  const [timeLeft, setTimeLeft] = useState(DEFAULT_TIME);

  useEffect(() => {
    if (!isRunning) return;

    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((previous) => previous - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timeLeft]);

  function resetTimer() {
    setTimeLeft(DEFAULT_TIME);
  }

  return {
    timeLeft,
    formattedTime: formatTime(timeLeft),
    resetTimer,
    isFinished: timeLeft === 0,
  };
}