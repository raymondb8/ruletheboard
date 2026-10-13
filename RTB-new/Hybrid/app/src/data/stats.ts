/*
 * ============================================================================
 *  MONTHLY UPDATE: THIS IS THE ONLY PLACE THE IMPACT NUMBERS LIVE.
 *
 *  Games and puzzles come from the team's stats spreadsheet
 *  ("RTB 26-27 Stats.xlsx"). Once a month, when the exact totals are in:
 *
 *    1. Add one line to MONTHLY below with that month's team TOTAL for puzzles
 *       and games (the "Total" row of each table in the sheet, not the
 *       per-scholar "Average" rows).
 *    2. That's it. The site now shows the exact running total through the end
 *       of that month, and estimates forward from there.
 *
 *  Lesson hours aren't in the spreadsheet, so they have their own base
 *  and date further down. Reset those by hand from the Program Director's
 *  figure.
 * ============================================================================
 *
 * How the numbers move between monthly updates: the site takes the exact
 * running total through the last month entered, then adds one "average week"
 * for every full week since that month ended. An average week is the latest
 * month's total divided by 4, which is the sheet's own "Average (Week)" row
 * multiplied back up from per-scholar to the whole team. Entering the next
 * month replaces the estimate with the real figure and refreshes the weekly
 * average, so a stale guess never carries forward.
 *
 * This runs in the visitor's browser each time a page loads (see Home.tsx and
 * Programs.tsx), so the figures keep climbing without anyone redeploying. A
 * deploy is only needed to publish the monthly edit itself.
 */

export interface MonthlyTotals {
  /** The month these totals cover, as YYYY-MM. */
  month: string;
  puzzles: number;
  games: number;
}

/**
 * Exact team totals per month, oldest first, copied from the spreadsheet.
 * Aug includes puzzles done before Rule the Board, as noted in the sheet.
 * TODO(RTB): confirm the board wants this year's sheet totals on their own,
 * without last year's 2025-26 Impact Report figures (7,492 puzzles and 936
 * games) added on top. To add them, append one entry here with
 * month: '2026-07' and those two numbers.
 */
const MONTHLY: MonthlyTotals[] = [
  { month: '2026-08', puzzles: 621, games: 197 },
  { month: '2026-09', puzzles: 1267, games: 292 },
];

/** Weeks in a month for the sheet's own "Average (Week)" row. */
const WEEKS_PER_MONTH = 4;

const MS_PER_DAY = 24 * 60 * 60 * 1000;
const MS_PER_WEEK = 7 * MS_PER_DAY;

/** First day after `month` (YYYY-MM) ends, as UTC midnight in ms. */
function dayAfterMonth(month: string): number {
  const [year, mon] = month.split('-').map(Number);
  return Date.UTC(year, mon, 1); // JS months are 0-based, so `mon` is the next month
}

/** Whole weeks from `from` (ms) to `now`. Never negative, so a clock set behind
 *  the anchor shows the base rather than counting down. */
function wholeWeeks(from: number, now: Date): number {
  return Math.max(0, Math.floor((now.getTime() - from) / MS_PER_WEEK));
}

/* Lesson hours: not in the spreadsheet, so a hand-set base, the date it was
   accurate, and a fixed weekly rate. */
const LESSON_HOURS = {
  base: 268,
  /** ISO date `base` was accurate. */
  asOf: '2026-10-12',
  perWeek: 8,
};

export interface CurrentStats {
  lessonHours: number;
  games: number;
  puzzles: number;
}

export function currentStats(now: Date = new Date()): CurrentStats {
  const latest = MONTHLY[MONTHLY.length - 1];
  const sum = (key: 'puzzles' | 'games') => MONTHLY.reduce((total, m) => total + m[key], 0);
  const weeks = wholeWeeks(dayAfterMonth(latest.month), now);

  return {
    lessonHours:
      LESSON_HOURS.base +
      LESSON_HOURS.perWeek * wholeWeeks(Date.parse(`${LESSON_HOURS.asOf}T00:00:00Z`), now),
    games: sum('games') + Math.round(latest.games / WEEKS_PER_MONTH) * weeks,
    puzzles: sum('puzzles') + Math.round(latest.puzzles / WEEKS_PER_MONTH) * weeks,
  };
}

/**
 * Scholars served has no weekly rate and isn't in the spreadsheet. It moves
 * when a new class is admitted, so it stays a hand-set figure.
 * TODO(RTB): the source for "100+" is unknown (the 2025-26 Impact Report says
 * 4 scholarship scholars and 40+ in Checkmate Your Summer). Confirm the number.
 */
export const scholarsServed = 100;
