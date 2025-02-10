import React, { useEffect } from "react";
import Map from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import WMSLayer from "@arcgis/core/layers/WMSLayer";
import TileLayer from "@arcgis/core/layers/TileLayer";

const ArcGISRestApi_URL = process.env.REACT_APP_ArcGISRestApi_URL;
const XYZ_URL = process.env.REACT_APP_XYZLayer_URL;
const WMS_URL = process.env.REACT_APP_WMSLayer_URL;

const EsriApiConnect = () => {
  useEffect(() => {
    // Tạo bản đồ
    const map = new Map({});

    // Tạo view hiển thị bản đồ
    const view = new MapView({
      container: "map",
      map: map,
      center: [106, 16],
      zoom: 8,
      minZoom: 6,
      maxZoom: 18,
    });

    // Rest api
    const arcgisRestApiLayer = new TileLayer({
      url: ArcGISRestApi_URL,
    });

    // Lớp XYZ Layer
    const xyzLayer = new TileLayer({
      urlTemplate: XYZ_URL,
    });

    // Tạo lớp WMSLayer
    const wmsLayer = new WMSLayer({
      url: WMS_URL,
      sublayers: [
        {
          name: "0",
          format: "image/png",
          transparent: true,
        },
      ],
    });

    map.add(arcgisRestApiLayer);

    return () => {
      if (view) {
        view.destroy(); // Cleanup khi component bị hủy
      }
    };
  }, []);

  return (
    <>
      <div style={{ height: "100%", width: "100%" }}>
        <h3 style={{ height: "5%", width: "100%" }}>
          Kết nối bằng thư viện của Esri
        </h3>
        <div
          id="map"
          style={{ height: "90%", width: "100%", display: "center" }}
        />
      </div>
    </>
  );
};
export default EsriApiConnect;
