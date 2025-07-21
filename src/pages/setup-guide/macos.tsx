import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';

import image1 from './images/image6.png';
import image2 from './images/image7.png';
import image3 from './images/image12.png';
import image4 from './images/image1.png';
import image5 from './images/image10.png';
import image6 from './images/image9.png';
import image7 from './images/image8.png';
import image16 from './images/image16.png';
import image17 from './images/image17.jpg';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "macOS Setup Guide";

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
                      Find and click the link that has <b>Mac</b> in the name.
                    </p>
                    <p><b>Extract the Zip file</b> into a Folder on your <b>Local Hard Drive</b> for later.<br />
                      <span className="guideNoteBold">Note: Do NOT extract this to a temporary or a cloud drive location, things will break.</span>
                    </p>
                    <p>Open the file names <b>Soh.dmg</b>, it will open a new window. Drag the file named <b>soh</b> into the <b>Applications</b> folder.</p>
                    <Image src={image1} alt={"macOS SoH.dmg"} />

                    <h2 id="step-2">
                      <a href="#step-2">Step 2: Obtaining a ROM (Legally)</a>
                    </h2>
                    <p>Follow the steps outlined in <Link href="dump-guide">ROM Dumping Guide</Link> to <span className="guideNoteBold">legally</span> obtain a <b>usable ROM</b> for the Ship of Harkinian.</p>
                    <p>The ReadMe file <b>included with the download</b> mentioned in <a href="#step-1">Step 1</a> lists out the <b>CRC/SHA1 Hash</b> and a website to verify your version. <span className="guideNoteBold">Incorrect versions are not supported</span> and you will see an error or the game will not load similar to the below screenshot:</p>

                    <h2 id="step-3">
                      <a href="#step-3">Step 3: Launching Ship of Harkinian</a>
                    </h2>
                    <p>Assuming you correctly followed the instructions in <a href={"#step-1"}>Step 1</a> and <a href={"#step-2"}>Step 2</a> you are now ready for the last process.</p>
                    <p>Navigate to your <b>Applications</b> list. <b>Control-click</b> the <b>soh.app</b> file, then click <b>Open</b>.</p>
                    <Image src={image2} alt={"macOS applications list"} />
                    <p>Then click <b>Open</b> on the next prompt that appears.</p>
                    <Image src={image3} alt={"macOS malicious software prompt"} />
                    <h3>On macOS Ventura (13) and later:</h3> 
                    <p>You must first attempt to open the app, and dismiss the warning by clicking &apos;Done&apos;. </p>
                    <Image src={image16} alt={"macOS Ventura malicious software prompt"} /> 
                    <p>Then go to <b>System Settings &gt; Privacy &amp; Security</b> to approve the app.</p>
                    <Image src={image17} alt={"macOS Ventura security pane"} />
                    <p> Click <b>Open Anyway. </b></p>
                    <span className="guideNote">This button is available for about an hour after you try to open the app.</span>
                    <h2 id="step-4">
                    <a href="#step-4">Step 4: Extracting the Assets</a>
                    </h2> 
                    <p>One the <b>soh.app</b> has been opened for the <b>first time</b>, you will be <b>greeted with a popup window</b>. Select <b>Yes</b> on this prompt:</p>
                    <Image src={image4} alt={"macOS no otr files"} />
                    <p>At the next prompt, select <b>Yes</b> again:</p>
                    <Image src={image5} alt={"macOS no ROM found"} />
                    <p>Locate your <b>ROM that you dumped</b> from <a href={"#step-2"}>Step 2</a> and double click it to begin the <b>Asset Extraction</b> process.</p>
                    <p>This <b>Asset Extraction</b> process will happen in the background, but you will <b>see the following pop-up</b> in the <b>top right corner</b>:</p>
                    <Image src={image6} alt={"macOS generating otr"} />
                    <p>Once the process is complete, the pop-up will display the <b>following message</b> and the game will launch:</p>
                    <Image src={image7} alt={"macOS otr generated"} />
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
