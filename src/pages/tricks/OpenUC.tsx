import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';

import Forest from './images/OpenUCForest.jpg';
import MQForest from './images/OpenUCMQForest.jpg';
import WaterCracked from './images/OpenUCWaterCracked.jpg';
import WaterTorch from './images/OpenUCWaterTorch.jpg';
import MQWaterLong from './images/OpenUCMQWaterLong.jpg';
import BotW1 from './images/OpenUCBotW1.jpg';
import BotW2 from './images/OpenUCBotW2.jpg';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Open Underwater Chests";

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
                    <h2 id="explaination">
                      <a href="#explaination">Open Underwater Chests</a>
                    </h2>
                    <p>By default, underwater chests cannot be opened, requiring you to drain the water first. This restriction can be removed by first hookshotting the chests.
                    </p>
                    <h3>List of relevant Underwater Chests
                    </h3>
                    <p>Forest Temple Well Chest.
                    </p>
                    <Image src={Forest} alt="Forest Temple Underwater Chest" />
                    <p>Master Quest Forest Temple Well Chest.
                    </p>
                    <Image src={MQForest} alt="Master Quest Forest Temple Underwater Chest" />
                    <p>Water Temple Cracked Wall Chest.
                    </p>
                    <Image src={WaterCracked} alt="Water Temple Cracked Wall Underwater Chest" />
                    <p>Master Quest Water Temple Longshot Chest.
                    </p>
                    <Image src={MQWaterLong} alt="Master Quest Water Temple Longshot Underwater Chest" />
                    <h3>List of Underwater Chests that may become relevant with future Tricks or Shuffles
                    </h3>
                    <p>Water Temple Shell Blade Room Chest.
                    </p>
                    <Image src={WaterTorch} alt="Water Temple Shell Blade Room Underwater Chest" />
                    <p>Bottom of the Well Underwater Chests.
                    </p>
                    <Image src={BotW1} alt="Bottom of the Well Underwater Chest" />
                    <Image src={BotW2} alt="Bottom of the Well Underwater Chest" />
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