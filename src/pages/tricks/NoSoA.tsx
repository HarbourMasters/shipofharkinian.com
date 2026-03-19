import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';


const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Grottos Without Stone of Agony";

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
                      <a href="#explaination">Grottos Without Stone of Agony</a>
                    </h2>
                    <p>This trick makes it so that you do not need Stone of Agony to locate and enter hidden grottos.\n
                    </p>
                    <p>Grottos that exist under boulders are not counter, but those within stone circles or other environmental clues hints are, 
                        and this affects both grottos you blast/hammer open and those opened via Song of Storms. 
                    </p>
                    <p> If grottos are randomised it affects the ability to enter the grotto and reach the area shuffled to be behind it,
                        not the vanilla grottos that would have been located there.
                    </p>
                    <p>Grottos that exist under boulders are not counted, but those within stone circles or other environmental clues hints are, and this affects both grottos you blast/hammer open and those opened via Song of Storms.
                    </p>
                    <h2>List of Affected Grottos:
                    </h2>
                    {/*TODO add images*/}
                    <p>Hyrule Field Inner Fence Grotto: 
                    </p>
                    <p>Hyrule Field Near Valley Grotto, even as Adult when the rock exists:
                    </p>
                    <p>Hyrule Field Near Stairs Tree Grotto:
                    </p>
                    <p>Hyrule Field Lone Tree Grotto:
                    </p>
                    <p>Kokiri Forest Storms Grotto:
                    </p>
                    <p>Sacred Forest Meadow Wolfos Grotto:
                    </p>
                    <p>Sacred Forest Meadow Storms Grotto:
                    </p>
                    <p>Kakariko Village Central Grotto:
                    </p>
                    <p>Death Mountain Trail Storms Grotto:
                    </p>
                    <p>Zora&apos;s Domain Grotto:
                    </p>
                    <p>Zora&apos;s River Storms Grotto:
                    </p>
                    <p>Gerudo Fortress Grotto:
                    </p>
                    <p>Gerudo Valley Behind Tent Grotto:
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