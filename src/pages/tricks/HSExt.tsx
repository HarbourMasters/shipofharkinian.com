import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { PageHeader } from '../../components/PageHeader';
import { PageFooter } from '../../components/PageFooter';


const Home: NextPage = () => {
  const { t } = useTranslation();
  const pageName = "Item Extension";

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
                      <a href="#explaination">Item Extension</a>
                    </h2>
                    <p>While using Hookshot, Bow or Slingshot, the player can hold forward, back out of using the item, then quickly re-use the item to break Link&quot;s animations, causing the item being used to be pushed forwards a tiny amount.
                    </p>
                    <p>This small change can allow for hookshotting objects previously out of reach, or hitting things in or on the other side of collision
                    </p>
                    <h2>List of relevant uses:
                    </h2>
                    <p>Both DMT boulder Gold Skulltulas can be killed and the token taken with Hookshot Extension, while other items can be used to kill it and allow the token to be grabbed with another trick.
                    </p>
                    <p>By using hookshot extension and targeting the lower part of the broken bridge, it can be crossed with only Hookshot using Hookshot Extension.
                    </p>
                    <p>In Water Temple, the switch in a cage with a Gold Skulltula can be hit with Bow or Slingshot through the grate using Extension.
                    </p>
                    <p>In Master Quest Shadow Temple, you can use Bow or Slingshot extension to shoot into the Song of Time block and shoot the eye target behind it without playing the song, spawning a hookshot target.
                    </p>
                    <p>You can shoot the switch on 4f of Spirit Temple through the bars with Hookshot (as Adult), Bow or Slingshot using Extension.
                    </p>
                    <p>You can shoot the switch in Spirit Trial using bow or Slingshot with extension.
                    </p>
                    <p>You can break the pot in Ice Cavern Map Room without melting the ice with hookshot Extension. The Master Quest gold skulltula in the same spot can also be grabbed 
                    </p>
                    <p>You can use Extension to hit the eye target behind the boulder near the start of Master Quest Bottom of the Well either with Slingshot or as Child using a Bow.
                    </p>
                    <h2>List of uses that may become relevant on alternate builds or with future shuffles/tricks:
                    </h2>
                    <p>You can reach the Stone Umbrella room in Master Quest shadow by using Extension with a Bow or Slingshot to shoot through the grate.
                    </p>
                    <p>You can kill the Gold Skulltula in the red ice in Master Quest Ice Cavern from the Song of Time blocks as Adult. This is more precise than most due to the small gap between the block and the ice.
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