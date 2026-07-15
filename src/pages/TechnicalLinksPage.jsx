import Navbar from "../components/Navbar.jsx";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";
import LinksDisplay from "../components/LinksDisplay.jsx";

function TechnicalLinksPage() {
  const TECHLINKS_CONFIG = {
    type: "techlinks",
    action: "view",
  };
  return (
    <>
      <Navbar />
      <LinksDisplay displayConfig={TECHLINKS_CONFIG} />
      <ScrollToTopButton />
    </>
  );
}

export default TechnicalLinksPage;
