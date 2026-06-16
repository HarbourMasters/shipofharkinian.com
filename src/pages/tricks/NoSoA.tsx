import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Image from 'next/image';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';

import InsideFence from './images/InsideFenceGrotto.jpg';
import HFNearValley from './images/HFNearValleyGrotto.jpg';
import HFNearBridge from './images/HFNearBridgeGrotto.jpg';
import HFLoneTree from './images/HFLoneTreeGrotto.jpg';
import KFStorms from './images/KFStormsGrotto.jpg';
import SFMWolfos from './images/SFMWolfosGrotto.jpg';
import SFMStorms from './images/SFMStormsGrotto.jpg';
import KakCentral from './images/KakCentralGrotto.jpg';
import DMTStorms from './images/DMTStormsGrotto.jpg';
import ZRStorms from './images/ZRStormsGrotto.jpg';
import ZDStorms from './images/ZDGrotto.jpg';
import GVTent from './images/GVTentGrotto.jpg';
import GF from './images/GFGrotto.jpg';

const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Grottos Without Stone of Agony";

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
                      <a href="#explaination">Grottos Without Stone of Agony</a>
                    </h2>
                    <p>This trick makes it so that you do not need Stone of Agony to locate and enter hidden grottos.
                    </p>
                    <p>Grottos that exist under boulders are not counted (except for Hyrule Field Near Valley Grotto as Adult), but those within stone circles or other environmental clues hints are, 
                        and this affects both grottos you blast or hammer open and those opened via Song of Storms. 
                    </p>
                    <p> If grottos are randomised it affects the ability to enter the grotto and reach the area shuffled to be behind it,
                        not the vanilla grottos that would have been located there.
                    </p>
                    <h3>List of Affected Grottos
                    </h3>
                    <p>Hyrule Field Inner Fence Grotto.
                    </p>
                    <Image src={InsideFence} alt="Inside Fence Grotto" />
                    <p>Hyrule Field Near Valley Grotto, even as Adult when the Boulder exists.
                    </p>
                    <Image src={HFNearValley} alt="Hyrule Field Near Valley Grotto" />
                    <p>Hyrule Field Near Bridge Grotto.
                    </p>
                    <Image src={HFNearBridge} alt="Hyrule Field Near Bridge Grotto" />
                    <p>Hyrule Field Lone Tree Grotto.
                    </p>
                    <Image src={HFLoneTree} alt="Hyrule Field Lone Tree Grotto" />
                    <p>Kokiri Forest Storms Grotto.
                    </p>
                    <Image src={KFStorms} alt="Kokiri Forest Storms Grotto" />
                    <p>Sacred Forest Meadow Wolfos Grotto.
                    </p>
                    <Image src={SFMWolfos} alt="Sacred Forest Meadow Storms Grotto" />
                    <p>Sacred Forest Meadow Storms Grotto.
                    </p>
                    <Image src={SFMStorms} alt="Sacred Forest Meadow Storms Grotto" />
                    <p>Kakariko Village Central Grotto.
                    </p>
                    <Image src={KakCentral} alt="Sacred Forest Meadow Storms Grotto" />
                    <p>Death Mountain Trail Storms Grotto.
                    </p>
                    <Image src={DMTStorms} alt="Death Mountain Trail Storms Grotto" />
                    <p>Zora&apos;s River Storms Grotto.
                    </p>
                    <Image src={ZRStorms} alt="Zora's River Storms Grotto" />
                    <p>Zora&apos;s Domain Grotto.
                    </p>
                    <Image src={ZDStorms} alt="Zora's Domain Grotto" />
                    <p>Gerudo Valley Behind Tent Grotto.
                    </p>
                    <Image src={GVTent} alt="Gerudo Valley Tent Grotto" />
                    <p>Gerudo Fortress Grotto.
                    </p>
                    <Image src={GF} alt="Gerudo Fortress Grotto" />
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