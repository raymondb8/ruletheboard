import styles from './PillarGrid.module.css';

interface Pillar {
  mark: string;
  title: string;
  body: string;
}

interface PillarGridProps {
  pillars: Pillar[];
}

export default function PillarGrid({ pillars }: PillarGridProps) {
  return (
    <div className={styles.pillars}>
      {pillars.map((p) => (
        <div className={styles.pillarCard} key={p.mark}>
          <div className={styles.pillarMark}>{p.mark}</div>
          <div className={styles.pillarTitle}>{p.title}</div>
          <div className={styles.pillarBody}>{p.body}</div>
        </div>
      ))}
    </div>
  );
}
