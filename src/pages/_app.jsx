import '@/styles/global.css';

import localFont from '@next/font/local';

const reenieBeanie = localFont({
  src: [
    {
      path: './ReenieBeanie.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
});

const App = ({ Component, pageProps }) => {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
