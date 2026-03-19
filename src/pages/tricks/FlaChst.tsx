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
                    <p>When a large chest is surrounded by fire, you can take damage (including from the fire) and then quickly walk into the fire while invincible to open the chest.
                       This trick can sometimes be used in other contexts to interact with the inside of the Fire Ring.
                    </p>
                    <h2>List of relevant Fire Rings:
                    </h2>
                    <p>Skipping the puzzle in the torch slug and doors room in Spirit Temple by running into the fire to open the chest
                    </p>
                    <p>Is Visible Collision is also enabled, you can run into the fires in MW Child Spirit while invincible and jumpslash to collect the freestandings through the fire.
                    </p>
                    <p>Skipping the Hammer in Gerudo Training Grounds back rooms by running into the fire to open the chest
                    </p>
                    <h2>List of Fire Rings that may become relevant on alternate builds or with future Shuffles/Tricks:
                    </h2>
                    <p>At the top of MQ spirit, you can push against the fire ring to grab the second mirror in the cave to avoid needing to activate the sun switch. This allows the mirrors to be pushed as child.
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