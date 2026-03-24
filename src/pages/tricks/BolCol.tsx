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
                    <p>The collision on Boulders is disabled when Link is far away, this can be taken advantage of to fire projectiles and Longshot through them in order to interact with objects behind them like Gold Skultullas, chests and Bomb Flowers.
                    </p>
                    <h3>List of relevant uses:
                    </h3>
                    <p>The DMT boulder Gold Skulltulas can both be grabbed with Longshot, or killed with Bow or Slingshot and grabbed with a different trick.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/BolColDMTLower.webm" type="video/webm"/>
                    </video>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/BolColDMTUpper.webm" type="video/webm"/>
                    </video>
                    <p>You can Longshot the chest in Gerudo Valley to skip needing to break the boulders.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/BolColGV.webm" type="video/webm"/>
                    </video>
                    <h3>List of uses that may become relevant on alternate builds or with future shuffles/tricks:
                    </h3>
                    <p>In Master Quest Dodongo&quot;s Cavern, you can hit the bomb flower under the boulder on the lower right side with a bow to blow up the boulder.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/BolColMQDC.webm" type="video/webm"/>
                    </video>
                    <p>In Master Quest Jabu Jabu&quot;s Belly, you can hit the cow in holes room with sling without breaking the boulders
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/BolColMQJabu.webm" type="video/webm"/>
                    </video>
                    <p>In Bottom of the Well, you can shoot the Bomb Flower in B3 with an arrow through the rocks to detonate it and blow up the boulders.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/BolColBotW.webm" type="video/webm"/>
                    </video>
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