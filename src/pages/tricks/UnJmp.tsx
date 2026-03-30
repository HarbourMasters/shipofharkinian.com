import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';

import KF from './images/UnJmpKF.jpg';
import KakRoofAdult from './images/UnJmpKakRoofAdult.jpg';
import GFVinesToVines from './images/UnJmpGFVinesToVines.jpg';
import GFVinesToSlope from './images/UnJmpGFVinesToSlope.jpg';
import GFSlopeToVines from './images/UnJmpGFSlopeToVine.jpg';
import FireBoss from './images/UnJmpFireBoss.jpg';
import ShadowBoat from './images/UnJmpShadowBoat.jpg';
import ShadowScarecrow from './images/UnJmpShadowScarecrow.jpg';
import GFSkull from './images/UnJmpGFSkull.jpg';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Unintuitive Jumps";

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
                      <a href="#explaination">Unintuitive Jumps</a>
                    </h2>
                    <p>Due to the autojump system and the generous ledge grab range, it is often possible to make jumps that on the surface seem impossible.
                       There are also several cases where the unusual physics of backflips or sidehops clear gaps or climb things that otherwise would not be possible.
                       This trick enables all such cases where the trick is trivial to execute if known about and does not have a large reset time if failed,
                       combining several individual tricks from other OCarina of Time randomisers.
                    </p>
                    <h3>List of relevant Unintuitive Jumps
                    </h3>
                    <p>Kokiri Forest, jumping onto Mido&apos;s House to skip climb as Adult.
                    </p>
                    <Image src={KF} alt="Mido's House Jump" />
                    <p>Kakriko Village, jumping to the Man on Roof either by jumping onto Potion Shop from the front as Adult, or sidehopping off the tower as either age.
                    </p>
                    <Image src={KakRoofAdult} alt="Kakariko Jump to Roof" />
                    <video controls width="853" height="480">
                      <source src="./../trickvids/UnJmpKakRoofSidehop.webm" type="video/webm"/>
                    </video>
                    <p>Kakriko Windmill, using the short wall to jump onto the grinder, and from there reaching the heart piece.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/UnJmpWindmill.webm" type="video/webm"/>
                    </video>
                    <p>Gerudo Fortress, jumping from the top of the lower set of vines and ladding at the base of the upper vines.
                    </p>
                    <Image src={GFVinesToVines} alt="Lower to Upper Vines Jump" />
                    <p>Gerudo Fortress, jumping from the base of the upper vines to the sloped roof without having to climb them.
                    </p>
                    <Image src={GFVinesToSlope} alt="Vines to Sloped Roof Jump" />
                    <p>Gerudo Fortress, jumping from the sloped roof to the top of the upper vines as Adult in order to skip climbing them.
                    </p>
                    <Image src={GFSlopeToVines} alt="Slope to Vines Jump" />
                    <p>Dodongo&apos;s Cavern, backflipping onto the armos in order to reach the raised switch as Child without climb.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/UnJmpDCSwitch.webm" type="video/webm"/>
                    </video>
                    <p>Dodongo&apos;s Cavern, jumping from the top of the ladder to one of the pillars in spike trap room as Adult, and from there to the chest. Note that in Master Quest using the blocks to start the jump instead is not a trick but requires Grab.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/UnJmpDCSpikes.webm" type="video/webm"/>
                    </video>
                    <p>Dodongo&apos;s Cavern, pulling one of the graves in the back of Master Quest and using that to roll jump onto the ledge where the Gold Skulltula is. This combined with the pots nearby can be used to get that GS Check without a weapon.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/UnJmpMQDCBack.webm" type="video/webm"/>
                    </video>
                    <p>Jabu Jabu&apos;s Belly, jumping from the lift as Adult in order to dive deeper and skip Silver Scale, as Adult&apos;s larger hitbox prevents them form simply diving under.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/UnJmpJabuLift.webm" type="video/webm"/>
                    </video>
                    <p>Fire Temple, jumping to the boss door by jumping against the wall.
                    </p>
                    <Image src={FireBoss} alt="Fire Boss Door Jump" />
                    <p>Water Temple, jumping into the canal from the nearby door and swimming into the channel, skipping Iron Boots.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/UnJmpWaterCanal.webm" type="video/webm"/>
                    </video>
                    <p>Shadow Temple, jumping onto the Ship&apos;s Wheel to skip the block and ladder.
                    </p>
                    <Image src={ShadowBoat} alt="Shadow Boat Wheel Jump" />
                    <p>Shadow Temple, jumping from the Chasm Scarecrow to the top of the broken pillar with a Jumpslash.
                    </p>
                    <Image src={ShadowScarecrow} alt="Shadow Scarecrow Jump" />
                    <p>Forest Trial, cutting the corner to get a jump that allows Child to reach the end of Beamos room.
                    </p>
                    <h3>List of Unintuitive Jumps that may become relevant on alternate builds or with future Tricks or Shuffles
                    </h3>
                    <p>Gerudo Fortress, jumping from the long East to West roof to the Gold Skulltula as Adult.
                    </p>
                    <Image src={GFSkull} alt="Gerudo Fortress Long Roof to Skull Jump" />
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