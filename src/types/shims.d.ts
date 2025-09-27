// Lightweight shims for the language server while node_modules are not installed.
// These are temporary; remove after running `npm install` so real types are used.

declare module 'react' {
  const React: any;
  export = React;
}

declare module 'react/jsx-runtime' {
  export function jsx(type: any, props?: any, key?: any): any;
  export function jsxs(type: any, props?: any, key?: any): any;
  export function jsxDEV(type: any, props?: any, key?: any): any;
}

declare module 'react-router-dom' {
  export const Link: any;
  export const BrowserRouter: any;
  export const Routes: any;
  export const Route: any;
  export const useNavigate: any;
  export const useParams: any;
  const whatever: any;
  export default whatever;
}

declare module 'lucide-react' {
  export const ArrowRight: any;
  export const Users: any;
  export const Building: any;
  export const GraduationCap: any;
  export const CheckCircle: any;
  export const Trophy: any;
  export const Handshake: any;
  const _default: any;
  export default _default;
}

declare module '@tanstack/react-query' {
  export const QueryClient: any;
  export const QueryClientProvider: any;
  export const useQuery: any;
  export default any;
}

declare module '@radix-ui/*' {
  const whatever: any;
  export default whatever;
}

declare module 'tailwindcss' {
  const whatever: any;
  export default whatever;
}

declare module '*.png' {
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const src: string;
  export default src;
}
declare module '*.svg' {
  const src: string;
  export default src;
}
declare module '*.jpeg' {
  const src: string;
  export default src;
}

export {};
