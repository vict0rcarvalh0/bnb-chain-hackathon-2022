import Head from "next/head";

export const Layout = ({ children, title, props }) => (
  <div>
    <Head>
      <title>{title ? title + " - HealthVault" : "HealthVault"}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {children}
  </div>
);