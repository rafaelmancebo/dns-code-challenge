import Head from "next/head";
import Content from "@components/content";
import Footer from "@components/footer";
import Header from "@components/header";
import logo from "@images/trady_logo.svg";
export default function Home() {
  return (
    <>
      <Head>
        <title>Trady</title>
        <meta name="description" content="Trady test" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header
        logo={logo}
        alt="Trady"
        text="Point your domain at "
        url="https://trady.com/"
      />

      <Content />

      <Footer logo={logo} alt="Trady" url="https://trady.com/" />
    </>
  );
}
