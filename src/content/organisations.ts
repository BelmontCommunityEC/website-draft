// ─────────────────────────────────────────────────────────────────
//  ORGANISATIONS REGISTRY — single source of truth for every partner,
//  funder, patron, supporter and school BCEC works with.
//
//  WHY THIS EXISTS: projects, events and grants reference an organisation
//  by its short `id` (e.g. `city-of-belmont`) instead of retyping the name,
//  URL and logo each time. This makes typo-duplicates impossible ("City of
//  Belmont" vs "City of Belmont, WA" can never split into two cards) and lets
//  you fix a URL or logo in ONE place.
//
//  HOW TO ADD A NEW ORGANISATION:
//    1. Add an entry below with a new lowercase-dashed `id` key.
//    2. Fill in `name` (exactly how it should appear on the site) and, if you
//       have them, `url` and `logo` (a path under public/logos/, e.g.
//       "/logos/city-of-belmont.svg"). Drop the logo file into public/logos/.
//    3. Set `defaultRole` — the role used when a project/event doesn't specify
//       one. A project can still override it per-appearance (e.g. City of
//       Belmont is a `funder` by default but a `partner` on some events).
//
//  Reference an organisation from frontmatter like this:
//    partners:
//      - org: city-of-belmont        # uses the defaultRole
//      - org: cassie-rowe-mla
//        role: supporter             # optional per-appearance override
// ─────────────────────────────────────────────────────────────────

/** Roles, highest standing first — also the display order in the roll-up. */
export const ROLES = ['funder', 'partner', 'patron', 'supporter', 'school'] as const;
export type Role = (typeof ROLES)[number];

export interface OrganisationDef {
  /** Display name, exactly as it should appear on the site. */
  name: string;
  /** Optional external link. */
  url?: string;
  /** Optional logo image path under public/logos/, e.g. "/logos/city-of-belmont.svg". */
  logo?: string;
  /** Role used when a project/event doesn't override it. */
  defaultRole: Role;
}

export const ORGANISATIONS = {
  'city-of-belmont': {
    name: 'City of Belmont',
    url: 'https://www.belmont.wa.gov.au',
    logo: '/logos/city-of-belmont-logo.png',
    defaultRole: 'funder',
  },
  'keep-australia-beautiful-wa': {
    name: 'Keep Australia Beautiful WA',
    url: 'https://www.wa.gov.au/organisation/keep-australia-beautiful-wa',
    logo: '/logos/keep-australia-beautiful-wa-logo.png',
    defaultRole: 'funder',
  },
  'australian-government': {
    name: 'Australian Government',
    url: 'https://www.dss.gov.au/grants/grants-for-volunteering',
    defaultRole: 'funder',
  },
  'cassie-rowe-mla': {
    name: 'Cassie Rowe MLA',
    defaultRole: 'patron',
  },
  'carnabys-crusaders': {
    name: "Carnaby's Crusaders",
    url: 'https://www.carnabyscrusaders.com.au',
    defaultRole: 'partner',
  },
  'optus-stadium': {
    name: 'Optus Stadium',
    url: 'https://optusstadium.com.au',
    defaultRole: 'partner',
  },
  'ruth-faulkner-library': {
    name: 'Ruth Faulkner Library',
    defaultRole: 'partner',
  },
  'millennium-kids': {
    name: 'Millennium Kids',
    defaultRole: 'partner',
  },
  'bunnings-belmont': {
    name: 'Bunnings Belmont',
    defaultRole: 'supporter',
  },
  'belmont-city-college': {
    name: 'Belmont City College',
    url: 'https://www.belmontcc.wa.edu.au',
    defaultRole: 'school',
  },
  'kewdale-primary-school': {
    name: 'Kewdale Primary School',
    url: 'https://kewdaleps.wa.edu.au',
    defaultRole: 'school',
  },
  'carlisle-primary-school': {
    name: 'Carlisle Primary School',
    defaultRole: 'school',
  },
  'notre-dame-catholic-primary-school': {
    name: 'Notre Dame Catholic Primary School',
    defaultRole: 'school',
  },
  'st-augustines-primary-rivervale': {
    name: "St Augustine's Primary School, Rivervale",
    defaultRole: 'school',
  },
} satisfies Record<string, OrganisationDef>;

export type OrganisationId = keyof typeof ORGANISATIONS;
export const ORGANISATION_IDS = Object.keys(ORGANISATIONS) as OrganisationId[];

/** A reference to an organisation from project/event/grant frontmatter. */
export interface PartnerRef {
  org: string;
  role?: Role;
}

/** An organisation resolved for display. */
export interface ResolvedPartner {
  id: string;
  name: string;
  url?: string;
  logo?: string;
  role: Role;
}

export function isOrganisationId(id: string): id is OrganisationId {
  return Object.prototype.hasOwnProperty.call(ORGANISATIONS, id);
}

/** Resolve a single `{ org, role? }` reference into full display details. */
export function resolvePartner(ref: PartnerRef): ResolvedPartner {
  const org: OrganisationDef | undefined = ORGANISATIONS[ref.org as OrganisationId];
  if (!org) {
    throw new Error(
      `Unknown organisation id "${ref.org}". Add it to src/content/organisations.ts.`,
    );
  }
  return {
    id: ref.org,
    name: org.name,
    url: org.url,
    logo: org.logo,
    role: ref.role ?? org.defaultRole,
  };
}

/** Resolve an array of references (safe with undefined). */
export function resolvePartners(refs?: PartnerRef[]): ResolvedPartner[] {
  return (refs ?? []).map(resolvePartner);
}

/** The name of the first funder among a set of references, if any. */
export function primaryFunderName(refs?: PartnerRef[]): string | undefined {
  return resolvePartners(refs).find((p) => p.role === 'funder')?.name;
}
