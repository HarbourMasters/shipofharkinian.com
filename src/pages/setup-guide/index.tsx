import type { NextPage } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Setup Guide";

  return (
    <>

      <PageHeader pageName={pageName} />

      <main className={pageName}>
          <section id="content">
            <h1 className="pageTitle">{pageName}</h1>
            <div className="container">
              <div className="column">
                <div className="textBackground">
                  <div className="textArea">

                    <h2 id="how-to-use-this-guide">
                      <a href="#how-to-use-this-guide">How do I use this guide?</a>
                    </h2>
                    <p className={"guideNoteBold"}><ul>
                      <li>Under no circumstances are you to discuss or engage in Piracy, Illegal Actions, or Leaked Content.</li>
                      <li>The steps below are provided as a means to legally obtain a usable copy of Ocarina of Time that the Ship of Harkinian can utilize.</li>
                      <li>I repeat… NO PIRACY. You have been warned this one time and will be banned immediately for breaking this rule.</li>
                    </ul></p>
                    <p>Select your platform from the list below and follow the instructions on that page. Alternatively, you can also go directly to the update or ROM dumping guides.</p>
                    <p className={"subLinks"}>
                      <Link href="/setup-guide/windows">Windows Guide</Link>
                      <Link href="/setup-guide/linux">Linux Guide</Link>
                      <Link href="/setup-guide/macos">macOS Guide</Link>
                      <Link href="/setup-guide/switch">Nintendo Switch Guide</Link>
                      <Link href="/setup-guide/wiiu">Wii U Guide</Link>
                      <Link href="/setup-guide/update">Updating Ship of Harkinian</Link>
                      <Link href="/setup-guide/dump-guide">ROM Dumping Guide</Link>
                    </p>
                    
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

      <PageFooter />

    </>
  );
};

export const getServerSideProps = async({ locale }: { locale: string }) => ({
  props: {
  ...(await serverSideTranslations(locale, ['common']))
  }
});

export default Home;
