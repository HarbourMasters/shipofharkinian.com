import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';

import SFMOuter from './images/GrdJmpSFMOuter.jpg';
import SFMInner from './images/GrdJmpSFMInner.jpg';
import Dampe from './images/GrdJmpDampe.jpg';
import Windmill from './images/GrdJmpWindmill.jpg';
import GFTower from './images/GrdJmpGFTower.jpg';
import GFLowerVine from './images/GrdJmpGFLowerVine.jpg';
import DekuB1 from './images/GrdJmpDekuB1.jpg';
import DCLobby from './images/GrdJmpDCLobby.jpg';
import DCSpikes from './images/GrdJmpDCSpikes.jpg';
import DCLoop1 from './images/GrdJmpDCLoop1.jpg';
import DCLoop2 from './images/GrdJmpDCLoop2.jpg';
import ForestBlock from './images/GrdJmpForestBlock.jpg';
import FlareDancer from './images/GrdJmpFlareDancer.jpg';
import BigLava from './images/GrdJmpBigLava.jpg';
import FireShortcut from './images/GrdJmpFireShortcut.jpg';
import FireMazePillar from './images/GrdJmpFireMazePillar.jpg';
import ForestTrial from './images/GrdJmpForestTrial.jpg';
import WaterTrial from './images/GrdJmpWaterTrial.jpg';
import LightTrial from './images/GrdJmpLightTrial.jpg';
import IceBlock1 from './images/GrdJmpIceBlock1.jpg';
import IceBlock2 from './images/GrdJmpIceBlock2.jpg';
import IceBlock3 from './images/GrdJmpIceBlock3.jpg';
import GTG from './images/GrdJmpGTG.jpg';
import GFChild from './images/GrdJmpGFChild.jpg';
import JabuJiggly from './images/GrdJmpJabuJiggly.jpg';
import FireTempleMQSkull from './images/GrdJmpFireTempleMQSkull.jpg';
import WaterCage from './images/GrdJmpWaterCage.jpg';
import ShadowScythe from './images/GrdJmpShadowScythe.jpg';
import SpiritBoulder from './images/GrdJmpSpiritBoulder.jpg';
import BotW1 from './images/GrdJmpBotW1.jpg';
import BotW2 from './images/GrdJmpBotW2.jpg';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Ground Jump";

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
                      <a href="#explaination">Ground Jump</a>
                    </h2>
                    <p>By performing an animation while shielding, and grabbing a bomb during said animation, Link will get stuck in a state where he is shielding and cannot move. When the bomb detonates, this stores a jump, which can be performed by backflipping or sidehopping.
                    </p>
                    <p>This jump can be used to grab ledges too high to simply climb where there is not normally a ledge to jump from. Logic assumes using the animation for Link standing up from a crouch by pressing Z to perform the trick, as it requires no additional items.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/GrdJmpDemo.webm" type="video/webm"/>
                    </video>
                    <h3>List of relevant uses:
                    </h3>
                    <p>Adult can Ground Jump to reach the raised area of Sacred Forest Meadow without Climbing or the Scarecrow.
                    </p>
                    <Image src={SFMOuter} alt="Sacred Forest Meadow Ground Jump" />
                    <Image src={SFMInner} alt="Sacred Forest Meadow Ground Jump" />
                    <p>You can get the heart piece in the windmill by Ground Jumping onto the grinder as Adult.
                    </p>
                    <Image src={Windmill} alt="Windmill Ground Jump" />
                    <p>Child needs a Ground Jump to get from the end of Dampe Race into the Windmill.
                    </p>
                    <Image src={Dampe} alt="Dampe Race Finish Ground Jump" />
                    <p>Adult can Ground Jump from Fortress Tower to skip opening the gate, which needs the Gerudo Jabber Nut.
                    </p>
                    <Image src={GFTower} alt="Gerudo Fortress Tower Ground Jump" />
                    <p>Adult can Ground Jump from the bottom of the lower vines in Gerudo Fortress to the entrance to the Dead End Jail Cell.
                    </p>
                    <Image src={GFLowerVine} alt="Gerudo Fortress Lower Vines Ground Jump" />
                    <p>Child can Ground Jump to reach the ledge in B1 of Deku Tree without finishing the loop or performing B1 skip.
                    </p>
                    <Image src={DekuB1} alt="Deku Tree B1 Ground Jump" />
                    <p>Child needs a Ground Jump to reach the ledge in the first room of Dodongo&apos;s Cavern leading to the lower left loop. 
                      Bomb flowers are available but on Master Quest it is a Hard Ground Jump to use them due to needing to cross the platforms and quickly set up the jump.
                    </p>
                    <Image src={DCLobby} alt="Dodongo's Cavern Lobby Ground Jump" />
                    <p>Adult can Ground Jump from the lower part of the Spike Trap room in Dodongo&apos;s Cavern to where the upper loop exits.
                    </p>
                    <Image src={DCSpikes} alt="Dodongo's Cavern Spike Room Ground Jump" />
                    <p>Adult can Ground Jump to skip the first room of the upper loop to reach the Upper Lizalfos fight, and from the room after the fight to skip that.
                    </p>
                    <Image src={DCLoop1} alt="Dodongo's Cavern Loop Ground Jump" />
                    <Image src={DCLoop2} alt="Dodongo's Cavern Loop Ground Jump" />
                    <p>Ground Jumps let Adult skip Climb at the start of Forest Temple Block Room, and can be used to jump onto the blocks to skip to platform higher without needing the ladder.
                    </p>
                    <Image src={ForestBlock} alt="Forest Temple Block Room Ground Jump" />
                    <p>In MQ Forest, you can use Ground Jumps to reach even higher without climb by pushing a block and jumping on it. This allows for the use of other tricks or jumpslashing into the switch to then use hover boots to reach the ledge.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/GrdJmpMQForestClimb.webm" type="video/webm"/>
                    </video>
                    <p>Child needs a Ground Jump to reach the chest spawned by defeating Flare Dancer on the lower loop of Fire Temple.
                    </p>
                    <Image src={FlareDancer} alt="Fire Temple Lower Flare Dancer Ground Jump" />
                    <p>Child also needs a Ground Jump to reach the Blocked door in Fire Temple&apos;s Big Lava Room.
                    </p>
                    <Image src={BigLava} alt="Fire Temple Big Lava Room Ground Jump" />
                    <p>Adult can use a Ground Jump to skip Goron Bracelet in the Shortcut Room of Fire Temple
                    </p>
                    <Image src={FireShortcut} alt="Fire Temple Shortcut Room Ground Jump" />
                    <p>Adult can Ground Jump onto the pillars in Fire Temples Fire Maze as long as they do not connect to fire walls. This allows you to reach the rusted switch using a nearby pillar.
                    </p>
                    <Image src={FireMazePillar} alt="Fire Temple Fire Maze pillar Ground Jump" />
                    <p>If unintuitive Jumps is off, a Ground jump can let Child beat Forest Trial instead.
                    </p>
                    <Image src={ForestTrial} alt="Forest Trial Ground Jump" />
                    <p>likewise, a Ground Jump is an alternative to a Slide Jump to get Child onto the ledge in Water Trial Block Room.
                    </p>
                    <Image src={WaterTrial} alt="Water Trial Ground Jump" />
                    <p>Adult can Ground Jump to skip Hookshot in the Boulder Room of Light trial.
                    </p>
                    <Image src={LightTrial} alt="Light Trial Ground Jump" />
                    <p>In Ice Cavern block room, Adult can use Ground Jumps to skip needing to jump off the push-block to reach the alcoves and exit to the final room
                    </p>
                    <Image src={IceBlock1} alt="Ice Block Ground Jump" />
                    <Image src={IceBlock2} alt="Ice Block Ground Jump" />
                    <Image src={IceBlock3} alt="Ice Block Ground Jump" />
                    <p>Adult can Ground Jump into the hidden side alcove in Silver Block Room of Gerudo Training Grounds.
                    </p>
                    <Image src={GTG} alt="Gerudo Training Ground Ground Jump" />
                    <h3>List of uses that may become relevant on alternate builds or with future shuffles/tricks.
                    </h3>
                    <p>Child can Ground Jump from the upper kitchen exit onto the sloped roof.
                    </p>
                    <Image src={GFChild} alt="GF Child Ground Jump" />
                    <p>On the Top Floor of Jabu Jabu&apos;s Belly, Adult can skip Boomerang in Jiggly Room using a Ground Jump
                    </p>
                    <Image src={JabuJiggly} alt="Jabu Jabu's Belly Jiggly Ground Jump" />
                    <p>Child needs a Ground Jump to reach the Gold Skulltula behind the wall in the room in the Fire Maze of Master Quest Fire Temple
                    </p>
                    <Image src={FireTempleMQSkull} alt="Fire Temple MQ Skull Ground Jump" />
                    <p>Child needs a Ground Jump to climb the step towards Triangle Torch Cage in Master Quest Water Temple.
                    </p>
                    <Image src={WaterCage} alt="Water Temple Cage Stairs Ground Jump" />
                    <p>Adult can Ground Jump to skip needing Hookshot and Hovers to reach the high platform in the B2 spinning blade room of Shadow Temple.
                    </p>
                    <Image src={ShadowScythe} alt="Shadow Scythes Ground Jump" />
                    <p>Child needs a Ground Jump or Climb to do the Boulders/Symphony room in adult side Spirit Temple backwards.
                    </p>
                    <Image src={SpiritBoulder} alt="Spirit Boulder Room Ground Jump" /> can skip climbs with Ground Jump when entering and leaving the Dead hand area in Bottom of the Well.
                    <p>Adult can skip climbs with Ground Jump when entering and leaving the Dead hand area in Bottom of the Well.
                    </p>
                    <Image src={BotW1} alt="Bottom of the Well Dead Hand Ground Jump" /> 
                    <Image src={BotW2} alt="Bottom of the Well Dead Hand Ground Jump" /> 
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