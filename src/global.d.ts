// Global ambient types to help the TS language server before dependencies are installed.
declare module 'react-dom/client' {
  import type { ReactElement } from 'react';

  export interface Root {
    render(element: ReactElement): void;
    unmount(): void;
  }

  export function createRoot(container: Element | DocumentFragment): Root;
}

// Allow importing CSS with unknown at-rules in editors that don't have PostCSS active.
declare module '*.css';

export {};
// Project-wide module declarations
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';

// Allow the @ alias to resolve to src/* (already configured in tsconfig)
declare module '@/*';

// Minimal typings for lucide-react common named exports used in the project.
// This keeps TypeScript happy without adding the full package types.
declare module 'lucide-react' {
  import * as React from 'react';
  export const ArrowRight: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Users: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Building: React.FC<React.SVGProps<SVGSVGElement>>;
  export const GraduationCap: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Clock: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Shield: React.FC<React.SVGProps<SVGSVGElement>>;
  export const TrendingUp: React.FC<React.SVGProps<SVGSVGElement>>;
  export const MessageSquare: React.FC<React.SVGProps<SVGSVGElement>>;
  export const FileCheck: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Award: React.FC<React.SVGProps<SVGSVGElement>>;
  export const ChevronDown: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Scale: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Mail: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Phone: React.FC<React.SVGProps<SVGSVGElement>>;
  export const MapPin: React.FC<React.SVGProps<SVGSVGElement>>;
  export const ArrowLeft: React.FC<React.SVGProps<SVGSVGElement>>;
  export const ArrowRightCircle: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Check: React.FC<React.SVGProps<SVGSVGElement>>;
  export const ChevronRight: React.FC<React.SVGProps<SVGSVGElement>>;
  export const MoreHorizontal: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Dot: React.FC<React.SVGProps<SVGSVGElement>>;
  export const X: React.FC<React.SVGProps<SVGSVGElement>>;
  export const GripVertical: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Circle: React.FC<React.SVGProps<SVGSVGElement>>;
  export const CheckCircle: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Trophy: React.FC<React.SVGProps<SVGSVGElement>>;
  export const Handshake: React.FC<React.SVGProps<SVGSVGElement>>;
  export default {} as {
    [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
  };
}

// Provide a minimal module for react/jsx-runtime (used by the JSX transform)
declare module 'react/jsx-runtime' {
  export function jsx(type: any, props: any, key?: any): any;
  export function jsxs(type: any, props: any, key?: any): any;
  export function Fragment(props: any): any;
}

// Minimal declaration for react-router-dom Link usage
declare module 'react-router-dom' {
  import * as React from 'react';
  export const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & { to?: string }>;
  export const BrowserRouter: any;
  export const Routes: any;
  export const Route: any;
  export function useNavigate(): (to: string) => void;
}

declare module '@tanstack/react-query' {
  export const QueryClient: any;
  export const QueryClientProvider: any;
}

// Minimal shim for react when types are not installed (development convenience only)
declare module 'react' {
  const React: any;
  export = React;
}

// Provide shorthand hooks and router helpers as any to satisfy imports in this environment
declare function useState<T>(initial?: T): [T, (v: T) => void];

// Minimal shim for @radix-ui/react-slot
declare module '@radix-ui/react-slot' {
  import * as React from 'react';
  export const Slot: React.FC<any>;
}

// Minimal shims for class-variance-authority
declare module 'class-variance-authority' {
  export function cva(...args: any[]): any;
  export type VariantProps<T> = any;
}

// Ambient React namespace for minimal typing in development without full @types/react
declare namespace React {
  type ButtonHTMLAttributes<T> = any;
  type AnchorHTMLAttributes<T> = any;
  type HTMLAttributes<T> = any;
  type FC<P = {}> = (props: P & { children?: any }) => any;
  type SVGProps<T> = any;
  type RefAttributes<T> = any;
  type MutableRefObject<T> = { current: T | null };
  function forwardRef<T, P = {}>(render: (props: P, ref: any) => any): any;
}

// Minimal runtime React object (typed enough for forwardRef generic usage)
declare const React: {
  forwardRef: <T, P = {}>(render: (props: P, ref: any) => any) => any;
  createElement: any;
  Fragment: any;
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED?: any;
};
