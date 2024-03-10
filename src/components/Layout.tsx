import type { PropsWithChildren } from 'react';

interface LayoutProps extends PropsWithChildren {
  title: string;
}

export const Layout = ({ title, children }: LayoutProps) => {
  return (
    <section className="flex flex-col justify-center pt-20 gap-2 px-6 pb-4">
      <h1 className="text-2xl font-bold mb-2">{title}</h1>
      {children}
    </section>
  );
};
