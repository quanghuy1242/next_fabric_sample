import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { resetIds } from '@uifabric/utilities';
import { loadStyles } from '@microsoft/load-themed-styles';
import { Stylesheet } from '@uifabric/merge-styles';

interface IDocumentProps {
  style: string
}

class MyDocument extends Document<IDocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const styleSheet = Stylesheet.getInstance();
    styleSheet.setConfig({
      onInsertRule: (rule) => {
        loadStyles(rule);
      }
    });
    return { ...initialProps, style: styleSheet.getRules(true) };
  }

  render() {
    resetIds(1);
    return (
      <Html>
        <Head>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        <style dangerouslySetInnerHTML={{ __html: this.props.style }} />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument