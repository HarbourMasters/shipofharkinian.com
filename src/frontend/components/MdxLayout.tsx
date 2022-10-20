import Head from 'next/head';
import { MDXProvider } from '@mdx-js/react';
import { FC, PropsWithChildren } from 'react';
import { Navbar } from './Navbar';

interface MdxLayoutProps extends PropsWithChildren {
  title?: string;
}

function copyToClip() {
  navigator.clipboard.writeText(window.location.toString());
}

const MdxH3: FC<{ children: string }> = ({ children }) => (
  <h3 id={encodeURIComponent(children.replace(/\W/g, '-').toLowerCase())}>
    <a href={`#${encodeURIComponent(children.replace(/\W/g, '-').toLowerCase())}`} onClick={() => copyToClip()}>
      {children}
    </a>
  </h3>
);

export const MdxLayout: FC<MdxLayoutProps> = ({ children, title = 'Ship of Harkinian' }) => {
  return (
    // @ts-ignore
    <MDXProvider components={{ h3: MdxH3 }}>
      <>
        <Head>
          <title>{title}</title>
        </Head>
        <Navbar />
        <main className="prose prose-zinc max-w-screen-md mx-auto px-2 mt-6 prose-a:text-red-600 hover:prose-a:text-red-500 prose-a:no-underline">
          {children}
        </main>
      </>
    </MDXProvider>
  );
};
