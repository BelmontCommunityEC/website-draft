// ─────────────────────────────────────────────────────────────────
//  METRICS REGISTRY — the controlled vocabulary for roll-up stats.
//
//  WHY THIS EXISTS: a stat only rolls up into the home-page impact strip if
//  its `metric:` key matches one of the keys below. Before this registry a
//  typo like `metric: peple` failed silently — the number just vanished. Now
//  the build FAILS with a clear message if a stat uses an unknown key.
//
//  HOW TO ADD A METRIC: add a `key: 'Default label'` line below, then use that
//  key in a project/event stat and choose it as a headline in
//  src/components/ImpactStats.astro.
//
//  NOTE: `events` and `schools` are NOT listed here — the home page derives
//  those automatically (events from each project's `eventsHeld` + standalone
//  past events; schools from partners whose role is `school`). Don't use them
//  as a stat `metric:`.
// ─────────────────────────────────────────────────────────────────

export const METRICS = {
  people: 'Residents reached',
  volunteers: 'Volunteers involved',
  trees: 'Trees planted',
  plants: 'Native plants planted',
  litter: 'Bags of litter collected',
  grant: 'Grant funding',
} as const;

export type MetricKey = keyof typeof METRICS;
export const METRIC_KEYS = Object.keys(METRICS) as MetricKey[];

export function isMetricKey(key: string): key is MetricKey {
  return Object.prototype.hasOwnProperty.call(METRICS, key);
}
