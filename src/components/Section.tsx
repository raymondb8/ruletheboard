import type { ReactNode } from 'react';
import styles from './Section.module.css';

interface SectionProps {
  id: string;
  title: string;
  intro?: string;
  className?: string;
  children?: ReactNode;
}

export default function Section({ id, title, intro, className, children }: SectionProps) {
  return (
    <section id={id} className={`${styles.section} ${className ?? ''}`}>
      <div className={styles.head}>
        <h2 className={styles.heading}>{title}</h2>
        {intro && <p className={styles.intro}>{intro}</p>}
      </div>
      {children}
    </section>
  );
}
