import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";

import HomePage from "./pages/HomePage";
import WebLinksPage from "./pages/WebLinksPage";
import TechnicalLinksPage from "./pages/TechnicalLinksPage";
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/linknest">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weblinks" element={<WebLinksPage />} />
          <Route path="/techlinks" element={<TechnicalLinksPage />} />
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;