import React, { useState } from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  Autocomplete,
  TextField,
  Checkbox,  
} from "@mui/material";
import {TreeView , TreeItem} from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
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

export default function UserIllnessSurgery(props: any) {
  return (
    <Card>
      <CardContent>
        <TreeView
          aria-label="file system navigator"
          defaultCollapseIcon={<ExpandMoreIcon />}
          defaultExpandIcon={<ChevronRightIcon />}
          sx={{ height: 240, flexGrow: 1, maxWidth: 400, overflowY: "auto" }}
        >
          <TreeItem nodeId="1" label="Applications">
            <TreeItem nodeId="2" label="Calendar" />
          </TreeItem>
          <TreeItem nodeId="5" label="Documents">
            <TreeItem nodeId="10" label="OSS" />
            <TreeItem nodeId="6" label="MUI">
              <TreeItem nodeId="8" label="index.js" />
            </TreeItem>
          </TreeItem>
        </TreeView>
      </CardContent>
    </Card>
  );
}
