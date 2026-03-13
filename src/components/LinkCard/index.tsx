import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

type LinkCardProps = {
  title: string;
  description?: string;
  href: string;
};

type CardGridProps = {
  children: ReactNode;
};

export function CardGrid({children}: CardGridProps): ReactNode {
  return <div className={styles.grid}>{children}</div>;
}

export function LinkCard({title, description, href}: LinkCardProps): ReactNode {
  return (
    <Link className={styles.card} to={href}>
      <h3 className={styles.title}>{title}</h3>
      {description ? <p className={styles.description}>{description}</p> : null}
    </Link>
  );
}
