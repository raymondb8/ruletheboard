import type { IconType } from 'react-icons';
import {
  MdArrowForward,
  MdCheck,
  MdCheckCircle,
  MdChevronLeft,
  MdChevronRight,
  MdClose,
  MdDownload,
  MdEditDocument,
  MdFavorite,
  MdFlag,
  MdForum,
  MdGroups,
  MdHandshake,
  MdHelpCenter,
  MdHistoryEdu,
  MdInventory2,
  MdLocationOn,
  MdMail,
  MdMenuBook,
  MdOutlineCheckCircle,
  MdOutlineEvent,
  MdOutlineFavorite,
  MdOutlineFlag,
  MdOutlineForum,
  MdOutlineGroups,
  MdOutlineHandshake,
  MdOutlineHelpCenter,
  MdOutlineHistoryEdu,
  MdOutlineInventory2,
  MdOutlineLocationOn,
  MdOutlineMail,
  MdOutlineMenuBook,
  MdOutlinePayments,
  MdOutlinePerson,
  MdOutlinePictureAsPdf,
  MdOutlineSchedule,
  MdOutlineSchool,
  MdOutlineShield,
  MdOutlineSports,
  MdOutlineStars,
  MdOutlineSummarize,
  MdOutlineVerified,
  MdOutlineVisibility,
  MdOutlineVolunteerActivism,
  MdOutlineWorkspacePremium,
  MdPayments,
  MdPerson,
  MdPictureAsPdf,
  MdSchedule,
  MdSchool,
  MdShield,
  MdSports,
  MdStars,
  MdSummarize,
  MdVerified,
  MdVisibility,
  MdVolunteerActivism,
  MdWorkspacePremium,
  MdExpandMore,
  MdEvent,
} from 'react-icons/md';
import { FaChessKnight } from 'react-icons/fa6';

/**
 * Brand glyphs that aren't chess motifs. Kept here (not in ChessMotifs) so the
 * Instagram mark is a real silhouette rather than a stand-in Material icon.
 */
export function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.72 3.72 0 0 1-1.38-.9 3.72 3.72 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0 1.8c-3.14 0-3.51.01-4.75.07-.9.04-1.39.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.32-.28.81-.32 1.71-.06 1.24-.07 1.61-.07 4.75s.01 3.51.07 4.75c.04.9.19 1.39.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.32.13.81.28 1.71.32 1.24.06 1.61.07 4.75.07s3.51-.01 4.75-.07c.9-.04 1.39-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.32.28-.81.32-1.71.06-1.24.07-1.61.07-4.75s-.01-3.51-.07-4.75c-.04-.9-.19-1.39-.32-1.71a2.86 2.86 0 0 0-.69-1.06 2.86 2.86 0 0 0-1.06-.69c-.32-.13-.81-.28-1.71-.32-1.24-.06-1.61-.07-4.75-.07zm0 3.06a4.98 4.98 0 1 1 0 9.96 4.98 4.98 0 0 1 0-9.96zm0 1.8a3.18 3.18 0 1 0 0 6.36 3.18 3.18 0 0 0 0-6.36zm5.19-3.24a1.16 1.16 0 1 1 0 2.32 1.16 1.16 0 0 1 0-2.32z" />
    </svg>
  );
}

/*
 * UI icons, keyed by the Material Symbols name the design uses, so a card's
 * data can still say `icon: 'edit_document'` and read like the mockups.
 *
 * They used to be the Material Symbols icon *font*, loaded from Google Fonts
 * in the same render-blocking request as the text faces. That put a large
 * variable font on the critical path of every page for a couple dozen glyphs.
 * These are inline SVGs from react-icons (the Material Design set uses the
 * same names), which tree-shake to only the ones below and cost no request.
 *
 * `outlined` mirrors the FILL 0 default the font had; `filled` covers the few
 * places the design set FILL 1. Names without an outlined variant reuse the
 * filled one.
 */
const outlined: Record<string, IconType> = {
  arrow_forward: MdArrowForward,
  check: MdCheck,
  check_circle: MdOutlineCheckCircle,
  chess: FaChessKnight,
  chevron_left: MdChevronLeft,
  chevron_right: MdChevronRight,
  close: MdClose,
  download: MdDownload,
  edit_document: MdEditDocument,
  event: MdOutlineEvent,
  expand_more: MdExpandMore,
  favorite: MdOutlineFavorite,
  flag: MdOutlineFlag,
  forum: MdOutlineForum,
  groups: MdOutlineGroups,
  handshake: MdOutlineHandshake,
  help_center: MdOutlineHelpCenter,
  history_edu: MdOutlineHistoryEdu,
  inventory_2: MdOutlineInventory2,
  location_on: MdOutlineLocationOn,
  mail: MdOutlineMail,
  menu_book: MdOutlineMenuBook,
  payments: MdOutlinePayments,
  person: MdOutlinePerson,
  picture_as_pdf: MdOutlinePictureAsPdf,
  schedule: MdOutlineSchedule,
  school: MdOutlineSchool,
  shield: MdOutlineShield,
  sports: MdOutlineSports,
  stars: MdOutlineStars,
  summarize: MdOutlineSummarize,
  verified: MdOutlineVerified,
  visibility: MdOutlineVisibility,
  volunteer_activism: MdOutlineVolunteerActivism,
  workspace_premium: MdOutlineWorkspacePremium,
};

const filled: Record<string, IconType> = {
  check_circle: MdCheckCircle,
  event: MdEvent,
  favorite: MdFavorite,
  flag: MdFlag,
  forum: MdForum,
  groups: MdGroups,
  handshake: MdHandshake,
  help_center: MdHelpCenter,
  history_edu: MdHistoryEdu,
  inventory_2: MdInventory2,
  location_on: MdLocationOn,
  mail: MdMail,
  menu_book: MdMenuBook,
  payments: MdPayments,
  person: MdPerson,
  picture_as_pdf: MdPictureAsPdf,
  schedule: MdSchedule,
  school: MdSchool,
  shield: MdShield,
  sports: MdSports,
  stars: MdStars,
  summarize: MdSummarize,
  verified: MdVerified,
  visibility: MdVisibility,
  volunteer_activism: MdVolunteerActivism,
  workspace_premium: MdWorkspacePremium,
};

export type IconName = keyof typeof outlined;

// The icon font drew at 24px unless a text-size utility said otherwise; keep
// that default so nothing changes size in the swap.
const hasTextSize = (className: string) => /(^|\s)text-(\[|xs|sm|base|lg|[2-9]?xl)/.test(className);

interface IconProps {
  name: IconName | (string & {});
  className?: string;
  /** Use the solid glyph (the font's FILL 1). */
  filled?: boolean;
  /** Set when the icon carries meaning on its own; otherwise it's decorative. */
  title?: string;
}

export function Icon({ name, className = '', filled: solid = false, title }: IconProps) {
  const Glyph = (solid ? filled[name] : undefined) ?? outlined[name];
  if (!Glyph) {
    if (import.meta.env.DEV) console.error(`<Icon>: no icon registered for "${name}" (src/components/icons.tsx)`);
    return null;
  }
  const size = hasTextSize(className) ? '' : 'text-2xl';
  return (
    <Glyph
      className={['inline-block shrink-0', size, className].filter(Boolean).join(' ')}
      aria-hidden={title ? undefined : true}
      title={title}
      focusable="false"
    />
  );
}
