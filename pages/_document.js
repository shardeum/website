import { Html, Head, Main, NextScript } from "next/document";

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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
