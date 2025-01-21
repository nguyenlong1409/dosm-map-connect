import React, { useEffect, useRef } from "react";
import L from "leaflet";
import { tiledMapLayer } from "esri-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";

const ArcGISRestApi_URL = process.env.REACT_APP_ArcGISRestApi_URL;
const XYZ_URL = process.env.REACT_APP_XYZLayer_URL;
const WMS_URL = process.env.REACT_APP_WMSLayer_URL;

const LeafletConnect = () => {
  useEffect(() => {
    const map = L.map("map").setView([16, 106], 6);

    const arcgisLayer = tiledMapLayer({
      url: ArcGISRestApi_URL,
      minZoom: 6,
      maxZoom: 19,
    });

    const xyzLayer = L.tileLayer(XYZ_URL, {
      attribution: '&copy; <a href="https://dosm.vnsdi.gov.vn">VNSDI</a>',
      minZoom: 6,
      maxZoom: 19,
    });

    const wmsLayer = L.tileLayer.wms(WMS_URL, {
      layers: "0",
      format: "image/png",
      transparent: true,
      minZoom: 6,
      maxZoom: 19,
    });

    arcgisLayer.addTo(map);

    return () => map.remove();
  }, []);

  return <div id="map" style={{ height: "100%", width: "100%" }} />;
};

export default LeafletConnect;
