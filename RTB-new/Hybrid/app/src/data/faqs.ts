/**
 * The tournament FAQ shown on the Programs page. Shared with
 * src/seo/schema.ts, which emits the same questions as FAQPage structured data
 * (the kind that can show as expandable Q&A under a search result), so the
 * schema can never say something the page doesn't.
 */
export interface Faq {
  q: string;
  a: string;
}

export const faqs: Faq[] = [
  {
    q: 'What should my child bring?',
    a: 'Students should bring a tournament-regulation chess set and clock if they own one, though many events provide them. A healthy snack, water bottle, and a pencil for notation (if required for their section) are also highly recommended.',
  },
  {
    q: 'How long do tournaments last?',
    a: 'Scholastic tournaments typically run about half a day, depending on the number of rounds and time control. We provide a detailed schedule on each event’s registration page.',
  },
  {
    q: 'Do I need a US Chess membership?',
    a: 'For "Rated" sections, a USCF membership is generally required. For "Beginner" or "Unrated" sections, no membership is needed. Membership requirements are noted on each event’s details page.',
  },
  {
    q: 'Can parents stay in the playing room?',
    a: 'To maintain focus and integrity, parents and coaches are usually asked to wait in a designated area once rounds begin. You’re always welcome to help your child set up their board before the round starts.',
  },
];
