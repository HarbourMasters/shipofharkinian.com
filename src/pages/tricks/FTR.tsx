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
                       Specifically you are expected to do everything except the Fire Temple Block and Geyser room, Volvagia and Central Pillar without a Tunic.
                    </p>
                    <p>Except for near the Bolero Pad, you never need a specific number of hearts to do checks immediately around the entrance,
                    </p>
                    <h3>Common Heat Timers in Death Mountain Crater with and without Fewer Tunic Requirements.
                    </h3>
                      <div className="FTRDMCTable">
                        <div className="dumpCell dumpHead1">Entrance</div>
                        <div className="dumpCell dumpHead2">Exit/Check</div>
                        <div className="dumpCell dumpHead2">Default Hearts</div>
                        <div className="dumpCell dumpHead3">FTR Hearts</div>
                        <div className="dumpCell dumpCellLeft">Upper Entrance</div>
                        <div className="dumpCell">Rocks Grotto</div>
                        <div className="dumpCell">1</div>
                        <div className="dumpCell">2</div>
                        <div className="dumpCell dumpCellLeft">Upper Entrance</div>
                        <div className="dumpCell">Deku Scrub, Wall PoH, Gossip Stone</div>
                        <div className="dumpCell">2</div>
                        <div className="dumpCell">3</div>
                        <div className="dumpCell dumpCellLeft">Rocks Grotto</div>
                        <div className="dumpCell">Child Crate, Wall PoF</div>
                        <div className="dumpCell">1</div>
                        <div className="dumpCell">2</div>
                        <div className="dumpCell dumpCellLeft">Rocks Grotto</div>
                        <div className="dumpCell">Deku Scrub, Gossip Stone, Jumping down to Far Platform</div>
                        <div className="dumpCell">2</div>
                        <div className="dumpCell">3</div>
                        <div className="dumpCell dumpCellLeft">Rocks Grotto</div>
                        <div className="dumpCell">Blocked Exit</div>
                        <div className="dumpCell">4</div>
                        <div className="dumpCell">6</div>
                        <div className="dumpCell dumpCellLeft">Upper Entrance, Rocks Grotto</div>
                        <div className="dumpCell">Pots and Pots Exit</div>
                        <div className="dumpCell">4</div>
                        <div className="dumpCell">6</div>
                        <div className="dumpCell dumpCellLeft">Pots Entrance</div>
                        <div className="dumpCell">Hammer Boulder Grotto</div>
                        <div className="dumpCell">1</div>
                        <div className="dumpCell">2</div>
                        <div className="dumpCell dumpCellLeft">Pots Entrance</div>
                        <div className="dumpCell">Bolero and nearby checks</div>
                        <div className="dumpCell">4</div>
                        <div className="dumpCell">6</div>
                        <div className="dumpCell dumpCellLeft">Pots Entrance</div>
                        <div className="dumpCell">Temple Exit</div>
                        <div className="dumpCell">5</div>
                        <div className="dumpCell">8</div>
                        <div className="dumpCell dumpCellLeft">Pots Entrance</div>
                        <div className="dumpCell">Jumping Down to Far Platform</div>
                        <div className="dumpCell">4</div>
                        <div className="dumpCell">6</div>
                        <div className="dumpCell dumpCellLeft">Pots Entrance</div>
                        <div className="dumpCell">Far Platform, via the Scarecrow</div>
                        <div className="dumpCell">5</div>
                        <div className="dumpCell">8</div>
                        <div className="dumpCell dumpCellLeft">Bolero Pad</div>
                        <div className="dumpCell">Temple Exit, Checks near Bolero Pad, Pots Exit</div>
                        <div className="dumpCell">2</div>
                        <div className="dumpCell">3</div>
                        <div className="dumpCell dumpCellLeft">Bolero Pad</div>
                        <div className="dumpCell">Far Platform, via the Scarecrow</div>
                        <div className="dumpCell">2</div>
                        <div className="dumpCell">3</div>
                        <div className="dumpCell dumpCellLeft">Bolero Pad</div>
                        <div className="dumpCell">Far Platform, using the Bean patch</div>
                        <div className="dumpCell">3</div>
                        <div className="dumpCell">5</div>
                        <div className="dumpCell dumpCellLeft">Bolero Pad</div>
                        <div className="dumpCell">Far Platform, climbing around and jumping down</div>
                        <div className="dumpCell">7</div>
                        <div className="dumpCell">11</div>
                      </div>
                    <h3>Hearts needed for Vanilla Fire Temple with this Trick.
                    </h3>
                      <div className="FTROtherTable">
                        <div className="dumpCell dumpHead1">Task</div>
                        <div className="dumpCell dumpHead3">Hearts Needed</div>
                        <div className="dumpCell dumpCellLeft">Crossing Near Boss Room</div>
                        <div className="dumpCell">2</div>
                        <div className="dumpCell dumpCellLeft">Reaching the Open Side Door in Big Lava Room:</div>
                        <div className="dumpCell">3</div>
                        <div className="dumpCell dumpCellLeft">Reaching Blocked or High Side Doors in Big Lava Room:</div>
                        <div className="dumpCell">4</div>
                      </div>
                    <h3>Hearts needed for Master Quest Fire Temple with this Trick.
                    </h3>
                      <div className="FTROtherTable">
                        <div className="dumpCell dumpHead1">Task</div>
                        <div className="dumpCell dumpHead3">Hearts Needed</div>
                        <div className="dumpCell dumpCellLeft">Crossing Near Boss Room</div>
                        <div className="dumpCell">2</div>
                        <div className="dumpCell dumpCellLeft">Reaching the Open Side Door in Big Lava Room:</div>
                        <div className="dumpCell">4</div>
                        <div className="dumpCell dumpCellLeft">Reaching High Side Door in Big Lava Room with Bow:</div>
                        <div className="dumpCell">4</div>
                        <div className="dumpCell dumpCellLeft">Reaching Blocked Side Door in Big Lava Room</div>
                        <div className="dumpCell">6</div>
                        <div className="dumpCell dumpCellLeft">Performing the trick &quot;Fire Temple Master Quest Boss Key Chest without Bow&quot;</div>
                        <div className="dumpCell">7</div>
                      </div>
                    <h3>Hearts needed for Fire Trial with this Trick.
                    </h3>
                      <div className="FTROtherTable">
                        <div className="dumpCell dumpHead1">Task</div>
                        <div className="dumpCell dumpHead3">Hearts Needed</div>
                        <div className="dumpCell dumpCellLeft">Getting the freestanding item</div>
                        <div className="dumpCell">2</div>
                        <div className="dumpCell dumpCellLeft">Opening the door in Vanilla</div>
                        <div className="dumpCell">6</div>
                        <div className="dumpCell dumpCellLeft">Opening the door in MQ</div>
                        <div className="dumpCell">9</div>
                      </div><h3>Hearts needed for Vanilla Fire Trial with this Trick.
                    </h3>
                      <div className="FTROtherTable">
                        <div className="dumpCell dumpHead1">Task</div>
                        <div className="dumpCell dumpHead3">Hearts Needed</div>
                        <div className="dumpCell dumpCellLeft">Getting the freestanding item</div>
                        <div className="dumpCell">2</div>
                        <div className="dumpCell dumpCellLeft">Opening the door in Vanilla</div>
                        <div className="dumpCell">6</div>
                      </div>
                    <h3>Breath Timers
                    </h3>
                    <div className="FTROtherTable">
                        <div className="dumpCell dumpHead1">Task</div>
                        <div className="dumpCell dumpHead3">Hearts Needed</div>
                        <div className="dumpCell dumpCellLeft">Getting checks on Zora Fountain&apos;s lakebed</div>
                        <div className="dumpCell">2</div>
                        <div className="dumpCell dumpCellLeft">Getting Checks in the Forest Temple Well without draining it</div>
                        <div className="dumpCell">1</div>
                        <div className="dumpCell dumpCellLeft">Moving through the Forest Temple Well without draining it</div>
                        <div className="dumpCell">2</div>
                        <div className="dumpCell dumpCellLeft">Reaching Low Water Emblem from the Entrance</div>
                        <div className="dumpCell">2</div>
                        <div className="dumpCell dumpCellLeft">Reaching Water Temple Jet Chest with Swimming</div>
                        <div className="dumpCell">2</div>
                        <div className="dumpCell dumpCellLeft">Getting checks in Water Temple River without Swimming</div>
                        <div className="dumpCell">2</div>
                        <div className="dumpCell dumpCellLeft">Making it past Water Temple River without Swimming</div>
                        <div className="dumpCell">4</div>
                      </div>
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