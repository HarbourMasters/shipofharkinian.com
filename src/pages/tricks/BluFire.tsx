import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';


const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Blue Fire Beyond Red Ice";

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
                      <a href="#explaination">Blue Fire Beyond Red Ice</a>
                    </h2>
                    <p>Blue Fire (and Blue Fire Arrows by consequence) does more than melt Red Ice. It can also be used to Break Mud Walls, detonate Bomb flowers and break the floor to king Dodongo. It specifically does not include 
                    </p>
                    <p>It is reccomended to enable the &quot;Rebottle Blue Fire&quot; enhancment when enabling this trick to reduce backtracking
                    </p>
                    <p>Note that for Stopping Link the Goron you also need to have &quot;Stop Link the Goron with Din&apos;s Fire&quot; enabled due to the slowness of the blue fire animation.
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