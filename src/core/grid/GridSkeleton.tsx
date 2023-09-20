import { TableCell } from "@mui/material";
import React from "react";
import CustomSkeleton from "../skeleton";

export default function GridSkeleton(props: any) {
  return (
    <>
      {new Array(props.cells).fill(
        <TableCell>
          <CustomSkeleton variant="rectangular" height={60} />
        </TableCell>
      )}
    </>
  );
}
