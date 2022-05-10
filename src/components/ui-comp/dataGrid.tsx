import React from "react";
import { DataGrid } from "@mui/x-data-grid";

export default function DataGridComp() {
  const data = {
    columns: [
      { field: "id", generatedDate: "random", hide: true },
      { field: "dark", headerName: "desk", width: 110 },
      {
        field: "commodity",
        headerName: "commodity",
        width: 180,
        editable: true,
      },
      {
        field: "traderName",
        headerName: "trader Name",
        width: 180,
        editable: true,
      },
    ],
    rows: [
      {
        id: "d36f2876-3cc3-5251-affb-dc8cd50360aa",
        desk: "D-9751",
        commodity: "Soybean Meal",
        traderName: "Alma Turner",
        traderEmail: "aseha@gikoje.cf",
        quantity: 6058,
      },
      {
        id: "d36f2876-3cc3-5251-affb-dc8cd50360aa",
        desk: "D-9751",
        commodity: "Soybean Meal",
        traderName: "Alma Turner",
        traderEmail: "aseha@gikoje.cf",
        quantity: 6058,
      },
      {
        id: "d36f2876-3cc3-5251-affb-dc8cd50360aa",
        desk: "D-9751",
        commodity: "Soybean Meal",
        traderName: "Alma Turner",
        traderEmail: "aseha@gikoje.cf",
        quantity: 6058,
      },
      {
        id: "d36f2876-3cc3-5251-affb-dc8cd50360aa",
        desk: "D-9751",
        commodity: "Soybean Meal",
        traderName: "Alma Turner",
        traderEmail: "aseha@gikoje.cf",
        quantity: 6058,
      },
      {
        id: "d36f2876-3cc3-5251-affb-dc8cd50360aa",
        desk: "D-9751",
        commodity: "Soybean Meal",
        traderName: "Alma Turner",
        traderEmail: "aseha@gikoje.cf",
        quantity: 6058,
      },
    ],
  };
  return (
    <div style={{ display: "flex", height: "100%" }}>
      <div style={{ flexGrow: 1 }}>
        <DataGrid autoHeight {...data} />
      </div>
    </div>
  );
}
