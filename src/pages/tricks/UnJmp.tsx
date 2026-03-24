import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';


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
                       There are also several cases where the unusual physics of backflips or sidehops clear gaps or climb things that otherwise should not be possible.
                       This trick enables all such cases where the trick is trivial to execute if known about and does not have a large reset time if failed,
                       combining several individual tricks from other OoT randomisers.
                    </p>
                    <h2>List of relevant Unintuitive Jumps:
                    </h2>
                    <p>Kokiri Forest, jumping onto Mido&quot;s House to skip climb
                    </p>
                    <p>Kakriko Village, jumping to the Man on Roof either by jumping onto Potion Shop from the front as adult, or sidehopping off the tower as either age.
                    </p>
                    <p>Kakriko Windmill, using the short wall to jump onto the grinder, and from there reaching the heart piece.
                    </p>
                    <p>Gerudo Fortress, jumping from the top of the lower set of vines and ladding at the base of the upper vines.
                    </p>
                    <p>Gerudo Fortress, jumping from the base of the upper vines to the sloped roof without having to climb them.
                    </p>
                    <p>Gerudo Fortress, jumping from the sloped roof to the top of the upper vines as Adult in order to skip climbing them.
                    </p>
                    <p>Gerudo Fortress, jumping down from the area above the jail without taking fall damage by landing on the rock.
                    </p>
                    <p>Dodongo&quot;s Cavern, jackflipping onto the armos in order to reach the raised switch without climb.
                    </p>
                    <p>Dodongo&quot;s Cavern, jumping from the top of the ladder to one of the pillar in spike trap room, and from there to the chest. Note that in Master Quest using the blocks to start the jump instead is not a trick but requires Grab.
                    </p>
                    <p>Dodongo&quot;s Cavern, pulling one of the graves in the back of Master Quest and using that to roll jump onto the ledge where the Gold Skulltula is. This combined with the pots nearby can be used to get that GS Check without a weapon.
                    </p>
                    <p>Jabu Jabu&quot;s Belly, jumping from the lift as Adult in order  to dive deeper and skip Silver Scale, as Adult&quot;s larger hitbox prevents them form simply diving under.
                    </p>
                    <p>Fire Temple, jumping to the boss door by jumping against the wall.
                    </p>
                    <p>Water Temple, jumping into the canal from the nearby door and swimming into the channel, skipping Iron Boots.
                    </p>
                    <p>Shadow Temple, jumping onto the Ship&quot;s Wheel to skip the block and ladder.
                    </p>
                    <p>Shadow Temple, jumping from the Chasm Scarecrow to the top of the broken pillar with a jumpslash.
                    </p>
                    <p>Forest Trial, cutting the corner to get a jump that allows child to reach the end of Beamos room.
                    </p>
                    <h2>List of Unintuitive Jumps that may become relevant on alternate builds or with future Shuffles/Tricks:
                    </h2>
                    <p>Gerudo Fortress, jumping from the long East to West roof to the Gold Skulltula as Adult.
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