import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';

import image5 from './images/image5.png';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Wii U Setup Guide";

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

                    <h3>On your PC</h3>
                    <p><a href="https://github.com/HarbourMasters/Shipwright/releases/tag/8.0.6">Click here</a> to go to the releases page on GitHub, where you will find the links for <b>version 8.0.6</b> of Ship of Harkinian.
                      Find and click the link that matches the <b>PC platform</b> you will be using. Also download the link that has <b>Wii U</b> in the name, you will need this later.<br />
                      <span className={"guideNoteBold"}>Note: The PC platform version is required to generate the oot.otr that will be used later on the Wii U.</span><br />
                      <span className={"guideNoteBold"}>Note: Version 8.0.6 (MacReady Golf) is currently the latest version available for the Wii U, be sure to use the same version on PC to generate the otr file.</span>
                    </p>
                    <p><b>Extract the Zip file</b> into a Folder on your <b>Local Hard Drive</b> for later.<br />
                      <span className="guideNoteBold">Note: Do NOT just open the zip and run SoH from there, things will break.</span><br />
                      <span className="guideNoteBold">Note: Do NOT extract this to C:\Windows, C:\Program Files, or a cloud drive location, things will break.</span>
                    </p>

                    <h2 id="step-2">
                      <a href="#step-2">Step 2: Obtaining a ROM (Legally)</a>
                    </h2>
                    <p>Follow Step 2: Obtaining a ROM (Legally) and Step 3: Extracting the Assets and Launching Ship of Harkinian on the PC Platform you selected above.</p>
                    <Image src={image5} alt="ROM CRC invalid" />

                    <h2 id="step-3">
                      <a href="#step-3">Step 3: Extracting the Assets and Launching Ship of Harkinian</a>
                    </h2>
                    <p>Once the oot.otr file has been generated, you no longer need the <b>PC Platform</b> build. The remainder of the steps here will be using the <b>Wii U files you downloaded earlier in <a href={"#step-1"}>Step 1</a></b>.</p>
                    <p>Create the following <b>folder structure</b> on your <b>SD card</b>:<br />
                      <span className={"folder1"}>sdcard</span><br />
                      <span className={"folder1"}>└── wiiu</span><br />
                      <span className={"folder2"}>└── apps</span><br />
                      <span className={"folder3"}>└── soh</span><br />
                      <span className={"folder4"}>└── oot.otr</span><br />
                      <span className={"folder4"}>└── soh.rpx</span><br />
                      <span className={"folder4"}>└── soh.otr</span>
                    </p>
                    <h3>On your Wii U</h3>
                    <p>Insert the SD Card and launch the game via the <b>Homebrew Channel</b>.</p>
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
