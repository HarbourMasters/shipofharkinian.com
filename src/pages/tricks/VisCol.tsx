import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';


import KakGate from './images/VisColKakGate.jpg';
import ShadowSpinner from './images/VisColShadowSpinner.jpg';
import ShadowUmbrella from './images/VisColShadowUmbrella.jpg';

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
                    <h3>List of currently relevant uses of this trick
                    </h3>
                    <p>Walking through the Kakariko gate from the exit into the village.
                    </p>
                    <Image src={KakGate} alt="Kakariko Gate from Behind" />
                    <p>Ledge Climbing into the back of Impa&apos;s House as Adult from the chicken coop.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColKakCow.webm" type="video/webm"/>
                    </video>
                    <p>Getting the Gold Skulltula on 2F of Master Quest Deku tree without breaking the crate.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColMQDekuCrateSkull.webm" type="video/webm"/>
                    </video>
                    <p>Dodongo&apos;s Cavern Master Quest, opening the chest in the back Poe room without pulling the grave.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColMQDCGrave.webm" type="video/webm"/>
                    </video>
                    <p>Hitting the rusted switch that opens the cage holding Highest Goron in Fire Temple without moving the Song of Time Block.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColHighestGoron.webm" type="video/webm"/>
                    </video>
                    <p>Hitting the rusted switch that raises the hookshot targets in Master Quest Fire Temple Lizalfos Maze without blowing up the wall.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColMQFireMaze.webm" type="video/webm"/>
                    </video>
                    <p>Killing the Gold Skultulla under the Burning Block at the top of Master Quest Fire Temple without pushing the block and using Hookshot to get the token.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColBurningBlock.webm" type="video/webm"/>
                    </video>
                    <p>Getting the Gold Skulltula in the Hidden Switch room of Master Quest Water Temple without being able to break crates.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColMQWaterCrateSkull.webm" type="video/webm"/>
                    </video>
                    <p>Getting the Gold Skulltula in the back of Crate Vortex Room of Master Quest Water Temple without being able to break crates.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColMQWaterCrateVortexSkull.webm" type="video/webm"/>
                    </video>
                    <p>If Fire Rings is enabled, you can use the Fire Rings trick combined with a Jumpslash to get the freestanding items in Child spirit without hitting the Eye Target. 
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/FlaChstMQSpirit1F.webm" type="video/webm"/>
                    </video>
                    <p>Destroying the boulder in the crawlspace that stops Child from climbing into Sun on Floor Room in Master Quest Spirit Temple as Adult. 
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColMQSpiritBoulder.webm" type="video/webm"/>
                    </video>
                    <p>Hitting the rusted switch in Master Quest Spirit Trial without hitting the Eye Target to drop the Iron Knuckle.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColSpiritTrial.webm" type="video/webm"/>
                    </video>
                    <p>Breaking the pots frozen in Red Ice in Ice Cavern Map Room by spamming Jumpslash.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColIcePot.webm" type="video/webm"/>
                    </video>
                    <p>Killing the Gold Skulltula in Master Quest Bottom of the Well West inner Room without pulling the Grave.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColMQBotWGraveSkull.webm" type="video/webm"/>
                    </video>
                    <h3>List of uses recorded and added to logic, but not believed to be currently relevant
                    </h3>
                    <p>Getting the Gold Skulltula in Master Quest Dodongo&apos;s Cavern Gohma Larvae room without breaking the crate.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColMQDCCrateSkull.webm" type="video/webm"/>
                    </video>
                    <p>Opening the box cage in Master Quest Fire Temple&apos;s Lizalfos Maze&apos;s with Boomerang, Slingshot or Bow.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColMQFireSwitch.webm" type="video/webm"/>
                    </video>
                    <p>Opening the chests in Master Quest Fire Temple&apos;s Lizalfos Maze&apos;s Side Rooms without breaking the crates.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColMQFireLowerMazeChest.webm" type="video/webm"/>
                    </video>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColMQFireUpperMazeChest.webm" type="video/webm"/>
                    </video>
                    <p>Walking through the gate lowered by the Truth Spinner in Shadow Temple backwards. 
                    </p>
                    <Image src={ShadowSpinner} alt="Shadow Temple Spinner Gate" />
                    <p>Walking through the gate to Stone Umbrella room in Shadow Temple backwards. 
                    </p>
                    <Image src={ShadowUmbrella} alt="Shadow Temple Stone Umbrella Gate" />
                    <p>Killing the Skulltula under Rubble in B4 Gibdo room of Master Quest Shadow Temple without Explosives.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColMQShadowRubbleSkullHook.webm" type="video/webm"/>
                    </video>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColMQShadowRubbleSkullBow.webm" type="video/webm"/>
                    </video>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColMQShadowRubbleSkullChild.webm" type="video/webm"/>
                    </video>
                    <p>Hitting the rusted switch in Water Trial without using Blue Fire to melt the ice.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/VisColWaterTrial.webm" type="video/webm"/>
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