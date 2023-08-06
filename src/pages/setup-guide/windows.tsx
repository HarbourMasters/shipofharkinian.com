import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Windows Setup Guide";

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
                    <p><a href="https://discord.com/channels/808039310850130000/955966600891224064">Click here</a> to go to the <b>#download</b> channel in the Discord, where you will find the links for <b>all current and historical versions</b> of Ship of Harkinian. 
						Find the <b>highest</b> numbered version and select the link that says <b>Windows</b>.
                    </p>
                    <p><b>Extract the Zip file</b> into a Folder on your <b>Local Hard Drive</b> for later.<br />
                      <span className="guideNoteBold">Note: Do NOT just open the zip and run SoH from there, things will break.</span><br />
                      <span className="guideNoteBold">Note: Do NOT extract this to C:\Windows, C:\Program Files, or a OneDrive/Google Drive location, things will break.</span>
                    </p>

                    <h2 id="step-2">
                      <a href="#step-2">Step 2: Obtaining a ROM (Legally)</a>
                    </h2>
                    <p>Follow the steps outlined in <Link href="dump-guide">ROM Dumping Guide</Link> to <span className="guideNoteBold">legally</span> obtain a <b>usable ROM</b> for the Ship of Harkinian.</p>
                    <p>The ReadMe file <b>included with the download</b> mentioned in <a href="#step-1">Step 1</a> lists out the <b>CRC/SHA1 Hash</b> and a website to verify your version. <span className="guideNoteBold">Incorrect versions are not supported</span> and you will see an error or the game will not load similar to the below screenshot:</p>
                    <Image src="images/image5.png" alt={"Windows ROM CRC Error"} />

                    <h2 id="step-3">
                      <a href="#step-3">Step 3: Extracting the Assets and Launching Ship of Harkinian</a>
                    </h2>
                    <p>Assuming you correctly followed the instructions in Steps 1 and 2 you are now ready for the last process.</p>
                    <p>Open the Folder you extracted from Step 1 and launch the soh.exe file.
                      <span className={"guideNoteBold"}>Note: You can ignore any AntiVirus or Windows SmartScreen notifications, these are false positives due to these programs having too little information about Ship of Harkinian.</span>
                    </p>
                    <p>Once <b>soh.exe</b> has been opened for the first time you will be greeted with a popup window. Select Yes at this prompt:<br />
                      <Image src={"images/image4.png"} alt={"Windows No OTR Files Found"} />
                    </p>
                    <p>If your ROM is <b>not located in the same folder as the SoH.exe</b> you will have one additional prompt. Select Yes at this prompt too:<br />
                      <Image src={"images/image3.png"} alt={"Windows No Roms Found"} /><br />
                      Locate the ROM that you <b>dumped in Step 2</b> and double click it to begin the Asset Extraction process.
                    </p>
                    <p>This Asset Extraction process will happen silently in the background.<br />
                      <span className={"guideNote"}>Note: You can safely ignore any errors displayed during this process, as long as the console window closes and you see the following prompt:</span><br />
                      <Image src={"images/image2.png"} alt={"Windows Rom Extracted"} /><br />
                      If you have a Master Quest ROM you wish to create an oot-mq.otr from, select Yes. Otherwise, select No.
                    </p>
                    <p>Once you have completed the extraction process the Game will automatically launch.</p>
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
