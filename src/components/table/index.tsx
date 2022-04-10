import { Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import Row from "./Row";
import { tableValues } from './tableValue'

export default function Table({ x, y, id }: any) {
  const [data, setData]: any = useState(tableValues);

  const handleChange = (y: any, x: any, value: any) => {
    let modifedData: any = {...data}
    modifedData[y][x] = value;
    setData(modifedData);
  };

  const rows = [];
  for (let i = 0; i < y + 1; i++) {
    const rowData = data[i];
    rows.push(
      <Grid container>
        <Grid
          item
          lg={12}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Row
            id={id}
            handleChange={handleChange}
            key={`${i}-${id}`}
            y={i}
            x={x}
            rowData={rowData}
          />
        </Grid>
      </Grid>
    );
  }
  return <>{rows}</>;
}
