import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    
    <html lang="en-US">
      <head>
        <meta charset="UTF-8" />
        <meta
          http-equiv="refresh"
          content="0; url=docs"
        />
        <script type="text/javascript">
          window.location.href = 'docs';
        </script>
        <title>Your Site Title Here</title>
      </head>
      <body>
        If you are not redirected automatically, follow this
        <a href="docs">link</a>.
      </body>
    </html>

  );
}
