import About from "../src/components/About";
import Contact from "../src/components/Contact";
import HeroSlider from "../src/components/HeroSlider";
import Layout from "../src/layout/Layout";
import Head from "next/head";
const Index = () => {
  return (
    <Layout pageTitle={"Home"}>
      <Head>
        <title>TRANS-GALACTIC ADOPTION INTERMEDIARIES | Home</title>
        <link rel="shortcut icon" href="/favicon.png" />
      </Head>
      <HeroSlider />
      <About />
      <Contact />
    </Layout>
  );
};
export default Index;
