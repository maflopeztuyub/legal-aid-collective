declare module 'react-router-dom' {
  import * as React from 'react';

  export interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
    to: string | { pathname: string };
    replace?: boolean;
  }

  export const Link: React.FC<LinkProps>;

  // Minimal exports to satisfy imports across the codebase. Add more as needed.
}
