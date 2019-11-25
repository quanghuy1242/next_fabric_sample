import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { resetIds } from '@uifabric/utilities';
import { Stylesheet } from '@uifabric/styling';

interface DocumentProps {
  style: string;
}

class MyDocument extends Document<DocumentProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    const styleSheet = Stylesheet.getInstance();
    return { ...initialProps, style: styleSheet.getRules(true) };
  }

  render() {
    resetIds(1);
    return (
      <Html>
        <Head>
          <link rel='icon' href='/favicon.ico' />
          <style id="ssr-style" dangerouslySetInnerHTML={{ __html: this.props.style }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument