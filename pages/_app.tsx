import '../style/reset.css';
import 'antd/dist/antd.css';
import '../style/styles.css';

import { AppProps } from 'next/dist/next-server/lib/router/router';
import { UserProvider } from '../lib/contexts/UserContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}

export default MyApp;
