// Temporary module declaration to satisfy TypeScript when dependencies aren't installed.
// Remove this file after running `npm install` so the real types from @types/react-dom or
// the package itself are used.
declare module 'react-dom/client' {
  import type { ReactElement } from 'react';

  // Very small subset of the API used by this project.
  export interface Root {
    render(element: ReactElement): void;
    unmount(): void;
  }

  export function createRoot(container: Element | DocumentFragment): Root;
}

export {};
