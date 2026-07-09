import "../styles/globals.css";
import dynamic from "next/dynamic";

// Client-only + lazy: keeps framer-motion out of the initial shared bundle.
const ProjectModal = dynamic(() => import("../components/ProjectModal"), { ssr: false });

export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <ProjectModal />
    </>
  );
}
