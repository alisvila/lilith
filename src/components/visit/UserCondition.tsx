import React, { SyntheticEvent, useState } from "react";
import {
  Tabs,
  Tab,
  Typography,
  Box,
  Card,
  CardContent,
  Autocomplete,
  TextField,
  Checkbox,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";

const top100Films = [
    { title: 'The Shawshank Redemption', id: 1994 },
    { title: 'The Godfather', id: 1972 },
    { title: 'The Godfather: Part II', id: 1974 },
    { title: 'The Dark Knight', id: 2008 },
    { title: '12 Angry Men', id: 1957 },
    { title: "Schindler's List", id: 1993 },
    { title: 'Pulp Fiction', id: 1994 },
    {
      title: 'The Lord of the Rings: The Return of the King',
      id: 2003,
    },
    { title: 'The Good, the Bad and the Ugly', id: 1966 },
    { title: 'Fight Club', id: 1999 },
    {
      title: 'The Lord of the Rings: The Fellowship of the Ring',
      id: 2001,
    },
    {
      title: 'Star Wars: Episode V - The Empire Strikes Back',
      id: 1980,
    },
    { title: 'Forrest Gump', id: 1994 },
    { title: 'Inception', id: 2010 },
  ];
  

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

function TabPanel(props: any) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props: any) {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Card>
      <CardContent>
        <Box sx={{ width: "100%" }}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="دارو" {...a11yProps(0)} />
              <Tab label="سوابق بیماری" {...a11yProps(1)} />
              <Tab label="سوابق جراحی" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Autocomplete
              multiple
              id="checkboxes-tags-demo"
              options={top100Films}
              disableCloseOnSelect
              getOptionLabel={(option) => option.title}
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
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Checkboxes"
                  placeholder="Favorites"
                />
              )}
            />
          </TabPanel>
          <TabPanel value={value} index={1}>
            Item Two
          </TabPanel>
          <TabPanel value={value} index={2}>
            Item Three
          </TabPanel>
        </Box>
      </CardContent>
    </Card>
  );
}
