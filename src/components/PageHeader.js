
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MetaHeader } from './MetaHeader';
import { NavMenu } from './NavMenu';
import logo from '../../public/logo.png';

export function PageHeader(props) {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset / window.innerHeight);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);

  var headerClass;

  if (offset < 0.8 && props.pageClass === "home") {
    headerClass = "transparent";
  }
  
  return (
    <>
      <MetaHeader pageName={props.pageName} pageClass={props.pageClass} />

      <section id="header" className={headerClass}>
    		<div className="container">
          <div className="column left">
            <div className="logo">
              <Link href="/">
                <a><Image src={logo} alt="Ship of Harkinian Logo" /></a>
              </Link>
            </div>
          </div>
          <div className="column right">
            <NavMenu />
          </div>
    		</div>
      </section>

    </>
  );
}
