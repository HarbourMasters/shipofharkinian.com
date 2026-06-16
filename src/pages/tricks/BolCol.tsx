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
                      <a href="#explaination">Flawed Boulder Collision</a>
                    </h2>
                    <p>The collision on Boulders is flawed and allows for unintentional and unintuitive interactions, even without using glitches.
                    </p>
                    <p>When Link is far away from boulders they have no hitbox, allowing Longshot, Bow and Slingshot to hit things behind or inside them.
                    </p>
                    <p>Boulders also have no collision in their base, that allows Child (or Adult with Slingshot, which has a more convenient animation than Bow) to shoot things inside Boulders suspended above the floor.
                    </p>
                    <h3>List of relevant uses
                    </h3>
                    <p>The DMT boulder Gold Skulltulas can both be grabbed with Longshot from far away, or killed with Bow or Slingshot and then grabbed with a different trick.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/BolColDMTLower.webm" type="video/webm"/>
                    </video>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/BolColDMTUpper.webm" type="video/webm"/>
                    </video>
                    <p>You can Longshot the chest in Gerudo Valley from far away to skip needing to break the boulders.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/BolColGV.webm" type="video/webm"/>
                    </video>
                    <p>In Master Quest Jabu Jabu&apos;s Belly, you can hit the cow in holes room with sling without breaking the boulders by shooting it from far away, or by precisely shooting it from underneath.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/BolColMQJabu.webm" type="video/webm"/>
                    </video>
                    <p>In Master Quest Spirit Temple, the Eye Target behind the Boulder in the Foyer can be shot through the bottom of the boulder, however Adult needs to equip Slingshot to do this.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/BolColMQSpiritFoyer.webm" type="video/webm"/>
                    </video>
                    <p>In Master Quest Bottom of the Well, the Eye Target behind the Boulder that opens the cage with a pot in it can be shot from below without breaking the boulder. Adult cannot do this with Bow.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/BolColMQBotWPotCage.webm" type="video/webm"/>
                    </video>
                    <h3>List of uses that may become relevant on alternate builds or with future Tricks or Shuffles
                    </h3>
                    <p>In Master Quest Dodongo&apos;s Cavern, you can hit the bomb flower under the boulder on the lower right side with a Bow to blow up the boulder.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/BolColMQDC.webm" type="video/webm"/>
                    </video>
                    <p>In Bottom of the Well, you can shoot the Bomb Flower in B3 with an arrow through the rocks to detonate it and blow up the boulders.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/BolColBotWBombFlower.webm" type="video/webm"/>
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