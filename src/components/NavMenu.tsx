import Link from 'next/link';
import React, { useRef } from 'react';
import { useTranslation } from 'next-i18next';

export function NavMenu() {

  const { t } = useTranslation();
  const menuDiv = useRef<HTMLDivElement>(null);
  const invertClass = () => {
    if (menuDiv.current!.className == "menu") {
      menuDiv.current!.className = "menu open";
    } else {
      menuDiv.current!.className = "menu";
    }
  };

  return (
    <div className="menu" ref={menuDiv}>
      <nav className="navMenu">
        <div className="menuOverlay" onClick={invertClass}> </div>
        <div className="menuContainer">
          <div className="hamburger" onClick={invertClass}>
            <div className="lettuce"></div>
            <div className="burger"></div>
            <div className="bun"></div>
          </div>
          <section className="menuList">
            <ul>
              <li><Link href="/"><a>{t('HOME')}</a></Link></li>
              <li><Link href="/setup-guide/"><a>{t('SETUP GUIDE')}</a></Link></li>
              <li><Link href="/faq/"><a>{t('FAQ')}</a></Link></li>
              <li><Link href="/changelog/"><a>{t('CHANGELOG')}</a></Link></li>
              <li><Link href="/randomizer/"><a>{t('RANDOMIZER')}</a></Link></li>
            </ul>
            <div className="socials">
              <Link href="https://discord.com/invite/shipofharkinian">
                <a target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-169 292.9 256 198.2">
                    <title>Discord</title>
                    <path d="M47.9,309.5c-16.6-7.8-34.3-13.4-52.8-16.6c-2.3,4.1-4.9,9.6-6.8,14c-19.7-3-39.2-3-58.5,0   c-1.8-4.4-4.6-9.9-6.8-14c-18.5,3.2-36.3,8.9-52.9,16.6c-33.4,50.5-42.5,99.8-38,148.3c22.2,16.6,43.7,26.6,64.8,33.2   c5.2-7.2,9.9-14.8,13.9-22.8c-7.6-2.9-14.9-6.5-21.8-10.6c1.8-1.4,3.6-2.8,5.4-4.2c42.1,19.7,87.9,19.7,129.5,0   c1.8,1.5,3.5,2.9,5.4,4.2c-6.9,4.2-14.3,7.8-21.9,10.7c4,8,8.6,15.7,13.9,22.8c21.1-6.6,42.6-16.6,64.8-33.2   C91.2,401.6,76.8,352.8,47.9,309.5z M-83.5,428c-12.6,0-23-11.8-23-26.2s10.1-26.2,23-26.2c12.9,0,23.2,11.8,23,26.2   C-60.5,416.2-70.7,428-83.5,428z M1.5,428c-12.6,0-23-11.8-23-26.2s10.1-26.2,23-26.2c12.9,0,23.2,11.8,23,26.2   C24.5,416.2,14.4,428,1.5,428z"/>
                  </svg>
                </a>
              </Link>
              <Link href="https://github.com/HarbourMasters/Shipwright">
                <a target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.6 31.8">
                    <title>GitHub</title>
                    <path d="M16.3,0C7.3,0,0,7.3,0,16.3c0,7.2,4.7,13.3,11.1,15.5c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8  c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4  c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4C7.4,10.7,6.8,9,7.7,6.8c0,0,1.4-0.4,4.5,1.7  c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4  c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5  C32.6,7.3,25.3,0,16.3,0z"/>
                  </svg>
                </a>
              </Link>
            </div>
          </section>

        </div>
      </nav>
    </div>
  );
}
