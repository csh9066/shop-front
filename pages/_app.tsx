import '../style/reset.css';
import 'antd/dist/antd.css';
import '../style/styles.css';

import Header from '../components/base/Header';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Header />
        <div style={{ height: '163px' }}></div>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
