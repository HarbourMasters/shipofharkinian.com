import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';

import image1 from './images/image14.jpg';
import image2 from './images/image15.jpg';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "ROM Dumping Guide";

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
                    <p>The below steps will explain how to <b>obtain a ROM</b> from your <b>legally</b> sourced, official GameCube disc.<br />
                      <span className="guideNoteBold">Reminder: Obtaining the Official Game Disc is your responsibility.</span><br />
					  You can also get a supported ROM from an N64 cartridge, but that requires specialized hardware <Link href="https://github.com/sanni/cartreader">like this</Link> and is beyond the scope of this guide.
                    </p>
					<h3>GCIE-PS</h3>
					<p>
					  We have a script available to run in Windows Powershell (and Linux, if Powershell Core and .NET Core are installed) to make it easy. You can find it <Link href="https://github.com/Spodi/GCIE-PS">here</Link>.<br />
					  If you can&apos;t run that, then continue reading for a guide using Dolphin emulator.
					</p>
                    <h3>Requirements</h3>
                    <p><ul>
                      <li>Softmodded <Link href={"https://wii.guide/"}>Wii</Link> or <Link href={"https://wiiu.hacks.guide/"}>Wii U</Link></li>
                      <li>GameCube disc of appropriate region, listed below (PAL = European)</li>
                      <li>Windows PC (it could work on Linux/macOS, but is currently untested)</li>
                      <li><Link href={"https://dolphin-emu.org/"}>Dolphin</Link></li>
                      <li>Ship of Harkinian ( <Link href={"https://github.com/HarbourMasters/Shipwright/releases/latest"}>GitHub</Link> | <Link href={"https://discord.com/invite/shipofharkinian"}>Discord</Link> )</li>
                    </ul>
                    </p>
                    <h3>Procedure</h3>
                    <p>
                      <ol type={"1"}>
                        <li>Dump your game disc using your <b>modded Wii or Wii U</b>. Transfer the dump to your PC.</li>
                        <ol type={"a"}>
                          <li><Link href={"https://wii.guide/dump-games.html"}>Dumping Wii/Gamecube Games</Link> @ Wii Guide</li>
                          <li><Link href={"http://wiki.dolphin-emu.org/index.php?title=Ripping_Games"}>Ripping Games</Link> @ Dolphin Wiki</li>
                        </ol>
                        <li>Add the dump to your Dolphin games folders. If you don&apos;t have any configured, add one in Options -&gt; Configuration -&gt; Paths. You will need this for the next step.<br />
						  <Image src={image1} alt={"dump dolphin game list"}/>
						</li>
                        <li>Right-click the game in the list, click Properties, and scroll the tabs to the right to find Filesystem. Find the appropriate TGC file listed below, and extract it into your Dolphin games directory.<br />
						  <Image src={image2} alt={"dump dolphin filesystem"}/>
						</li>
                        <div className="dumpTable">
                          <div className="dumpCell dumpHead1">Disc</div>
                          <div className="dumpCell dumpHead2">Game</div>
                          <div className="dumpCell dumpHead3">Filename</div>
                          <div className="dumpCell dumpCellLeft">Ocarina of Time & Master Quest (PAL)</div>
                          <div className="dumpCell">Ocarina of Time & Master Quest</div>
                          <div className="dumpCell">files/zlj_f.tgc</div>
                          <div className="dumpCell dumpCellLeft">Zelda Collector&apos;s Edition (PAL)</div>
                          <div className="dumpCell">Ocarina of Time</div>
                          <div className="dumpCell">files/tgc/zelda_PAL_093003.tgc</div>
                          <div className="dumpCell dumpCellLeft">Zelda Collector&apos;s Edition (US)</div>
                          <div className="dumpCell">Majora&apos;s Mask</div>
                          <div className="dumpCell">files/tgc/majora_ENG_091003.tgc</div>
                        </div>
                        <li>Find the TGC file listed in Dolphin&apos;s game list, and go to its Filesystem properties like in step 3. Find the .n64 file in there, and extract it to your port folder.</li>
                        <ul>
						  <li> Ocarina of Time (PAL)&emsp;&emsp;-&gt; zlp_f.n64</li>
						  <li> OoT Master Quest (PAL) &ensp;&nbsp;-&gt; urazlp_f.n64</li>
						  <li> Majora&apos;s Mask (US)&nbsp;&emsp;&emsp;&emsp;-&gt; zelda2e.n64</li>
						</ul>
                        <li>Validate your dumped ROM using one of our verification sites</li>
						<ul>
						  <li>For SoH, use <Link href={"https://ship.equipment"}>ship.equipment</Link></li>
						  <li>For 2ship, use <Link href={"https://2ship.equipment"}>2ship.equipment</Link></li>
						</ul>
                        <li>Proceed with <b>setting up your port</b> as dictated in your <b>Platform Guide</b>.</li>
                      </ol>
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
