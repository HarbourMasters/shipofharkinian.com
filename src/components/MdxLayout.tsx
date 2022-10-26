import { MDXProvider } from '@mdx-js/react';
import { FC, PropsWithChildren } from 'react';
import { PageHeader } from '../components/PageHeader';
import { PageFooter } from '../components/PageFooter';

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
        <PageHeader pageName={title} pageClass={title} />

        <main className={title}>
          <section id="content">
            <h1 className="pageTitle">{title}</h1>
            <div className="container">
              <div className="column">
                <div className="textBackground">
                  <div className="textArea">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <PageFooter />
      </>
    </MDXProvider>
  );
};
