import Document, { Head, Html, Main, NextScript } from 'next/document';
class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <div>
                        <title>Agent Dashboard</title>
                        <meta charSet="utf-8" />
                        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
                        <meta name="description" content="Admin template that can be used to build dashboards for CRM, CMS, etc." />
                        <meta name="author" content="Potenza Global Solutions" />
                        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                        <link rel="shortcut icon" href="/assets/img/favicon.ico" />
                        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet" />
                        <link rel="stylesheet" type="text/css" href="/assets/css/vendors.css" />
                        <link rel="stylesheet" type="text/css" href="/assets/css/style.css" />

                    </div>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                    <script async src="/assets/js/vendors.js" />
                </body>
            </Html>
        )
    }
}

export default MyDocument