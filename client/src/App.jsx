import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LangLayout from "./components/layout/LangLayout";
import { getDefaultLanguage } from "./routes/routeHelpers";
import { LANGUAGES, SLUGS_PAGES } from "./routes/routes.config";
import { PAGES } from "./routes/routes.pages.jsx";
import NotFound from "./views/NotFound";

/**
 * Un subárbol de rutas por idioma, cada uno registrando SOLO sus propios slugs.
 * Registrarlos todos bajo un "/:lang" genérico haría que /es/foundation también
 * resolviera, generando contenido duplicado para los buscadores.
 */
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to={`/${getDefaultLanguage()}`} replace />}
        />

        {LANGUAGES.map((lang) => (
          <Route key={lang} path={lang} element={<LangLayout lang={lang} />}>
            {Object.entries(SLUGS_PAGES).map(([key, slugs]) =>
              slugs[lang] === "" ? (
                <Route key={key} index element={PAGES[key]} />
              ) : (
                <Route key={key} path={slugs[lang]} element={PAGES[key]} />
              )
            )}
          </Route>
        ))}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
