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
                    <p>While using Hookshot, Bow or Slingshot, the player can hold forward, back out of using the item, then quickly re-use the item to break Link&apos;s animations, causing the item being used to be pushed forwards a tiny amount.
                    </p>
                    <p>This small change can allow for hookshotting objects previously out of reach, or hitting things in or on the other side of collision
                    </p>
                    <p>It is recommended to enable &quot;Flawed Boulder Collision&quot; and &quot;Visible Collision&quot; with this trick, as they cover similar cases where Extension is not technically required.
                    </p>
                    <h3>List of relevant uses
                    </h3>
                    <p>DMT Lower Boulder Gold Skulltula can be killed and the token taken with Hookshot Extension, while Bow or Slingshot Extension can be used to kill it and then collect it with a different trick.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HSExtDMTLowerSkull1.webm" type="video/webm"/>
                    </video>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HSExtDMTLowerSkull2.webm" type="video/webm"/>
                    </video>
                    <p>DMT Upper Boulder Gold Skulltula can be interacted with with Extension the same way, except Bow Extension cannot kill it. &quot;Flawed Boulder Collision&quot; with Bow works, however.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HSExtDMTUpperHook.webm" type="video/webm"/>
                    </video>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HSExtDMTUpperSling.webm" type="video/webm"/>
                    </video>
                    <p>In Water Temple, the switch in a cage with a Gold Skulltula can be hit with Bow or Slingshot through the grate using Extension.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HSExtWaterCage.webm" type="video/webm"/>
                    </video>
                    <p>In Master Quest Shadow Temple, you can use Bow or Slingshot Extension to shoot into the Song of Time block and shoot the Eye Target behind it without playing the song, spawning a hookshot target.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HSExtMQShadowSoT.webm" type="video/webm"/>
                    </video>
                    <p>You can shoot the switch on 4F of Spirit Temple through the bars with Hookshot (as Adult), Bow or Slingshot using Extension.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HSExt4FSpirit.webm" type="video/webm"/>
                    </video>
                    <p>You can shoot the switch in Spirit Trial using Bow or Slingshot with Extension.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HSExtSpiritTrial.webm" type="video/webm"/>
                    </video>
                    <p>You can break the pot in Ice Cavern Map Room without melting the ice with Hookshot Extension. The Master Quest Gold Skulltula in the same spot can also be grabbed this way, though it is more precise.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HSExtIcePot.webm" type="video/webm"/>
                    </video>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HSExtMQIceSkull.webm" type="video/webm"/>
                    </video>
                    <h3>List of uses that may become relevant on alternate builds or with future Tricks or Shuffles
                    </h3>
                    <p>You can reach the Stone Umbrella room in Master Quest Shadow Temple by using Extension with a Bow or Slingshot to shoot through the grate.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HSExtMQShadowSwitch.webm" type="video/webm"/>
                    </video>
                    <p>You can use Bow or Slingshot Extension to shoot the caged pot in Master Quest Bottom of the Well, and then grab the fairy as it flies through the wall. This is not a logical fairy if dungeon pots are shuffled, as the pot item replaces it and is not collectable this way.
                    </p>
                    <video controls width="853" height="480">
                      <source src="./../trickvids/HSExtMQBotWFairy.webm" type="video/webm"/>
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