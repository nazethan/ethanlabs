  import React from 'react';
  // Importing the original mapper + our components according to the Docusaurus doc
  import MDXComponents from '@theme-original/MDXComponents';
  import Button from '@site/src/components/Button';
  import * as RB from '@site/src/components/rb';
  export default {
    // Reusing the default mapping
    ...MDXComponents,
    Button,
    ...RB,
  };