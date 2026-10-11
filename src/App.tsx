import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import i18n from "./i18n";
import { ThemeProvider } from "./context/ThemeContext";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./components/Projects/ProjectDetail";
import NotFoundPage from "./pages/NotFoundPage";
import SEO from "./components/SEO/SEO";
import { getSupportedLanguage } from "./utils/localizedPath";

function App() {
  const location = window.location;
  const urlLanguage = getSupportedLanguage(location.pathname.split("/")[1]);

  useEffect(() => {
    if (i18n.language !== urlLanguage) {
      void i18n.changeLanguage(urlLanguage);
    }

    function handleLanguageChange(lng: string) {
      document.documentElement.lang = lng;
    }

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [urlLanguage]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <SEO />
        <Header />
        <ScrollToTop />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />

            <Route path="/pt" element={<HomePage />} />
            <Route path="/pt/about" element={<AboutPage />} />
            <Route path="/pt/projects" element={<ProjectsPage />} />
            <Route path="/pt/projects/:id" element={<ProjectDetail />} />

            <Route path="/en" element={<HomePage />} />
            <Route path="/en/about" element={<AboutPage />} />
            <Route path="/en/projects" element={<ProjectsPage />} />
            <Route path="/en/projects/:id" element={<ProjectDetail />} />

            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
