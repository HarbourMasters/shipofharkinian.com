import type { NextPage } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Updating the Ship of Harkinian";

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

                    <p>When a <b>new version</b> of the <b>Ship of Harkinian</b> releases, you will need to <b>manually update</b> your game
                    in order to obtain the new features and fixes in the latest release. The steps listed below will outline how to do so.
                    </p>

                    <h2 id={"step-1"}>
                      <a href={"#step-1"}>Download the Latest Version</a>
                    </h2>
                    <p>As you have done before, <a href="https://github.com/HarbourMasters/Shipwright/releases/latest">click here</a> to be taken to the GitHub releases page.
                      Find and click the download link that matches your <b>desired platform</b>.
                    </p>
                    <p className={"guideNote"}>Note: Keep in mind, <b>randomizer seeds</b> that you have created on older builds <b>are not guaranteed to operate outside of the build they were generated on</b>.
                      It is recommended that you complete those seeds <b>prior to updating</b>.</p>

                    <h2 id={"step-2"}>
                      <a href={"#step-2"}>Determining Next Steps</a>
                    </h2>
                    <p>If the <b>first digit of the version number changes</b>, please follow the <b>full process</b> outlined in the Setup Guide for your <b>specific platform</b>
                      as your <b>oot.otr will need to be deleted</b> and the <b>Asset Extraction process</b> performed once more.</p>
                    <p className={"guideNote"}>Example: Khan Charlie (<u>6</u>.1.2) was updated to Spock Alfa (<u>7</u>.0.0)</p>
                    <p>If the <b>second</b> or <b>third</b> digit changes, then usually all you will need to do is follow <b>Step 1</b> of your PC platform guide, and <b>Step 3</b> of your <b>console&apos;s guide</b> if applicable.</p>

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
