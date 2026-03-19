import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';


const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Fewer Tunic Requirements";

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
                      <a href="#explaination">Fewer Tunic Requirements</a>
                    </h2>
                    <p>Normally, if a heat timer or breath timer would appear outside of Death Mountain Crater, you logically need a tunic.
                    </p>
                    <p>If Fewer Tunic Requirements is enabled, you restrictions are looser, and the number of hearts the game expects from you in Death Mountain Crater is reduced.
                       Specifically you are expected to do everything except the Fire Temple Block and Geyser room, Volvagia and Central pillar.
                    </p>
                    <h2>Heat Timers.
                    </h2>
                    <h2>Hearts needed for Death Mountain Crater.
                    </h2>
                    <p>The number of hearts needed for the task without this trick are in brackets. Doing checks near the entrance you entered by never needs hearts or a tunic. Only common requirements are listed here due to the number of possibilities.
                    </p>
                    <p>Reaching Rock Grotto from the Upper Entrance: 1(2) hearts
                    </p>
                    <p>Reaching the Deku Scrub, Wall Freestanding or Gossip Stone from the Upper Entrance: 2(3) hearts
                    </p>
                    <p>Reaching the Child Crate or Wall Freestanding from the Rock Grotto: 1(2) hearts
                    </p>
                    <p>Reaching the Gossip Stone, Deku Scrub, or jumping down to the Far Scarecrow Platform from the Rock Grotto: 2(3) hearts
                    </p>
                    <p>Reaching the Blocked Exit from the Rock Grotto: 4(6) hearts
                    </p>
                    <p>Reaching the Pots from the Rock Grotto or Upper Entrance: 4(6) hearts
                    </p>
                    <p>Entering the Hammer Boulder Grotto from the Pot Entrance: 1(2) hearts
                    </p>
                    <p>Reaching the Bolero Pad checks from the Pots: 4(6) hearts
                    </p>
                    <p>Reaching Temple Entrance from the Pots: 5(8) hearts
                    </p>
                    <p>Reaching Far Platform from from the Pots: 5(8) hearts via the Scarecrow, 4(6) to climb up and jump down from the Gossip Stone.
                    </p>
                    <p>Reaching Temple Entrance or getting the Bean Patch Checks from the Bolero pad: 2(3) hearts
                    </p>
                    <p>Reaching Far Platform from from the Bolero Pad: 2(3) hearts via the Scarecrow, 3(5) to use the Bean Patch, 7(11) Hearts to go all the way around then jump down or 5(8)hearts to use &quot;Crater&apos;s Bean PoH with Hover Boots&quot;, Longshot across and then jump down. 
                    </p>
                    <h2>Hearts needed for Fire Temple with this Trick.
                    </h2>
                    <p>Reaching the boss door or entering the dungeon through it: 2 Hearts
                    </p>
                    <p>Reaching the Open Side Door in Vanilla Big Lava Room: 3 Hearts
                    </p>
                    <p>Reaching the Block Side Door or high side Door in Vanilla Big Lava Room: 4 Hearts
                    </p>
                    <p>Reaching the Open Side Door or high side door with bow in Big Lava Room in MQ: 4 Hearts
                    </p>
                    <p>Reaching the Blocked Side Door in MQ Big Lava Room: 6 Hearts
                    </p>
                    <p>Performing the trick &quot;Fire Temple MQ Boss Key Chest without Bow&quot;: 7 Hearts
                    </p>
                    <h2>Hearts needed for Fire Trial with this Trick.
                    </h2>
                    <p>Getting the freestanding item in Vanilla: 2 Hearts
                    </p>
                    <p>Opening the door in Vanilla: 6 Hearts
                    </p>
                    <p>Opening the door in MQ: 9 Hearts
                    </p>
                    <h2>Breath Timer
                    </h2>
                    <p>Only common heart requirements are included due to the large number of possibilities.
                    </p>
                    <p>Fountain Lakebed: 2 Hearts
                    </p>
                    <p>Forest temple, getting checks in the well without draining it: 1 Heart
                    </p>
                    <p>Forest temple, Moving through the well without draining it: 2 Hearts
                    </p>
                    <p>Forest temple, Moving through the well without draining it: 2 Hearts
                    </p>
                    <p>Water temple, Reaching the Low Water Emblem or basement areas without known low water: 2 Hearts
                    </p>
                    <p>Water temple, Reaching the Jet Chest with Swim: 2 Hearts
                    </p>
                    <p>Water temple, Getting checks from River without swim: 2 Hearts
                    </p>
                    <p>Water temple, Getting past river without swim: 4 Hearts
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