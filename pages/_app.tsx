import '../style/reset.css';
import 'antd/dist/antd.css';
import '../style/styles.css';

import { AppProps } from 'next/dist/next-server/lib/router/router';
import { AuthProvider } from '../lib/contexts/AuthContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
