import React, { useState } from "react";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import DashLayout from "../layouts";
import {
  Card,
  Container,
  CardContent,
  Typography,
  Grid,
  styled,
} from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "Food Name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Food category",
    width: 150,
    editable: true,
  },
  {
    field: "age",
    headerName: "Calery",
    type: "number",
    width: 110,
    editable: true,
  },
];

const rows = [
  { id: 1, lastName: "potato", firstName: "fruit", age: 35 },
  { id: 2, lastName: "lemon", firstName: "veg", age: 42 },
  { id: 3, lastName: "onion", firstName: "fruit", age: 45 },
  { id: 4, lastName: "cro", firstName: "fruit", age: 16 },
  { id: 5, lastName: "peper", firstName: "fruit", age: 20 },
  { id: 6, lastName: "orange", firstName: "fruit", age: 150 },
  { id: 7, lastName: "cofffe", firstName: "fruit", age: 44 },
  { id: 8, lastName: "tea", firstName: "veg", age: 36 },
  { id: 9, lastName: "banan", firstName: "veg", age: 65 },
];

const DataGridwrap = styled(DataGrid)(({ theme }: any) => ({}));

export default function FoodGrid() {
  const [isLoading, setLoading] = useState(true);

  return (
    <Container maxWidth={false}>
      <Card>
        <CardContent>
          <Typography variant={"h3"}>لیست غذاها</Typography>
          <Grid item>
            <PerfectScrollbar
              style={{
                height: "100%",
                maxHeight: "calc(100vh - 205px)",
                overflowX: "hidden",
              }}
            >
              {" "}
              <DataGrid
                sx={{
                  boxShadow: 2,
                  border: 2,
                  borderColor: "primary.light",
                  "& .MuiDataGrid-cell:hover": {
                    color: "primary.main",
                  },
                }}
                rows={rows}
                columns={columns}
                checkboxSelection
              />
            </PerfectScrollbar>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
}
