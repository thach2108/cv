import { lazy, Suspense } from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import MainStoreProvider from "store/context";
import { MENU } from "utils/constants";
import "./App.scss";

const Home = lazy(() => import("./pages/Home"));
const Certs = lazy(() => import("./pages/Certs"));
const Example = lazy(() => import("./pages/Examples"));

function App() {
  return (
    <MainStoreProvider>
      <HashRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path={MENU[0].path} element={<Home />} />
            <Route path={MENU[1].path} element={<Certs />} />
            <Route path={MENU[2].path} element={<Example />} />
          </Routes>
        </Suspense>
      </HashRouter>
    </MainStoreProvider>
  );
}

export default App;
