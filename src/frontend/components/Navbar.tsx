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
        <Link href="/">
          <a>
            <div className="sm:flex hidden items-center">
              <Image src={logo} alt="Ship of Harkinian Logo" height={50} width={50} />
              <div>
                <div className="text-5xl font-extrabold">Ship</div>
                <div className="text-sm font-bold text-zinc-300">OF HARKINIAN</div>
              </div>
            </div>
          </a>
        </Link>
        <div className="flex items-center flex-1 justify-center sm:justify-end">
          {router.route !== '/' && (
            <Link href="/">
              <a className="py-2 px-4 m-1 hover:bg-zinc-700 rounded-full">Home</a>
            </Link>
          )}
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
            className="py-2 px-4 m-1 flex items-center hover:bg-zinc-700 rounded-full"
            href="https://discord.com/invite/shipofharkinian"
            target="_blank"
            rel="noreferrer"
          >
            Discord
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="ml-2 w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};
