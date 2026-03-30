import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';


const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Bombchu Beehives";

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
                      <a href="#explaination">Bombchu Beehives</a>
                    </h2>
                    <p>By timing your Bombchus to detonate at the correct time, or using Deku Nuts, you can detonate the Bombchu next to the Beehive to get the check.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/ChuBee1.webm" type="video/webm"/>
                    </video>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/ChuBee2.webm" type="video/webm"/>
                    </video>
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