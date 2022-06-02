import React, { useEffect } from "react";
import Cell from "./Cell";

type Display = {
  ax: { x: number; y: number };
  value: string;
};

const cellTitle = [
  "bread",
  "vegetable",
  "fruit",
  "milk",
  "meat",
  "fat",
  "mealId",
];

export default function Row(props: any) {
  useEffect(() => {
    console.log(props.rowData, "rows");
  }, [props]);

  return (
    <>
      <Cell
        isReadOnly={true}
        id={props.id}
        handleChange={props.handleChange}
        value={props.rowData.mealId.name}
        name={"mealId"}
      />
      <Cell
        id={props.id}
        handleChange={props.handleChange}
        value={props.rowData.bread}
        name={"bread"}
      />
      <Cell
        id={props.id}
        handleChange={props.handleChange}
        value={props.rowData.vegetable}
        name={"vegetable"}
      />
      <Cell
        id={props.id}
        handleChange={props.handleChange}
        value={props.rowData.fruit}
        name={"fruit"}
      />
      <Cell
        id={props.id}
        handleChange={props.handleChange}
        value={props.rowData.milk}
        name={"milk"}
      />
      <Cell
        id={props.id}
        handleChange={props.handleChange}
        value={props.rowData.meat}
        name={"meat"}
      />
      <Cell
        id={props.id}
        handleChange={props.handleChange}
        value={props.rowData.fat}
        name={"fat"}
      />
    </>
  );
}
