import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Prism.js CSS - Dark theme */}
        <link 
          href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css" 
          rel="stylesheet" 
        />
      </Head>
      <body>
        <Main />
        <NextScript /> 
      </body>
    </Html>
  );
}
