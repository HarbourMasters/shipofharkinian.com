import type { NextPage } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Nintendo Switch Setup Guide";

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
                    <p className="guideNoteBold">Note: You will need a PC to complete this process.</p>

                    <h3 style={{textAlign: "center"}}>On your PC</h3>
                    <p><a href="https://discord.com/channels/808039310850130000/955966600891224064">Click here</a> to go to the <b>#downloads</b> channel in the Discord, where you will find the links for <b>all current and historical versions</b> of Ship of Harkinian.
						Find the <b>highest</b> numbered version and select the link that says indicates the <b>PC platform</b> you will be using. Also download the link that says <b>Switch</b>, you will need this later.<br />
                      <span className={"guideNoteBold"}>Note: The PC platform version is required to generate the oot.otr that will be used later on the Switch.</span>
                    </p>
                    <p><b>Extract the Zip file</b> into a Folder on your <b>Local Hard Drive</b> for later.<br />
                      <span className="guideNoteBold">Note: Do NOT just open the zip and run SoH from there, things will break.</span><br />
                      <span className="guideNoteBold">Note: Do NOT extract this to C:\Windows, C:\Program Files, or a OneDrive/Google Drive location, things will break.</span>
                    </p>

                    <h2 id="step-2">
                      <a href="#step-2">Step 2: Obtaining a ROM (Legally)</a>
                    </h2>
                    <p>Follow Step 2: Obtaining a ROM (Legally) and Step 3: Extracting the Assets and Launching Ship of Harkinian on the PC Platform you selected above.</p>
                    <image href="images/image5.png"></image>

                    <h2 id="step-3">
                      <a href="#step-3">Step 3: Extracting the Assets and Launching Ship of Harkinian</a>
                    </h2>
                    <p>Once the oot.otr file has been generated, you no longer need the <b>PC Platform</b> build. The remainder of the steps here will be using the <b>Switch files you downloaded earlier in <a href={"#step-1"}>Step 1</a></b>.</p>
                    <p>Create the following <b>folder structure</b> on your <b>SD card</b>:<br />
                      <span style={{marginLeft: 100}}>sdcard</span><br />
                      <span style={{marginLeft: 100}}>└──switch</span><br />
                      <span style={{marginLeft: 130}}>└──soh</span><br />
                      <span style={{marginLeft: 160}}>└──oot.otr</span><br />
                      <span style={{marginLeft: 160}}>└──soh.rpx</span><br />
                      <span style={{marginLeft: 160}}>└──soh.otr</span>
                    </p>
                    <h3 style={{textAlign: "center"}}>On your Switch</h3>
                    <p>Insert the SD Card and launch the game via <b>Atmosphere’s Game+R</b> launcher method.</p>
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
