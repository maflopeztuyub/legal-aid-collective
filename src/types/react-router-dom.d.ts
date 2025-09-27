declare module 'react-router-dom' {
	import * as React from 'react';
	export const Link: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement> & { to?: string }>;
	export const BrowserRouter: any;
	export const Routes: any;
	export const Route: any;
	export function useNavigate(): (to: string) => void;
}

