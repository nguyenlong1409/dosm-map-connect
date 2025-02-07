import React, { useEffect } from "react";
import "ol/ol.css";
import { Map, View } from "ol";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import TileArcGISRest from "ol/source/TileArcGISRest";
import { XYZ } from "ol/source";
import TileWMS from "ol/source/TileWMS";

const ArcGISRestApi_URL = process.env.REACT_APP_ArcGISRestApi_URL;
const XYZ_URL = process.env.REACT_APP_XYZLayer_URL;
const WMS_URL = process.env.REACT_APP_WMSLayer_URL;

const OpenLayerConnect = () => {
  useEffect(() => {
    const arcgisLayer = new TileLayer({
      source: new TileArcGISRest({
        url: ArcGISRestApi_URL,
      }),
    });

    const xyzLayer = new TileLayer({
      source: new XYZ({
        url: XYZ_URL,
        attributions: '&copy; <a href="https://dosm.vnsdi.gov.vn">VNSDI</a>',
        maxZoom: 18,
      }),
    });

    const wmsLayer = new TileLayer({
      source: new TileWMS({
        url: WMS_URL,
        params: {
          LAYERS: "0",
          TILED: true,
        },
        serverType: "mapserver",
      }),
    });

    const map = new Map({
      target: "map",
      view: new View({
        center: fromLonLat([105.8542, 21.0285]),
        zoom: 6,
        maxZoom: 16,
        minZoom: 6,
      }),
      layers: [xyzLayer],
    });

    return () => {
      map.setTarget(null);
    };
  }, []);

  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <h3 style={{ height: "5%", width: "100%" }}>Kết nối bằng OpenLayer</h3>
        <div
          id="map"
          style={{ height: "90%", width: "100%", display: "center" }}
        />
      </div>
    </>
  );
};

export default OpenLayerConnect;
