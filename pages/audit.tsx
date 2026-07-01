import Head from "next/head";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AuditResults from "../components/sections/AuditResults";

export default function AuditPage() {
  return (
    <>
      <Head>
        <title>Lighthouse Audit Results - Moxie Crew</title>
        <meta
          name="description"
          content="Detailed Lighthouse audit results and analysis for itsmoxiecrew.com"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navbar />
        <main>
          <AuditResults />
        </main>
        <Footer />
      </div>
    </>
  );
}
