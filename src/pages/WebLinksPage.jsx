import Navbar from "../components/Navbar.jsx";
import ScrollToTopButton from "../components/ScrollToTopButton.jsx";
import LinksDisplay from "../components/LinksDisplay.jsx";

function WebLinksPage() {
  const WEBLINKS_CONFIG = {
    type: "weblinks",
    action: "view",
  };
  return (
    <>
      <Navbar />
      <LinksDisplay displayConfig={WEBLINKS_CONFIG} />
      <ScrollToTopButton />
    </>
  );
}

export default WebLinksPage;
