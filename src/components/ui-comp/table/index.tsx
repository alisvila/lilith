import { Grid, Skeleton } from "@mui/material";
import React, { useEffect, useState } from "react";
import Row from "./Row";
import { tableValues } from "./tableValue";

export default function Table({ x, y, id, selectedCalery }: any) {
  const [data, setData]: any = useState(tableValues);
  const [loading, setLoading]: any = useState(true)

  const handleChange = (y: any, x: any, value: any) => {
    let modifedData: any = { ...data };
    modifedData[y][x] = value;
    setData(modifedData);
  };

  useEffect((): void => {
    setLoading(true)
    // api call
    async function fetchMyAPI() {
      const tableData = await fakeApi()
      setData(tableData)
      setLoading(false)
    }
    fetchMyAPI()
  }, [selectedCalery])


  const fakeApi = (): Promise<any> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(tableValues), 1000);
  });

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
  return (
    <>
      {loading ? (
        <Skeleton animation="wave" variant="rectangular" height={250}/>
      ) : (
        <>{ rows }</>
      )}
    </>
  );
}
