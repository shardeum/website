import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-N6NTB5C');
            `,
          }}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `<script type="application/ld+json">
            {
            @context: "https://schema.org",
            @type: "Organization",
            name: "Shardeum",
            url: "https://shardeum.org/",
            logo: "https://shardeum.org/blog/wp-content/uploads/2022/06/main-logo.svg",
            sameAs: [
            https://twitter.com/shardeum,
            https://github.com/shardeum/,
            https://shardeum.org/
            ]
            }
            </script>`,
          }}
        ></script>
        <Script
          strategy="beforeInteractive"
          src={`https://cdn-cookieyes.com/client_data/08f8687cb2b708c3de5b4b9f/script.js`}
        ></Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
