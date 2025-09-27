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
}
