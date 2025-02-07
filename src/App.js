import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Routers } from "./routers";

// Page
import MainPage from "./page/mainPage";

import LeafletConnect from "./page/map-connect/leafLet-conect";
import OpenLayerConnect from "./page/map-connect/openLayer-connect";
import EsriApiConnect from "./page/map-connect/esriArgisRestAPI";

const App = () => {
  const CommonRoute = ({ children }) => {
    return (
      <>
        <div style={{ display: "flex", width: "100vw", height: "95vh" }}>
          {children}
        </div>
      </>
    );
  };

  const RouteWithMap = ({ children }) => {
    return (
      <>
        <div style={{ display: "flex", width: "100vw", height: "95vh" }}>
          {children}
        </div>
      </>
    );
  };

  const commonRoute = [
    { path: Routers.MainPageURL.path, element: <MainPage /> },
  ];

  const routeWithMap = [
    { path: Routers.EsriConnectURL.path, element: <EsriApiConnect /> },
    { path: Routers.LeafletConnectURL.path, element: <LeafletConnect /> },
    { path: Routers.OLConnectURL.path, element: <OpenLayerConnect /> },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {commonRoute.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<CommonRoute>{element}</CommonRoute>}
          />
        ))}

        {routeWithMap.map(({ path, element }) => (
          <Route
            key={path}
            path={path}
            element={<RouteWithMap>{element}</RouteWithMap>}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
