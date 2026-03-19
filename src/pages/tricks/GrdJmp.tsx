import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';


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
                    <h2>List of relevant uses:
                    </h2>
                    <p>Adult can Ground Jump to reach the raised area of Sacred Forest Meadow without climb or Scarecrow.
                    </p>
                    <p>You can get the heart piece in the windmill by Ground Jumping onto the grinder as Adult.
                    </p>
                    <p>Child needs a Ground Jump to get from the end of Dampe Race into the Windmill.
                    </p>
                    <p>Adult can Ground Jump from Fortress Tower to skip opening the gate, which needs the Gerudo Jabber Nut.
                    </p>
                    <p>Adult can Ground Jump from the bottom of the lower vines in Gerudo Fortress to the entrance to the Dead End Jail Cell.
                    </p>
                    <p>Child can Ground Jump to reach the ledge in B1 of Deku Tree without finishing the loop or performing B1 skip.
                    </p>
                    <p>Child needs a Ground Jump to reach the ledge in the first room of Dodongo&apos;s Cavern leading to the lower gith loop. Bomb flowers are available but on MQ it is a Hard Ground Jump due to needing to cross the platforms and quickly set up the jump.
                    </p>
                    <p>Adult can Ground Jump from the lower part of the Spike Trap room in Dodongo&apos;s Cavern to where the upper loop exits.
                    </p>
                    <p>Adult can Ground Jump to skip the first room of the upper loop to reach the Upper Lizalfos fight, and from the room after the fight to skip that.
                    </p>
                    <p>Ground Jumps let Adult skip Climb at the start of Forest Temple Block Room, and can be used to jump onto the blocks to skip to platform higher without needing the ladder.
                    </p>
                    <p>Child needs a Ground Jump to reach the chest spawned by defeating Flare Dancer on the lower loop of Fire Temple.
                    </p>
                    <p>Child also needs a Ground Jump to reach the Blocked door in Fire Temple&apos;s Big Lava Room.
                    </p>
                    <p>Adult can use a Ground Jump to skip Goron Bracelet in the Shortcut Room of Fire Temple
                    </p>
                    <p>Adult can Ground Jump onto the pillars in Fire Temples Fire Maze as long as they do not connect to fire walls. This allows you to reach the rusted switch using a nearby pillar.
                    </p>
                    <p>If unintuitive Jumps is off, a Ground jump can let Child beat Forest Trial instead.
                    </p>
                    <p>likewise, a Ground Jump is an alternative to a Slide Jump to get Child onto the ledge in Water Trial Block Room.
                    </p>
                    <p>Adult can Ground Jump to skip Hookshot in the Boulder Room of Light trial.
                    </p>
                    <p>In Ice Cavern block room, Adult can use Ground Jumps to skip needing to jump off the push-block to reach the alcoves and exit to the final room
                    </p>
                    <p>Adult can Ground Jump into the hidden side alcove in Silver Block Room of Gerudo Training Grounds.
                    </p>
                    <h2>List of uses that may become relevant on alternate builds or with future shuffles/tricks.
                    </h2>
                    <p>Child can Ground Jump from the upper kitchen exit onto the sloped roof.
                    </p>
                    <p>On the Top Floor of Jabu Jabu&apos;s Belly, Adult can skip Boomerang in Jiggly Room using a Ground Jump
                    </p>
                    <p>Child needs a Ground Jump to reach the Gold Skulltula behind the wall in the room in the Fire Maze of Fire Temple
                    </p>
                    <p>Child needs a Ground Jump to climb the step towards Triangle Torch Cage in MQ Water Temple.
                    </p>
                    <p>Adult can Ground Jump to skip needing Hookshot and Hovers to reach the high platform in the B2 spinning blade room of Shadow Temple.
                    </p>
                    <p>Child needs a Ground Jump or Climb to do the Boulders/Symphony room in adult side Spirit Temple backwards.
                    </p>
                    <p>Adult can skip climbs with Ground Jump when entering and leaving the Dead hand area.
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