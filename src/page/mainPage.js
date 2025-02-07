import { Routers } from "../routers";
import { Link } from "react-router-dom";

const MainPage = () => {
  return (
    <div>
      <Link to={Routers.EsriConnectURL.path}>Esri</Link>
      <br />
      <Link to={Routers.LeafletConnectURL.path}>Leaflet</Link>
      <br />
      <Link to={Routers.OLConnectURL.path}>OpenLayer</Link>
    </div>
  );
};

export default MainPage;
