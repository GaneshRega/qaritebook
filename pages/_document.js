import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="stylesheet" href="/vendor/bootstrap/css/bootstrap.min.css" />
          <link rel="stylesheet" href="/assets/css/templatemo-scholar.css" />
          <link rel="stylesheet" href="/assets/css/animate.css" />
          <link rel="stylesheet" href="/assets/css/flex-slider.css" />
          <link rel="stylesheet" href="/assets/css/fontawesome.css" />
          <link rel="stylesheet" href="/assets/css/owl.css" />
        </Head>
        <body>
          <Main />
          {/* Project JS files (load in same order as static site) */}
          <script src="/vendor/jquery/jquery.min.js"></script>
          <script src="/vendor/bootstrap/js/bootstrap.min.js"></script>
          <script src="/assets/js/owl-carousel.js"></script>
          <script src="/assets/js/isotope.min.js"></script>
          <script src="/assets/js/counter.js"></script>
          <script src="/assets/js/custom.js"></script>
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
