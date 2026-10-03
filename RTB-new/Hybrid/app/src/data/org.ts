/**
 * The organization's own contact details and public identifiers, in one place
 * because they appear in at least three: the footer, the Get Involved page,
 * and the structured data in src/seo/schema.ts. A change to the email or a new
 * social account should be a one-line edit here, not a grep.
 */

export const CONTACT_EMAIL = 'RuleTheBoardInc@gmail.com';

/** Federal EIN, supplied by the board. Shown in the footer and as schema.org taxID. */
export const EIN = '42-4153412';

export const INSTAGRAM_URL = 'https://www.instagram.com/ruletheboardinc';
export const INSTAGRAM_HANDLE = '@ruletheboardinc';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/rule-the-board/';

/** Odyssey Atlanta hosts Checkmate Your Summer; linked from both program cards. */
export const ODYSSEY_URL = 'https://www.odysseyatlanta.com';

/** Every profile we want crawlers to tie back to the Organization node. */
export const SOCIAL_PROFILES = [INSTAGRAM_URL, LINKEDIN_URL];
