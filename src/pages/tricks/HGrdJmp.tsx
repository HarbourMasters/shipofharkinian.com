import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';


const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Hard Ground Jumps";

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
                      <a href="#explaination">Hard Ground Jumps</a>
                    </h2>
                    <p>This trick covers Ground Jumps either with tighter execution requirements or additional actions on top of the standard Ground Jump which complicates the execution. It is recommended to enable regular Ground Jumps with this trick.
                    </p>
                    <h3>Midair Ground Jumps
                    </h3>
                    <p>The first common variant of this is the Midair Ground Jump, where you use Hover Boots after setting up the Ground Jump to use the Ground jump in a location without a floor.
                    </p>
                    <h3>Relevant Midair Ground Jumps
                    </h3>
                    <p>In Forest Temple West Courtyard Adult can go from the top of the vines over the well to the main ledge leading to the side room using a Midair Ground Jump.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HGrdJmpForestCourtyard.webm" type="video/webm"/>
                    </video>
                    <p>In Shadow Temple Invisible Spikes room, you can skip hookshot by starting a Midair Ground Jump over the Spikes.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HGrdJmpShadowSpikes.webm" type="video/webm"/>
                    </video>
                    <p>Adult can reach the Rusted Switch in Water Trial without the ability to push by using a Midair Ground Jump from the blocks.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HGrdJmpWaterTrial.webm" type="video/webm"/>
                    </video>
                    <h3>Midair Ground Jumps that may become relevant on alternate builds or with future Tricks or Shuffles
                    </h3>
                    <p>&quot;Forest Temple Master Quest Doorframe GS as Child without Boomerang&quot; can be performed with a Midair Ground Jump instead.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HGrdJmpMQForestDoor.webm" type="video/webm"/>
                    </video>
                    <p>Child can use a Midair Ground Jump to make the jump from the main Pillar to the High Water Embelem.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HGrdJmpWaterEmblem.webm" type="video/webm"/>
                    </video>
                    <p>Child can Midair Ground Jump to reach the Boulder Canal in Water Temple Basement, but then needs Iron Boots to fight the current. They can also use one to get the nearby Gold Skulltula Token after killing it. 
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HGrdJmpWaterCanal.webm" type="video/webm"/>
                    </video>
                    <h3>Ground Jump Jumpslash
                    </h3>
                    <p>The second common varient is the Ground Jump Jumpslash where you use a well timed Jumpslash in the middle of a Ground jump in order to gain even more height and get things like skull tokens that are out of reach.
                    </p>
                    <h3>Relevant Ground Jump Jumpslashes
                    </h3>
                    <p>The Gold Skulltula Token in Haunted Wasteland can be reached using a Ground Jump Jumpslash as Adult.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HGrdJmpHW.webm" type="video/webm"/>
                    </video>
                    <p>Adult can use a Ground Jump Jumpslash to skip needing a Hootshot to get Master Quest Jabu Jabu Invisible Keese room&apos;s Gold Skultulla Token.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HGrdJmpMQJabu.webm" type="video/webm"/>
                    </video>
                    <p>You can reach the Gold Skulltula Token in Stone Umbrella Room using a Ground Jump Jumpslash as Adult.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HGrdJmpShadowUmbrellaSkull.webm" type="video/webm"/>
                    </video>
                    <h3>Ground Jump Jumpslashes that may become relevant on alternate builds or with future Tricks or Shuffles
                    </h3>
                    <p>In Fire Temple&apos;s 8 Tile Room, Child needs a Ground Jump Jumpslash to reach the Gold Skulltula Token.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HGrdJmpFireTile.webm" type="video/webm"/>
                    </video>
                    <p>In Fire Temple Boulder Maze, Child needs a Ground Jump Jumpslash to reach the Gold Skulltula Token behind the wall.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HGrdJmpFireMaze.webm" type="video/webm"/>
                    </video>
                    <p>Water Temple Cage Gold Skulltula Token cannot be reached by Child without a Ground Jump Jumpslash.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HGrdJmpWaterCageSkull.webm" type="video/webm"/>
                    </video>
                    <h3>Other relevant uses of this trick
                    </h3>
                    <p>In Master Quest Dodongo&apos;s cavern, Child can use the bomb flower to set up a Ground Jump to the Lobby Ledge Chest. Due to the Platforming between the flower and the ledge, this must be executed quickly.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HGrdJmpMQDCLobby.webm" type="video/webm"/>
                    </video>
                    <h3>Other uses that may become relevant on alternate builds or with future Tricks or Shuffles
                    </h3>
                    <p>It is possible to Ground Jump onto a Pillar that doesn&apos;t touch a fire wall in the back of Fire Temple&apos;s Fire maze, and from there use a Jumpslash or Hover Boots to navigate backwards through the maze via a different pillar.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HGrdJmpFireMazeBackwards.webm" type="video/webm"/>
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