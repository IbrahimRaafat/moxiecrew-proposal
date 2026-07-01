import type { AppProps } from "next/app";
import "../styles/globals.css";
import LoadingScreen from "../components/ui/LoadingScreen";
import ScrollProgressBar from "../components/ui/ScrollProgressBar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <LoadingScreen />
      <ScrollProgressBar />
      <Component {...pageProps} />
    </>
  );
}
