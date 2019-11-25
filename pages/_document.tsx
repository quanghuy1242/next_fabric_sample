import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { resetIds } from '@uifabric/utilities';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    resetIds(1);
    return (
      <Html>
        <Head>
          <link rel='icon' href='/favicon.ico' />
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