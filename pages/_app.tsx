import '../style/reset.css';
import 'antd/dist/antd.css';
import '../style/styles.css';

import { AppProps } from 'next/dist/next-server/lib/router/router';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
