import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { Routers } from "./routers";

// Page
import LeafletConnect from "./page/map-connect/leafLet-conect";
import OpenLayerConnect from "./page/map-connect/openLayer-connect";
import EsriApiConnect from "./page/map-connect/esriArgisRestAPI";

const App = () => {
  return <div className="App">Hello</div>;
};

export default App;
