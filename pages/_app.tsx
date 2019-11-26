import React from 'react';
import Router from 'next/router';
import { Fabric } from 'office-ui-fabric-react';

function removedServerStyle() {
  const ssrStyle = document.querySelector('#ssr-style');
  if (ssrStyle && ssrStyle.parentNode) {
    setTimeout(() => {
      ssrStyle.parentNode.removeChild(ssrStyle);
      Router.events.off('routeChangeComplete', removedServerStyle);
      console.log('Removed style from server!');
    }, 0);
  }
}
Router.events.on('routeChangeComplete', removedServerStyle);

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fabric>
      <Component {...pageProps} />
    </Fabric>
  );
};

export default MyApp; 