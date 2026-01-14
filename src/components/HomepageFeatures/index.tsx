import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Records',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Link
        className="button button--secondary button--lg"
        to="/docs/records/">
        Explore
      </Link>
    ),
  },
  /**
  {
    title: 'Guides',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Link
        className="button button--primary button--lg"
        to="https://dorukaysor.github.io/errors/404">
        Explore
      </Link>
    ),
  },
  */
  {
    title: 'Github Repo',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Link
        className="button button--secondary button--lg"
        to="https://github.com/nazethan/labs/">
        Explore
      </Link>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--6')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
