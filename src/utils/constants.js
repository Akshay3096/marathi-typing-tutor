/**
 * Timer options (in minutes)
 */
export const TIMER_OPTIONS = [1, 3, 5, 10];

/**
 * Default timer (minutes)
 */
export const DEFAULT_TIMER = 5;

/**
 * Characters considered as one word for WPM calculation.
 */
export const WORD_LENGTH = 5;

/**
 * Initial statistics
 */
export const INITIAL_STATISTICS = {
  wpm: 0,
  cpm: 0,
  accuracy: 100,
  mistakes: 0,
};

/**
 * Typing status
 */
export const TYPING_STATUS = {
  IDLE: "idle",
  RUNNING: "running",
  COMPLETED: "completed",
};