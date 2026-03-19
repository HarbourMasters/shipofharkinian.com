import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';


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
                    <p>This is more difficult for some ladders than others due to the quirks of geometory and Link&apos;s ledge grab, and a few are not possible.</p>
                    <p>Hookshotting climbable walls in the same way is not a trick, as it is trivial to get an angle that correctly ledge grabs.</p>
                    <p>Unless specified otherwise, an easy way to get a good angle is to drop off the ladder, backflip, then sidehop and from there aim for the top middle of the ladder.</p>
                    <h2>List of currently relevant ladders and their hookshot locations:
                    </h2>
                    {/*TODO add images*/}
                    <p>Hyrule Field, entering and leaving via the Fence Entrance (Lake Hylia):
                    </p>
                    <p>Kokiri Forest, Ladder to Link&apos;s Porch:
                    </p>
                    <p>This ladder is very precise as Adult, the setup is backflip 3 times, sidehop right once, then aim hookshot above the right prong of the ladder (so there&apos;s no reticle):
                    </p>
                    <p>Lost Woods, from the bridge to the Main area:
                    </p>
                    <p>Note that this is only for climb the ladder, Hookshotting it, dropping down and getting checks from the Gossip Stone is not a trick.
                    </p>
                    <p>Sacred Forest Meadow Ladders to the upper level:
                    </p>
                    <p>Walls and the grotto interfere with the setup, but these are pretty easy to eyeball.
                    </p>
                    <p>Death Mountain Crater From the Scrub Area to the Upper Area:
                    </p>
                    <p>Note that if &quot;Crater&apos;s Bean PoH with Hover Boots&quot; is on, you may be asked to Longshot from that Heart Piece to the big climbing wall even without this trick.
                    </p>
                    <p>Gerudo Fortress ladder onto the tower:
                    </p>
                    <p>One of the most awkward ladders, a reliable setup is to start at the right side of the inside gate, then sidehop left, backflip 3 times, then sidehop right, before aiming at the top of the right prong of the ladder.
                    </p>
                    <p>Dodongo&apos;s Cavern, ladder leading to the bridge:
                    </p>
                    <p>The setup is blocked by the environment, but the gap between the pillars is perfectly spaced for an easy hook.
                    </p>
                    <p>Shadow Temple Dock:
                    </p>
                    <p>The setup is impossible as the ladder does not reach the ground, but it&apos;s one of the easier ones to grab. Adult can also jump to the wheel, but it&apos;s Unintuitive.
                    </p>
                    <h2>List of ladders that may become relevant on alternate builds or with future Shuffles/Tricks:
                    </h2>
                    <p>Zora&apos;s River ladder to Grottos:
                    </p>
                    <p>The tiny ledge prevents the normal setup, but you can make it by getting close to the water, and going right just enough that you can aim slightly over the middle of the ladder, hooking a transparent part of the ladder hitbox.
                    </p>
                    <p>Zora&apos;s Domain, escaping the grotto Island as Child with Hookshot and no swim:
                    </p>
                    <p>Adult can simply walk over the ice, and with Longshot you can reach one of the chest torches. Has to be done setupless due to the water.
                    </p>
                    <p>Dodongo&apos;s cavern, climbing to this platform in MQ:
                    </p>
                    <p>Adult gets there with just a ledge climb, but this could be required to defeat the Dodongos with bomb flowers if child hookshot was ever logical.
                    </p>
                    <p>Dodongo&apos;s cavern, ladder towards upper lizalfos:
                    </p>
                    <p>This ladder can be skipped using blocks to platform to the ledge instead.
                    </p>
                    <p>Bottom of the Well, Entrance Ladder:
                    </p>
                    <p>Bottom of the Well, Leaving B3:
                    </p>
                    <p>The slime messes with the setup, but standing on the edge of the wood works fine.
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