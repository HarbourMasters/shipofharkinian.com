import type { NextPage } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../components/PageHeader';
import { PageFooter } from '../components/PageFooter';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "FAQ";

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

                    <h3 id="how-do-i-play-ship-of-harkinian">
                      <a href="#how-do-i-play-ship-of-harkinian">How do I play Ship of Harkinian?</a>
                    </h3>
                    <p><a href="https://github.com/HarbourMasters/Shipwright/releases/latest">Click here</a> to go to our GitHub releases page and download the file that matches your desired platform, then follow the readme, or check our <a href="https://www.shipofharkinian.com/setup-guide">setup guide</a> for more detailed instructions.</p>
                    <p>We do not advise following any external tutorials, especially on YouTube. They&apos;re often outdated compared to our own documentation.</p>

                    <h3 id="how-do-i-update-ship-of-harkinian">
                      <a href="#how-do-i-update-ship-of-harkinian">How do I update Ship of Harkinian?</a>
                    </h3>
                    <ol>
                      <li><a href="https://github.com/HarbourMasters/Shipwright/releases/latest">Click here</a> to go to our GitHub releases page and download the file that matches your desired platform.</li>
                      <li>For all platforms, extract <b>all</b> the files from the newer version to your existing SoH directory, overwriting the old files.</li>
                      <li>If the update requires a new extraction of oot.otr/oot-mq.otr, you will be prompted to do so.</li>
                    </ol>

                    <h3 id="what-do-the-release-numbers-mean">
                      <a href="#what-do-the-release-numbers-mean">What do the release numbers mean?</a>
                    </h3>
                    <p>The releases follow a pattern with 3 numbers:</p>
                    <p>The first number (x.0.0) means it&apos;s a major release with new features that requires you to regenerate the OTR. How to do this is explained <a href="#how-do-i-update-ship-of-harkinian">here</a>.</p>
                    <p>The second number (0.x.0) means it&apos;s a major release with new features that doesn&apos;t require a new OTR.</p>
                    <p>The third number (0.0.x) means it&apos;s a bugfix release that doesn&apos;t require a new OTR.</p>
                    <p>Major releases always have their own name which is a character&apos;s name from a Sci-fi movie. Bugfix releases follow the NATO phonetic alphabet (Alfa, Bravo, Charlie, etc).</p>

                    <h3 id="how-can-i-get-the-right-rom">
                      <a href="#how-can-i-get-the-right-rom">How can I get the right rom?</a>
                    </h3>
                    <p>We cannot help you with this. You must own a legal copy of the game and dump the ROM using
                      other software not provided by us. The ROMs we support are listed below.
                    </p>

                    <h3 id="what-roms-are-supported">
                      <a href="#what-roms-are-supported">What ROMs are supported?</a>
                    </h3>
                    <p>SoH currently supports all PAL (European/Australian) versions of the game, both N64 cartridges and GC discs. Which you use is entirely up to you as all are equally supported. To make sure you have a supported ROM after dumping your copy, put it into <a href="http://ship.equipment">this tool</a>.</p>
					
					<h3 id="why-only-pal-supported">
						<a href="#why-only-pal-supported">Why are only PAL versions supported?</a>
					</h3>
					<p>
						The decomp started on the debug version because debug statements helped in identifying functionality during the decomp process. The only debug version available was PAL. In adding support for other versions to SoH, other PAL versions were much easier because the underlying functionality (especially with language) was the same.<br />
						NTSC will take a bit more to get working the first time because of that and other differences, but afterward should be easier to add support for multiple NTSC versions.
					</p>

                    <h3 id="is-this-legal"><a href="#is-this-legal">Is this legal?</a></h3>
                    <p>We are not distributing any Nintendo owned IP. Users must provide legally obtained ROMs to experience Ship of Harkinian.
                      We also have a strict no piracy policy enforced around our community.
                    </p>

                    <h3 id="what-features-are-planned"><a href="#what-features-are-planned">What features are planned?</a></h3>
                    <p>In completely random order, these are (some of) the things currently on our radar, no ETAs:</p>
                    <ul>
                      <li>Mod support (with scripting language)</li>
                      <li>Online functionality</li>
                      <li>Parity with other randomizers</li>
                      <li>Support for NTSC ROM versions</li>
					  <li>Support for more custom asset types (soudns, scene geometry, text, etc)</li>
                    </ul>

                    <h3 id="why-aren-t-etas-given"><a href="#why-aren-t-etas-given">Why aren&apos;t ETAs given?</a></h3>
                    <p>This is a project done by volunteers during their spare time for free. The work gets accomplished by whoever&apos;s
                      interested in implementing what, with a few things being prioritized as milestones for stable releases.
                      To set deadlines would be to create unrealistic expectations that would likely never be met and cause disappointment.
                    </p>

                    <h3 id="will-you-also-port-majora-s-mask"><a href="#will-you-also-port-majora-s-mask">Will you also port Majora&apos;s Mask?</a></h3>
                    <p>Eventually. Work has begun, but will still take a while. Check back in mid-2024.</p>

                    <h3 id="will-you-port-soh-to-x-platform-console"><a href="#will-you-port-soh-to-x-platform-console">Will you port SOH to x platform/console?</a></h3>
                    <p>This primarily relies on someone contributing to the project the work to support x platform/console. If you
                      think you can help us support a new platform/console please reach out!
                    </p>

                    <h3 id="i-used-save-states-now-things-are-broken"><a href="#i-used-save-states-now-things-are-broken">I used save states, now things are broken!</a></h3>
                    <p>Save states are an experimental feature and not fully supported. Use at your own risk.</p>

                    <h3 id="why-is-this-project-called-ship-of-hark--"><a href="#why-is-this-project-called-ship-of-hark--">Why is this project called Ship of Hark--</a></h3>
                    <blockquote>
                      <p>Enough! My ship sails in the morning!</p>
                    </blockquote>

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
