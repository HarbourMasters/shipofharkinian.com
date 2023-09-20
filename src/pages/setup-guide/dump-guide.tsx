import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';

import image1 from './images/image13.png';

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

                    <p>The below steps will explain how to <b>obtain a ROM</b> from your <b>legally</b> sourced, official game disc.<br />
                      <span className="guideNoteBold">Reminder: Obtaining the Official Game Disc is your responsibility.</span>
                    </p>
                    <h3>Requirements:</h3>
                    <p><ul>
                      <li>Softmodded <Link href={"https://wii.guide/"}>Wii</Link> or <Link href={"https://wiiu.hacks.guide/"}>Wii U</Link></li>
                      <li>PAL/European Gamecube Disc</li>
                      <li>Windows PC (it could work on Linux/macOS, but is currently untested)</li>
                      <li><Link href={"https://dolphin-emu.org/"}>Dolphin</Link></li>
                      <li><Link href={"https://mh-nexus.de/en/hxd/"}>HxD</Link> or equivalent hex editor</li>
                      <li>Ship of Harkinian ( <Link href={"https://github.com/HarbourMasters/Shipwright"}>GitHub</Link> | <Link href={"https://discord.com/invite/shipofharkinian"}>Discord</Link> )</li>
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
                        <li>Use <b>Dolphin</b> to extract the <b>file system contents</b> of your disc dump.</li>
                        <ol type={"a"}>
                          <li><Link href={"http://wiki.vg-resource.com/Dolphin"}>ISO Filesystem Browsing</Link> @ VG Resource Wiki</li>
                        </ol>
                        <li>Open the relevant <b>.tgc file</b> in HxD using the information in the table below:</li>
                        <div className="dumpTable">
                          <div className="dumpCell dumpHead1">Disc</div>
                          <div className="dumpCell dumpHead2">Game</div>
                          <div className="dumpCell dumpHead3">Filename</div>
                          <div className="dumpCell dumpCellLeft">Ocarina of Time & Master Quest</div>
                          <div className="dumpCell">Ocarina of Time & Master Quest</div>
                          <div className="dumpCell">files/zlj_f.tgc</div>
                          <div className="dumpCell dumpCellLeft">Zelda Collector&apos;s Edition</div>
                          <div className="dumpCell">Ocarina of Time</div>
                          <div className="dumpCell">files/tgc/zelda_PAL_093003.tgc</div>
                        </div>
                        <li>Open the &quot;Select block&quot; window (Ctrl + E). In the <b>Start-offset</b> field, enter the relevant <b>starting offset</b> from the table below:</li>
                        <div className="dumpTable">
                          <div className="dumpCell dumpHead1">Disc</div>
                          <div className="dumpCell dumpHead2">Game</div>
                          <div className="dumpCell dumpHead3">Starting Offset</div>
                          <div className="dumpCell twoRow vertMid dumpCellLeft">
                            <p>Ocarina of Time &amp; Master Quest</p>
                          </div>
                          <div className="dumpCell">Ocarina of Time</div>
                          <div className="dumpCell">1C3AA240</div>
                          <div className="dumpCell">Master Quest</div>
                          <div className="dumpCell">1E69CB38</div>
                          <div className="dumpCell dumpCellLeft">Zelda Collector&apos;s Edition</div>
                          <div className="dumpCell">Ocarina of Time</div>
                          <div className="dumpCell">1C669FC0</div>
                          <div className="dumpCell twoRow vertMid dumpCellLeft">
                            <p>AU OoT &amp; Master Quest</p>
                          </div>
                          <div className="dumpCell">Ocarina of Time</div>
                          <div className="dumpCell">1E69EEF4</div>
                          <div className="dumpCell">Master Quest</div>
                          <div className="dumpCell">1C3AC5FC</div>
                        </div>
                        <li>Ensure the <b>Length</b> and <b>Hex</b> options are checked, then enter <b>2000000 (2,000,000)</b> into the Length field.<br />
                          <Image src={image1} alt={"dump guide select block"}/></li>
                        <li>Once you&apos;ve entered the correct <b>Length</b> and <b>Start-offset</b>, click &quot;OK&quot;. The raw bytes of the ROM should be selected.</li>
                        <li>Copy the selected data (Ctrl + C)</li>
                        <ol type={"a"}>
                          <li>Create a new blank file (Ctrl + N)</li>
                          <li>Paste the data (Ctrl + N)<br />
                            <span className={"guideNote"}>Note: If HxD displays a message about <b>changing the file size</b>, click &quot;OK&quot;.</span></li>
                        </ol>
                        <li>Save the file (Ctrl + S) and place it in your Ship of Harkinian installation location, next to soh.exe.</li>
                        <li>Validate your dumped ROM using <Link href={"http://romhacking.net/hash"}>Hasher-js</Link>.</li>
                        <li>Proceed with <b>setting up Ship of Harkinian</b> as dictated in your <b>Platform Guide</b>.</li>
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
