import 'src/styles/globals.css';
import 'src/styles/header.css';
import 'src/styles/footer.css';
import 'src/styles/frontpage.css';
import 'src/styles/contentpage.css';
import 'src/styles/youtubevideo.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default appWithTranslation(MyApp);
