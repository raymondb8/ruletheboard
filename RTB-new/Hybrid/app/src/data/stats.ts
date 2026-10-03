/**
 * The homepage impact figures.
 *
 * These aren't static numbers anymore. The board asked for them to climb on
 * their own between hand-corrections: a baseline that was accurate on a known
 * date, plus a fixed amount added for every whole week that has passed since.
 *
 * The Program Director and Technology Director correct the baseline monthly
 * against the real Chess.com and lesson records. When they do, set `base` to
 * the true figures and `AS_OF` to the date those figures were read, and the
 * accrual starts again from there.
 *
 * Only whole elapsed weeks count, so the number a visitor sees is never ahead
 * of a week that hasn't finished.
 */

/** The date `base` below was accurate. ISO, parsed as UTC midnight. */
export const AS_OF = '2026-10-02';

/** True figures as of AS_OF, from the 2025-26 Impact Report. */
const base = {
  lessonHours: 212,
  games: 936,
  puzzles: 7492,
};

/** Fixed amount added per completed week, per the board's weekly program load. */
const weekly = {
  lessonHours: 4,
  games: 103,
  puzzles: 348,
};

const MS_PER_WEEK = 7 * 24 * 60 * 60 * 1000;

/** Whole weeks between AS_OF and `now`. Never negative, so a clock set behind
 *  the anchor date shows the baseline rather than counting down. */
export function weeksSince(now: Date = new Date()): number {
  const anchor = Date.parse(`${AS_OF}T00:00:00Z`);
  return Math.max(0, Math.floor((now.getTime() - anchor) / MS_PER_WEEK));
}

export interface CurrentStats {
  lessonHours: number;
  games: number;
  puzzles: number;
}

export function currentStats(now: Date = new Date()): CurrentStats {
  const weeks = weeksSince(now);
  return {
    lessonHours: base.lessonHours + weekly.lessonHours * weeks,
    games: base.games + weekly.games * weeks,
    puzzles: base.puzzles + weekly.puzzles * weeks,
  };
}

/**
 * Scholars served has no weekly rate. It moves when a new class is admitted,
 * so it stays a hand-set figure.
 */
export const scholarsServed = 100;
