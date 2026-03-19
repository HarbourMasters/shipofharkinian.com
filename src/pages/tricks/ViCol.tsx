import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';


const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Visible Collision";

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
                      <a href="#explaination1">Visible Collision</a>
                    </h2>
                    <p>Visible Collision is a trick that adds things to logic that are easily possible, but the game&apos;s graphics imply that it shouldn&apos;t be possible.
                    </p>
                    <p>This includes walking through 1 way gates, hammering into blocks, ice and walls to hit switches, or opening chests through graves, among other things.
                    </p>
                    <p>If Fire Rings.
                    </p>
                    <h2>List of currently relevant uses of this trick:
                    </h2>
                    <p>Ledge Climbing into the back of Impa&apos;s House as Adult from the chicken coop.
                    </p>
                    <p>Dodongo&apos;s Cavern MQ opening the chest in the back Poe room without pulling the grave.
                    </p>
                    <p>Hitting the rusted switch that opens the cage holding Highest Goron in Fire Temple without moving the Song of Time Block.
                    </p>
                    <p>Hitting the rusted switch that raises the hookshot targets in MQ Fire Temple Lizalfos Maze without blowing up the wall.
                    </p>
                    <p>Killing the Gold Skultulla under the Burning Block at the top of MQ Fire Temple without pushing the block and using Hookshot to get the token.
                    </p>
                    <p>Getting the Gold Skulltula in the Hidden Switch room of MQ water without being able to break crates.
                    </p>
                    <p>If Fire Rings is enabled, you can use the Fire Rings trick combined with a jumpslash to get the freestanding items in child spirit without hitting the eye target. 
                    </p>
                    <p>Destroying the boulder in the crawlspace that stops Child from climbing into Sun on Floor Room as Adult. 
                    </p>
                    <p>Hitting the rusted switch in MQ Spirit Trial without hitting the eye target to drop the Iron Knuckle.
                    </p>
                    <p>Breaking pots frozen in Red ice in Ice Cavern without melting the ice or using explosives.
                    </p>
                    <p>Killing the Gold Skulltula in MQ Bottom of the Well West inner Room without pulling the Grave.
                    </p>
                    <h2>List of uses recorded and added to logic, but not believed to be currently relevant:
                    </h2>
                    <p>Walking through the gate lowered by the Truth Spinner in Shadow Temple backwards. 
                    </p>
                    <p>Walking through the gate to Stone Umbrella room in MQ Shadow Temple backwards. 
                    </p>
                    <p>Hitting the rusted switch in Water Trial without using Blue Fire to melt the ice.
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