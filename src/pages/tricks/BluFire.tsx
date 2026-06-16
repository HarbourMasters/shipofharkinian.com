import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Blue Fire Beyond Red Ice";

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
                      <a href="#explaination">Blue Fire Beyond Red Ice</a>
                    </h2>
                    <p>Blue Fire (and Blue Fire Arrows by consequence) does more than melt Red Ice. It can also be used to break Mud Walls, detonate Bomb Flowers and break the floor above King Dodongo.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/BlueFireMudWall.webm" type="video/webm"/>
                    </video>
                    <p>It is recommended to enable the &quot;Rebottle Blue Fire&quot; enhancement when enabling this trick to reduce backtracking.
                    </p>
                    <p>In order to logically stop Link the Goron you also need to have &quot;Stop Link the Goron with Din&apos;s Fire&quot; enabled due to the length of the Blue Fire animation.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/BlueFireLinktheGoron.webm" type="video/webm"/>
                    </video>
                    <p>For King Dodongo&apos;s floor, you need to have &quot;Dodongo&apos;s Cavern Smash the Boss Lobby Floor&quot; enabled to logically use Blue Fire Arrows to destroy the floor, due to the precision.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/BlueFireArrowsKD.webm" type="video/webm"/>
                    </video>
                    <p>It specifically does not include using Blue Fire on Bomb Flowers to expose Dead Hand in Master Quest Shadow Temple.
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