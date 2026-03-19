import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';


const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Distant Boulder Collision";

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
                      <a href="#explaination">Distant Boulder Collision</a>
                    </h2>
                    <p>The collision on Boulders is disabled when link is far away, this can be used to fire projectiles and longshot through them in order to interact with things behind them like Gold Skultullas, chests and Bomb Flowers.
                    </p>
                    <h2>List of relevant uses:
                    </h2>
                    <p>Skipping the puzzle in the torch slug and doors room in Spirit Temple by running into the fire to open the chest
                    </p>
                    <p>The DMT boulder Gold Skulltulas can both be grabbed with longshot, or killed with Bow and grabbed with a different Trick.
                    </p>
                    <p>You can longshot the hammer rocks chest in Gerudo Valley to skip needing to break the boulders.
                    </p>
                    <h2>List of uses that may become relevant on alternate builds or with future shuffles/tricks:
                    </h2>
                    <p>In MQ Dodongo&quot;s Cavern, you can hit the bomb flower under the boulder on the lower right side with a bow to blow up the boulder.
                    </p>
                    <p>In MQ Jabu, you can hit the cow in holes room with sling without breaking the boulders
                    </p>
                    <p>In Bottom of the Well, you can shoot the Bomb Flower in B3 with an arrow through the rocks to detonate it and blow up the boulders.
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