import React from "react";
import Cell from "./Cell";

export default function RowHeader(props: any) {
  const cells: any = [];

  for (let i = 0; i < props.rowData.length; i++) {
    cells.push(
      <Cell isReadOnly={true} id={props.id} value={props.rowData[i]} />
    );
  }

  return <>{cells}</>;
}
