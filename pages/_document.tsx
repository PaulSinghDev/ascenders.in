import { AppPropsType, AppType } from "next/dist/shared/lib/utils";
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

class PoaApp extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    // Make style sheet
    const sheet = new ServerStyleSheet();
    // Get the original page
    const originalPage = ctx.renderPage;

    try {
      // Get the original Props
      const initialProps = await Document.getInitialProps(ctx);
      // Change the render page method to also collect our stylesheet
      ctx.renderPage = () =>
        originalPage({
          enhanceApp: (App: AppType) => (props: AppPropsType) =>
            sheet.collectStyles(<App {...props} />),
        });
      // Return the updated element list
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (e) {
      console.log(e);
      return originalPage();
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default PoaApp;
