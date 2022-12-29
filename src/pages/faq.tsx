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
                    <p>Head over to our Discord and download the latest release in the #downloads channel. Afterwards, follow the readme.md file included with the download for further instructions.</p>
                    <p>We do not advice following YouTube tutorials. They&apos;re often outdated compared to our own documentation.</p>

                    <h3 id="how-do-i-update-ship-of-harkinian">
                      <a href="#how-do-i-update-ship-of-harkinian">How do I update Ship of Harkinian?</a>
                    </h3>
                    <ol>
                      <li>Head over to our Discord and download the latest release in the #downloads channel.</li>
                      <li>For all platforms, extract the files from the newer version to your existing SoH directory, overwriting the old files.</li>
                      <li>
                        When updating to a newer major release that requires a new OTR (see <a href="#what-do-the-release-numbers-mean">here</a> for when a new OTR is required), do the following:
                        <ul>
                          <li><strong>Windows:</strong> Delete your current .otr files and the Extract folder inside the folder you have SoH installed in. Afterwards, generate the OTR like you did when first installing SoH.</li>
                          <li><strong>Linux/SteamDeck:</strong> Delete the .otr files inside the folder you have SoH installed in. Afterwards, generate the OTR like you did when first installing SoH.</li>
                          <li><strong>MacOS:</strong> Delete the .otr files inside the ~/Library/Application Support/com.shipofharkinian.soh folder. Afterwards, generate the OTR like you did when first installing SoH.</li>
                          <li><strong>Wii U/Switch:</strong> Generate the OTR on your PC platform of choice, then replace the OTR on your Wii U/Switch with the new one. Make sure the version used to generate the OTR is the same as what you&apos;re playing with on Wii U/Switch.</li>
                        </ul>
                      </li>
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
                    <p>You can check the sha1 hash of your ROM <a href="https://romhacking.net/hash" target="_blank" rel="noreferrer">here</a>.</p>
                    <h4>Ocarina of Time Debug PAL GC (not Master Quest)</h4>
                    <blockquote>
                      <p>Currently the recommended option</p>
                    </blockquote>
                    <pre>
                      <code>
                        Build team: `zelda@srd022j` <br />
                        Build date: `03-02-21 00:49:18` (year-month-day) <br />
                        sha1: cee6bc3c2a634b41728f2af8da54d9bf8cc14099
                      </code>
                    </pre>
                    <h4>Ocarina of Time PAL GameCube</h4>
                    <blockquote>
                      <p>Our only supported retail ROM of non Master Quest.</p>
                    </blockquote>
                    <pre>
                      <code>sha1: 0227d7c0074f2d0ac935631990da8ec5914597b4</code>
                    </pre>
                    <h4>Ocarina of Time Debug PAL GC MQ</h4>
                    <blockquote>
                      <p>Dungeons will be Master Quest</p>
                    </blockquote>
                    <pre>
                      <code>
                        Build team: `zelda@srd022j` <br />
                        Build date: `03-02-21 00:16:31` (year-month-day) <br />
                        sha1: 079b855b943d6ad8bd1eb026c0ed169ecbdac7da (Produced by decomp) <br />
                        sha1: 50bebedad9e0f10746a52b07239e47fa6c284d03 (Alternate)
                      </code>
                    </pre>

                    <h3 id="is-this-legal"><a href="#is-this-legal">Is this legal?</a></h3>
                    <p>We are not distributing any Nintendo owned IP. Users must provide legally obtained ROMs to experience Ship of Harkinian.
                      We also have a strict no piracy policy enforced around our community.
                    </p>

                    <h3 id="what-features-are-planned"><a href="#what-features-are-planned">What features are planned?</a></h3>
                    <p>In completely random order, these are (some of) the things currently on our radar, no ETAs:</p>
                    <ul>
                      <li>Custom model support</li>
                      <li>Custom high resolution texture support</li>
                      <li>Mod support (with scripting language)</li>
                      <li>Online functionality</li>
                      <li>Parity with other randomizers</li>
                      <li>Support for more ROM versions</li>
                    </ul>

                    <h3 id="why-aren-t-etas-given"><a href="#why-aren-t-etas-given">Why aren&apos;t ETAs given?</a></h3>
                    <p>This is a project done by volunteers during their spare time for free. The work gets accomplished by whoever&apos;s
                      interested in implementing what, with a few things being prioritized as milestones for stable releases.
                      To set deadlines would be to create unrealistic expectations that would likely never be met and cause disappointment.
                    </p>

                    <h3 id="will-you-also-port-majora-s-mask"><a href="#will-you-also-port-majora-s-mask">Will you also port Majora&apos;s Mask?</a></h3>
                    <p>Eventually. Work cannot even begin on this until the MM decomp project has completed. Check back in 2024.</p>

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
