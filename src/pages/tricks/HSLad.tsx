import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';
import Image from 'next/image';

import HF1 from './images/HSLadHF1.jpg';
import HF2 from './images/HSLadHF2.jpg';
import DMC from './images/HSLadDMC.jpg';
import LW from './images/HSLadLW.jpg';
import SFM1 from './images/HSLadSFM1.jpg';
import SFM2 from './images/HSLadSFM2.jpg';
import ZR from './images/HSLadZR.jpg';
import DCPlatform from './images/HSLadDCPlatform.jpg';
import Shadow from './images/HSLadShadow.jpg';
import ZD from './images/HSLadZD.jpg';
import DCSpikes1 from './images/HSLadDCSpikes1.jpg';
import DCSpikes2 from './images/HSLadDCSpikes2.jpg';
import BotWEntrance from './images/HSLadBotWEntrance.jpg';
import BotWB31 from './images/HSLadBotWB31.jpg';
import BotWB32 from './images/HSLadBotWB32.jpg';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Hookshot Ladders";

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
                      <a href="#explaination">Hookshot Ladders</a>
                    </h2>
                    <p>You can skip climb for hookshottable ladders can be skipped by hookshotting the top of the ladder from the correct distance and angle and holding forward to ledge grab.</p>
                    <p>This is more difficult for some ladders than others due to the quirks of geometory and Link&apos;s ledge grab.</p>
                    <p>Hookshotting climbable walls in the same way is not a trick, as it is trivial to get an angle that correctly ledge grabs.</p>
                    <p>Unless specified otherwise an easy way to get a good angle is to drop off the ladder, backflip, then sidehop and from there aim for the top of the ladder.</p>
                    <h3>List of currently relevant ladders
                    </h3>
                    <p>Hyrule Field, entering and leaving via the south path.
                    </p>
                    <Image src={HF1} alt="Hyrule Field Ladder" />
                    <Image src={HF2} alt="Hyrule Field Ladder" />
                    <p>Kokiri Forest, ladder to Link&apos;s Porch
                    </p>
                    <p>This ladder is very precise so the setup, and thus killing the Deku Baba if Forest Temple is not cleared, is logically required. Stunning it does not last long enough to perform the trick.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HSLadLinksPorch.webm" type="video/webm"/>
                    </video>
                    <p>Lost Woods, from the bridge to the Main area
                    </p>
                    <p>Note that this is only for climbing the ladder, Hookshotting it, dropping down and getting checks from the Gossip Stone is not a trick.
                    </p>
                    <Image src={LW} alt="Lost Woods Ladder" />
                    <p>Sacred Forest Meadow Ladders to the upper level.
                    </p>
                    <Image src={SFM1} alt="Sacred Forest Meadow Ladder" />
                    <Image src={SFM2} alt="Sacred Forest Meadow Ladder" />
                    <p>Zora&apos;s River ladder to the Grottos.
                    </p>
                    <Image src={ZR} alt="Zora's River Ladder" />
                    <p>Death Mountain Crater From the Scrub Region to the Upper Region.
                    </p>
                    <p>Note that if &quot;Crater&apos;s Bean PoH with Hover Boots&quot; is on, you may be asked to Longshot from that Heart Piece to the big climbing wall even without this trick.
                    </p>
                    <Image src={DMC} alt="Death Mountain Crater Ladder" />
                    <p>Gerudo Fortress ladder onto the tower.
                    </p>
                    <p>One of the most awkward ladders, using the setup is recommended.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HSLadGF.webm" type="video/webm"/>
                    </video>
                    <p>Dodongo&apos;s Cavern Spike Room, ladder leading to the bridge.
                    </p>
                    <p>The setup is blocked by the environment, but the gap between the pillars is perfectly spaced for an easy hook.
                    </p>
                    <Image src={DCSpikes1} alt="Dodongo's Cavern Spikes Ladder" />
                    <p>Shadow Temple Dock.
                    </p>
                    <Image src={Shadow} alt="Shadow Dock Ladder" />
                    <h3>List of ladders that may become relevant on alternate builds or with future Tricks or Shuffles
                    </h3>
                    <p>Zora&apos;s Domain, escaping the grotto Island as Child without swimming.
                    </p>
                    <p>Adult can simply walk over the ice, and with Longshot you can hook one of the chest torches which is not a trick.
                    </p>
                    <Image src={ZD} alt="Zora's Domain Ladder" />
                    <p>Dodongo&apos;s Cavern, climbing to the Switch Platform.
                    </p>
                    <p>Adult gets there with just a ledge climb, skipping the ladder entirely.
                    </p>
                    <Image src={DCPlatform} alt="Dodongo's Cavern Platform Ladder" />
                    <p>Dodongo&apos;s Cavern, ladder towards Upper Lizalfos Loop.
                    </p>
                    <p>This ladder can be skipped using blocks to platform to the ledge instead.
                    </p>
                    <Image src={DCSpikes2} alt="Dodongo's Cavern Spikes Ladder" />
                    <p>Bottom of the Well, Entrance Ladder
                    </p>
                    <Image src={BotWEntrance} alt="Bottom of the Well Entrance Ladder" />
                    <p>Bottom of the Well, Leaving B3
                    </p>
                    <p>The slime messes with the setup, but standing on the edge of the wood works fine.
                    </p>
                    <Image src={BotWB31} alt="Bottom of the Well B3 Ladder" />
                    <Image src={BotWB32} alt="Bottom of the Well B3 Ladder" />
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