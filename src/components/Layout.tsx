import type { ReactNode } from 'react';
import { MetroNav } from './MetroNav';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <>
      <MetroNav />
      <main>{children}</main>
    </>
  );
}
