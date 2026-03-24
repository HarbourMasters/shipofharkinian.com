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
                    <p>This trick covers Ground Jumps either with tighter execution requirements, or additional actions on top of the standard Ground Jump, which complicates the execution. It is recommended to enable the regular Ground Jumps trick with this trick.
                    </p>
                    <h3>Middair Ground Jumps:
                    </h3>
                    <p>The first common varient of this is the Middair Ground Jump, where you use Hover Boots after setting up the Ground Jump to use the Ground jump in a location without a floor.
                    </p>
                    <h3>Relevant Middair Ground Jumps:
                    </h3>
                    <p>In Forest Temple West Courtyard Adult can go from the top of the vines over the well to the main ledge leading to the side room using a Middair Ground Jump
                    </p>
                    <p>In Shadow Temple Invisible Spikes room, you can skip hookshot by starting a Middair Ground jump over the Spikes.
                    </p>
                    <p>Adult can reach the Rusted Switch in Water Trial without the ability to push by using a Middair Ground Jump from the blocks.
                    </p>
                    <h3>Middair Ground Jumps that may become relevant on alternate builds or with future shuffles/tricks:
                    </h3>
                    <p>&quot;Forest Temple Master Quest Doorframe GS as Child without Boomerang&quot; can be performed with a Middair Ground Jump instead.
                    </p>
                    <p>Child can use a Middair ground jump to make the jump from the main Pillar to the High Water Embelem.
                    </p>
                    <p>Child can Middair ground jump to reach the Boulder Canal in Water Temple Basement, but then needs Iron Boots to fight the current. They can also use one to get the nearby Gold Skulltula Token after killing it. 
                    </p>
                    <h3>Ground Jump Jumpslash:
                    </h3>
                    <p>The second common varient is the Ground Jump Jumpslash where you use a well timed Jumpslash in the middle of a Ground jump in order to gain even more height and get things like skull tokens that are out of reach.
                    </p>
                    <h3>Relevant Ground Jump JumpSlashes:
                    </h3>
                    <p>The Gold Skulltula Token in Haunted Wasteland can be reached using a Ground Jump JumpSlash as Adult.
                    </p>
                    <p>Adult can use a Ground Jump JumpSlash to skip needing a Hootshot to get Master Quest Jabu Jabu Invisible Keese room&quot;s Gold Skultulla Token.
                    </p>
                    <p>You can reach the Gold Skulltula Token in Stone umbrella Room using a Ground Jump JumpSlash as Adult.
                    </p>
                    <h3>Ground Jump Jumpslashes that may become relevant on alternate builds or with future shuffles/tricks:
                    </h3>
                    <p>In Fire Temple&quot;s Large Tile Room, Child needs a Ground Jump JumpSlash to reach the Gold Skulltula Token.
                    </p>
                    <p>In Fire Temple Boulder Maze, Child needs a Ground Jump JumpSlash to reach the Gold Skulltula Token behind the wall.
                    </p>
                    <p>Water Temple Cage Gold Skulltula Token cannot be reached by child without a Ground Jump JumpSlash.
                    </p>
                    <h3>Other relevant uses of this trick:
                    </h3>
                    <p>In Master Quest Dodongo&quot;s cavern, Child can use the bomb flower to set up a Ground Jump to the Lobby Ledge Chest. Due to the Platforming between the flower and the ledge, this must be executed quickly.
                    </p>
                    <h3>Other uses that may become relevant on alternate builds or with future shuffles/tricks:
                    </h3>
                    <p>It is possible to Ground Jump onto a Pillar that doesn&quot;t touch a fire wall in the back of Fire Temple&quot;s Fire maze, and from there use a jumpslash or hover boots to navigate backwards through the maze via a different pillar.
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