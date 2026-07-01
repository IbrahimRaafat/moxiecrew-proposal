import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import BrandSnapshot from "../components/sections/BrandSnapshot";
import SEOAIOptimization from "../components/sections/SEOAIOptimization";
import RevampPlan from "../components/sections/RevampPlan";
import Investment from "../components/sections/Investment";
import LoyaltySystem from "../components/sections/LoyaltySystem";
import CTA from "../components/sections/CTA";

export default function Home() {
  return (
    <>
      <Head>
        <title>Moxie Crew — Strategic Proposal by Ibrahim Raafat</title>
        <meta
          name="description"
          content="A strategic proposal for Moxie Crew's website revamp and loyalty system. Discover how we'll transform your digital presence."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Moxie Crew — Strategic Proposal" />
        <meta
          property="og:description"
          content="Website revamp + loyalty/gift card system proposal for Moxie Crew"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <Hero />
          {/* Section 2: Website Revamp */}
          <BrandSnapshot />
          <SEOAIOptimization />
          <RevampPlan />
          <Investment />
          {/* Section 3: Loyalty Program */}
          <LoyaltySystem />
          {/* CTA */}
          <CTA />
        </main>
        <Footer />
      </div>
    </>
  );
}
