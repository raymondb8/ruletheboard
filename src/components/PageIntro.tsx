import styles from './PageIntro.module.css';

interface PageIntroProps {
  eyebrow: string;
  title: string;
  intro?: string;
}

export default function PageIntro({ eyebrow, title, intro }: PageIntroProps) {
  return (
    <section className={styles.banner}>
      <div className={styles.eyebrow}>{eyebrow}</div>
      <h1 className={styles.title}>{title}</h1>
      {intro && <p className={styles.intro}>{intro}</p>}
    </section>
  );
}
