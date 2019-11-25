import React from 'react';
import Router from 'next/router';
import { Fabric } from 'office-ui-fabric-react';

Router.events.on('routeChangeComplete', () => {
  const ssrStyle = document.querySelector('#ssr-style');
  if (ssrStyle && ssrStyle.parentNode) {
    setTimeout(() => {
      ssrStyle.parentNode.removeChild(ssrStyle);
      console.log('Removed style from server!');
    }, 0);
  }
});

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fabric>
      <Component {...pageProps} />
    </Fabric>
  );
};

export default MyApp; 