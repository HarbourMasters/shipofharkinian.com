import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';

import image11 from './images/image11.png';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Linux Setup Guide";

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

                    <h2 id="step-1">
                      <a href="#step-1">Step 1: Downloading the Ship of Harkinian</a>
                    </h2>
                    <p className="guideNoteBold">Note: This is the code that will interact with the Assets required in Step 2. This does NOT provide you with any Nintendo Licensed Assets…</p>
                    <p><a href="https://github.com/HarbourMasters/Shipwright/releases/latest">Click here</a> to go to the releases page on GitHub, where you will find the links for <b>all latest versions</b> of Ship of Harkinian.
                      Find and click the link that has <b>Linux</b> in the name. We recommend trying the performance build first.
                    </p>
                    <p><b>Extract the Zip file</b> into a Folder on your <b>Local Hard Drive</b> for later.<br />
                      <span className="guideNoteBold">Note: Do NOT extract this to a temporary or a cloud drive location, things will break.</span>
                    </p>

                    <h2 id="step-2">
                      <a href="#step-2">Step 2: Obtaining a ROM (Legally)</a>
                    </h2>
                    <p>Follow the steps outlined in <Link href="dump-guide">ROM Dumping Guide</Link> to <span className="guideNoteBold">legally</span> obtain a <b>usable ROM</b> for the Ship of Harkinian.</p>
                    <p>The ReadMe file <b>included with the download</b> mentioned in <a href="#step-1">Step 1</a> lists out the <b>CRC/SHA1 Hash</b> and a website to verify your version. <span className="guideNoteBold">Incorrect versions are not supported</span> and you will see an error or the game will not load similar to the below screenshot:</p>

                    <h2 id="step-3">
                      <a href="#step-3">Step 3: Extracting the Assets and Launching Ship of Harkinian</a>
                    </h2>
                    <p>Assuming you correctly followed the instructions in <a href={"#step-1"}>Step 1</a> and <a href={"#step-2"}>Step 2</a> you are now ready for the last process.</p>
                    <p>Open the Folder you extracted from Step 1 and copy the ROM you created in <b>Step 2</b> to this location.</p>
                    <Image src={image11} alt={"Linux ROM not found"} />
                    <p>Launch the soh.appimage file.<br />
                      <span className={"guideNoteBold"}>Note: You may have to <code>chmod +x</code> the appimage via terminal.</span>
                    </p>
                    <p>Locate the ROM that you <b>dumped in <a href={"#step-2"}>Step 2</a></b> and double click it to begin the Asset Extraction process.</p>
                    <p>Asset Extraction will begin and the <b>oot.otr</b> will be generated. This will happen <b>silently in the background</b>. Once it has completed the Game will <b>automatically launch</b>.</p>
                    <p className={"guideNote"}>Note: If you are performing this operation for use with a console platform, please continue on to step 3 for either <Link href={"switch#step-3"}>Nintendo Switch</Link> or <Link href={"wiiu#step-3"}>Wii U</Link> guides.</p>
                    <p><b>Congratulations, you can now play Ocarina of Time on the Ship of Harkinian.</b></p>

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
