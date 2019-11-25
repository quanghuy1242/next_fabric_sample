import React, { useEffect } from 'react';
import { Fabric } from 'office-ui-fabric-react';

const MyApp = ({ Component, pageProps }) => {
  return (
    <Fabric>
      <Component {...pageProps} />
    </Fabric>
  );
};

export default MyApp; 