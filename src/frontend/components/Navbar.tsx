import { FC } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import logo from '../../../public/shipofharkinian.png';
import { useRouter } from 'next/router';

export const Navbar: FC<{}> = () => {
  const router = useRouter();

  return (
    <nav className="bg-zinc-800 drop-shadow-xl text-white text-sm">
      <div className="mx-auto max-w-screen-md flex py-4">
        <div className="sm:flex hidden items-center">
          <Image src={logo} alt="Ship of Harkinian Logo" height={50} width={50} />
          <div>
            <div className="text-5xl font-extrabold">Ship</div>
            <div className="text-sm font-bold text-zinc-300">OF HARKINIAN</div>
          </div>
        </div>
        <div className="flex items-center flex-1 justify-center sm:justify-end">
          {router.route !== '/' && (
            <Link href="/">
              <a className="py-2 px-4 m-1 hover:bg-zinc-700 rounded-full">Home</a>
            </Link>
          )}
          <Link href="/download">
            <a
              className={`py-2 px-4 m-1 hover:bg-zinc-700 rounded-full ${
                router.route === '/download' ? 'bg-zinc-700' : ''
              }`}
            >
              Download
            </a>
          </Link>
          <Link href="/faq">
            <a
              className={`py-2 px-4 m-1 hover:bg-zinc-700 rounded-full ${router.route === '/faq' ? 'bg-zinc-700' : ''}`}
            >
              FAQ
            </a>
          </Link>
          <Link href="/changelog">
            <a
              className={`py-2 px-4 m-1 hover:bg-zinc-700 rounded-full ${
                router.route === '/changelog' ? 'bg-zinc-700' : ''
              }`}
            >
              Changelog
            </a>
          </Link>
          <a
            className="py-2 px-4 m-1 hover:bg-zinc-700 rounded-full"
            href="https://discord.com/invite/shipofharkinian"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>
        </div>
      </div>
    </nav>
  );
};
