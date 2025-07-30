import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import WebLinksPage from "./pages/WebLinksPage";
function App() {
  return (
    <BrowserRouter basename="/linknest">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weblinks" element={<WebLinksPage />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
