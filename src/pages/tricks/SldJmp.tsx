import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';


const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Slide Jumps";

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
                    <h2 id="explaination">
                      <a href="#explaination">Slide Jumps</a>
                    </h2>
                    <p>By building up sideways momentum on icy floors with sidehops, then holding forwards as the momentum carries you off a ledge, you can get a jump in a direction that isn&quot;t normally possible.
                    </p>
                    <h2>List of relevant uses:
                    </h2>
                    <p>Adult can reach the alcoves in ice Cavern Push Block room without pushing the Frozen Block.
                    </p>
                    <h2>List of uses that may become relevant on alternate builds or with future shuffles/tricks:
                    </h2>
                    <p>Child can use a Slide Jump to reach the ledge in the Block Room of Water Trial leading to the final room.
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