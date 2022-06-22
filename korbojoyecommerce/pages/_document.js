import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="UTF-8" />


          <link
            rel="icon"
            type="image/png"
            href="/assets/images/icons/favicon.png"
          />
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"></link>
          <link
            rel="preload"
            href="/assets/vendor/fontawesome-free/webfonts/fa-regular-400.woff2"
            as="font"
            type="font/woff2"
            crossorigin="anonymous"
          />

          <link
            rel="preload"
            href="/assets/vendor/fontawesome-free/webfonts/fa-solid-900.woff2"
            as="font"
            type="font/woff2"
            crossorigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/vendor/fontawesome-free/webfonts/fa-brands-400.woff2"
            as="font"
            type="font/woff2"
            crossorigin="anonymous"
          />
          <link
            rel="preload"
            href="/assets/fonts/wolmart87d5.woff?png09e"
            as="font"
            type="font/woff"
            crossorigin="anonymous"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/assets/vendor/fontawesome-free/css/all.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/assets/vendor/animate/animate.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/assets/vendor/magnific-popup/magnific-popup.min.css"
          />
          <link
            rel="stylesheet"
            href="/assets/vendor/swiper/swiper-bundle.min.css"
          />
          <link
            rel="stylesheet"
            type="text/css"
            href="/assets/css/style.min.css"
          />


        </Head>
        <body className="home">
          <Main />
          <NextScript />
          <script
            async
            src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"
          ></script>
          <script
            async
            src="/assets/vendor/jquery.plugin/jquery.plugin.min.js"
          />
          <script
            async
            src="/assets/vendor/imagesloaded/imagesloaded.pkgd.min.js"
          />
          <script async src="/assets/vendor/zoom/jquery.zoom.js" />
          <script
            async
            src="/assets/vendor/jquery.countdown/jquery.countdown.min.js"
          />
          <script
            async
            src="/assets/vendor/magnific-popup/jquery.magnific-popup.min.js"
          />
          <script async src="/assets/vendor/skrollr/skrollr.min.js" />
          <script async src="/assets/vendor/swiper/swiper-bundle.min.js" />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
