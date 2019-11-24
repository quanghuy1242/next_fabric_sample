import React from 'react';
import { loadStyles } from '@microsoft/load-themed-styles';
import { Stylesheet } from '@uifabric/merge-styles';

const App = ({ Component, pageProps, style }) => {
  return <>
    <style dangerouslySetInnerHTML={{ __html: style }} />
    <Component {...pageProps} />
  </>
};

App.getInitialProps = async () => {
  const styleSheet = Stylesheet.getInstance();
  styleSheet.setConfig({
    onInsertRule: (rule) => {
      loadStyles(rule);
    }
  });
  return { style: styleSheet.getRules(true) }
};

export default App;