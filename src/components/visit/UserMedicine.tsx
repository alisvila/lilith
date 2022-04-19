import React, { useEffect, useState } from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Autocomplete,
  TextField,
  Checkbox,
  TextareaAutosize,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const top100Films = [
  { title: "The Shawshank Redemption", id: 1994 },
  { title: "The Godfather", id: 1972 },
  { title: "The Godfather: Part II", id: 1974 },
  { title: "The Dark Knight", id: 2008 },
  { title: "12 Angry Men", id: 1957 },
  { title: "Schindler's List", id: 1993 },
  { title: "Pulp Fiction", id: 1994 },
  {
    title: "The Lord of the Rings: The Return of the King",
    id: 2003,
  },
  { title: "The Good, the Bad and the Ugly", id: 1966 },
  { title: "Fight Club", id: 1999 },
  {
    title: "The Lord of the Rings: The Fellowship of the Ring",
    id: 2001,
  },
  {
    title: "Star Wars: Episode V - The Empire Strikes Back",
    id: 1980,
  },
  { title: "Forrest Gump", id: 1994 },
  { title: "Inception", id: 2010 },
];

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

export default function UserMedicine(props: any) {
  const MedicineHandler = (e: any, value: any, fieldName: string) => {
    props.UserMedicineHandler({ [fieldName]: value });
  };

  return (
    <Card>
      <CardContent>
        <Typography mb={5} variant="h3">
          داروهای مصرفی
        </Typography>
        <Typography variant="body2" my={3}>
          {" "}
          در صورتیکه در حال حاضر دارو یا داروهایی را مصرف می نمایید، از لیست زیر
          داروی مورد نظر را انتخاب کنید.
        </Typography>

        <Autocomplete
          multiple
          id="Medicine"
          options={top100Films}
          disableCloseOnSelect
          value={props.Medicine}
          getOptionLabel={(option) => option.title}
          onChange={(e, value) => MedicineHandler(e, value, "Medicine")}
          renderOption={(props, option, { selected }) => (
            <li {...props}>
              <Checkbox
                icon={icon}
                checkedIcon={checkedIcon}
                style={{ marginRight: 8 }}
                checked={selected}
              />
              {option.title}
            </li>
          )}
          style={{ width: 500 }}
          renderInput={(params) => <TextField {...params} label="دارو ها" />}
        />
        <Typography variant="body2" my={3}>
          اگر نام دارو و یا داروهای مصرفی شما درون لیست داروها قرار ندارد،داروی
          خود را در قسمت زیر به صورت دستی تایپ نمایید.
        </Typography>
        <TextareaAutosize
          minRows={6}
          placeholder="داروهای دیگر"
          style={{ width: 200, padding: "1%", borderColor: "#E6E8F0" }}
          onChange={(e) => MedicineHandler(e, e.target.value, "OtherMedicine")}
        />
      </CardContent>
    </Card>
  );
}
