import React from 'react';
import { Stylesheet } from '@uifabric/merge-styles';
import { loadStyles } from '@microsoft/load-themed-styles';

const MyApp = ({ Component, pageProps, style }) => {
  return <>
    <style dangerouslySetInnerHTML={{ __html: style }} />
    <Component {...pageProps} />
  </>
};

MyApp.getInitialProps = async () => {
  const styleSheet = Stylesheet.getInstance();
  styleSheet.setConfig({
    onInsertRule: (rule) => {
      loadStyles(rule);
    }
  });
  return { style: styleSheet.getRules(true) };
};

export default MyApp; 