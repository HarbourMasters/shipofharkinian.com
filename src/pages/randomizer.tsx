import type { NextPage } from 'next';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../components/PageHeader';
import { PageFooter } from '../components/PageFooter';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Randomizer";

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
                    <div className="textArea">
                      <h3 id="how-to-play-randomizer">
                        <a href="#how-to-play-randomizer">How to play randomizer</a>
                      </h3>
                      <ol>
                        <li>Go to the file select screen</li>
                        <li>Open the &quot;Randomizer Settings&quot; menu through the F1 menu under &quot;Randomizer&quot;.</li>
                        <li>Set desired settings in the same window</li>
                        <li>Hit the &quot;Generate Seed&quot; button</li>
                        <li>You will see several item icons at the top of your screen on the file select menu as well as hear a jingle indicating that it worked properly.</li>
                        <li>Create a new save file, and choose &quot;randomizer&quot; in the quest select screen. Your new savefile should have a label &quot;RAND&quot; next to it.</li>
                        <li>Play the randomizer!</li>
                      </ol>
                      <h3 id="how-to-share-seeds-or-start-a-new-save-with-an-existing-seed">
                        <a href="#how-to-share-seeds-or-start-a-new-save-with-an-existing-seed">How to share seeds or start a new save with an existing seed</a>
                      </h3>
                      <ol>
                        <li>Go to the file select screen</li>
                        <li>Locate your desired seed in the Randomizer folder.</li>
                        <li>If sharing a seed, send the other person this JSON file.</li>
                        <li>Drag and drop the JSON file of the desired seed onto the game window.</li>
                        <li>You will see several item icons at the top of your screen on the file select menu as well as hear a jingle indicating that it worked properly.</li>
                        <li>Create a new save file, and choose &quot;randomizer&quot; in the quest select screen. Your new savefile should have a label &quot;RAND&quot; next to it.</li>
                        <li>Play the randomizer!</li>
                      </ol>
                      <h3 id="how-to-go-back-to-playing-vanilla">
                        <a href="#how-to-go-back-to-playing-vanilla">How to go back to playing vanilla</a>
                      </h3>
                      <ol>
                        <li>Create a new savefile. If the game asks you to choose between multiple game modes during save creation, pick the one without &quot;randomizer&quot; in the logo. Your new savefile should have either no tag next to it, or the &quot;MQ&quot; tag.</li>
                        <li>Play the game!</li>
                      </ol>
                      <h3 id="help-im-stuck-with-my-randomizer">
                        <a href="#help-im-stuck-with-my-randomizer">Help, I&apos;m stuck with my Randomizer</a>
                      </h3>
                      <div>Keep calm and try the following</div>
                      <ol>
                        <li>Open the <a href="https://www.spoiledlog.com">Spoiler Viewer</a></li>
                        <li>Locate your Randomizer JSON file in the Randomizer folder</li>
                        <li>Open the file with the spoiler viewer</li>
                        <li>Find out what you are missing by checking the locations/playthrough/hints/...</li>
                        <li>Play the randomizer!</li>
                      </ol>
                      <div>If you still have issues finishing your seed: Feel free to ask on Discord</div>
                    </div>
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
