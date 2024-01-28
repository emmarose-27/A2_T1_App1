require(["esri/views/MapView", "esri/WebMap"], (MapView, WebMap) => {

    const webmap = new WebMap({
      portalItem: {
        // autocasts as new PortalItem()
        id: "12c2a84b74da4d43bcd3ad5a487d128f"
      }
    });

    const view = new MapView({
      map: webmap,
      container: "viewDiv"
    });
  });