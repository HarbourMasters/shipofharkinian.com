import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';


const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Fire Rings";

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
                      <a href="#explaination">Fire Rings</a>
                    </h2>
                    <p>When a chest is surrounded by fire, you can sometimes take damage (including from the fire) and then quickly walk into the fire while invincible to open the chest.
                       This trick can sometimes be used in other contexts to interact with the inside of the Fire Ring.
                    </p>
                    <h3>List of relevant Fire Rings:
                    </h3>
                    <p>Skipping the puzzle in the torch slug and doors room in Spirit Temple by running into the fire to open the chest
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/FlaChstSpirit.mp4" type="video/mp4"/>
                    </video>
                    <p>If &quot;Visible Collision&quot; is also enabled, you can run into the fires in Master Quest Child Spirit while invincible and jumpslash to collect the freestandings through the fire.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/FlaChstMQSpirit1F.mp4" type="video/mp4"/>
                    </video>
                    <p>Skipping the Hammer in Gerudo Training Grounds back rooms by running into the fire to open the chest
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/FlaChstGTG.mp4" type="video/mp4"/>
                    </video>
                    <h3>List of Fire Rings that may become relevant on alternate builds or with future Shuffles/Tricks:
                    </h3>
                    <p>At the top of Master Quest Spirit Temple, you can push against the fire ring to grab the second mirror in the cave to avoid needing to activate the sun switch. This allows the mirrors to be pushed as Child.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/FlaChstMQSpirit4F.mp4" type="video/mp4"/>
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