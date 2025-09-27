declare module '@tanstack/react-query' {
  import * as React from 'react';

  export class QueryClient {
    constructor(opts?: any);
  }

  export const QueryClientProvider: React.FC<{ client: QueryClient; children?: React.ReactNode }>;
}
