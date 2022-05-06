import React, { useState, useEffect } from "react";
import { Theme, useTheme, styled } from "@mui/material/styles";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  FormControl,
  FormGroup,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  TextField,
  Typography,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  Radio,
  Checkbox,
  Autocomplete,
  Button,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Skeleton,
} from "@mui/material";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DashLayout from "../layouts/dashboard";
import MealApi from "../../api/meals";
import { promises } from "dns";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name: string, personName: readonly string[], theme: Theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const foods = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const foodCat = [
  { title: "bread", id: 2010 },
  { title: "Meat", id: 2011 },
  { title: "Dairy", id: 2012 },
  { title: "Fat", id: 2013 },
  { title: "Fruit", id: 2014 },
  { title: "Vegetable", id: 2015 },
];

const meals = [
  { title: "صبحانه", id: 2010 },
  { title: "میان وعده صبح", id: 2010 },
  { title: "نهار", id: 2010 },
  { title: "میان وعده عصر", id: 2010 },
  { title: "شام", id: 2010 },
  { title: "میان وعده شام", id: 2010 },
];

const CardWrapper = styled(CardContent)(({ theme }: any) => ({
  position: "relative",

  "&:after": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: "50%",
    top: -85,
    right: -95,
    [theme.breakpoints.down("sm")]: {
      top: -105,
      right: -140,
    },
  },
  "&:before": {
    content: '""',
    position: "absolute",
    width: 210,
    height: 210,
    background: theme.palette.secondary[800],
    borderRadius: "50%",
    top: -125,
    right: -15,
    opacity: 0.5,
    [theme.breakpoints.down("sm")]: {
      top: -155,
      right: -70,
    },
  },
}));
const ListWrapper: any = styled(CardContent)(({ theme }: any) => ({
  border: "1px solid #e7e7e7",
  borderRadius: "5px",
  padding: 0,
  margin: 0,
  "& li": {
    listStyle: "none",
    padding: "8px 27px",
  },
}));

const ListItemTextWrapper: any = styled(ListItemText)(({ theme }: any) => ({}));
export default function FoodCategory() {
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [personName, setPersonName] = React.useState<string[]>([]);
  const [mealsCata, setMealsCata]: any = useState([]);
  const [form, setForm]: any = useState({
    appetiteStatus: [],
    activityStatus: [],
  });

  useEffect(() => {
    async function getMealsApi() {
      const parsedCata: any = [];
      let mealCata: any = [
        {
          name: "string",
          id: 0,
        },
      ];
      await Promise.all([
         MealApi.getMeals,
         MealApi.getMeals,
         MealApi.getMeals,
      ]).then((values: any) => {
        mealCata = values[0]
        mealCata = values[1]
        mealCata = values[3]
        setIsLoading(false)
      })
      mealCata.map((item: any) => {
        parsedCata.push({ title: item.name, id: item.id });
      });
      setMealsCata(parsedCata);
    }
    getMealsApi();
  }, []);
  // 316
  // 45
  // ma: 24
  const checkedIcon = <CheckBoxIcon fontSize="small" />;
  const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;

  const MedicineHandler = (e: any, value: any, fieldName: string) => {
    setForm((prev: any) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const userDetailHandler = (e: any) => {
    setForm((prev: any) => ({ ...prev, [e.targe.name]: e.target.value }));
  };
  return (
    <Container>
      <Card>
        <CardWrapper>
          {isLoading ? (
            <>
              <Skeleton
                sx={{ mb: 4 }}
                animation="wave"
                variant="rectangular"
                height={56}
                width={500}
              />
              <Grid container spacing={3}>
                <Grid item xs={8} md={8} lg={8}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={4}>
                      <Skeleton
                        animation="wave"
                        variant="rectangular"
                        height={56}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                      <Skeleton
                        animation="wave"
                        variant="rectangular"
                        height={56}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                      <Skeleton
                        animation="wave"
                        variant="rectangular"
                        height={56}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Skeleton
                        animation="wave"
                        variant="rectangular"
                        height={56}
                      />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <Skeleton
                        animation="wave"
                        variant="rectangular"
                        height={56}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Skeleton
                        animation="wave"
                        variant="rectangular"
                        height={56}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={4} md={4} lg={4} sx={{ height: "100%" }}>
                  <Skeleton height={375} animation="wave" variant="rectangular" />
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <Typography mb={5} variant="h3">
                مواد غذایی
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={8} md={8} lg={8}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} md={6} lg={4}>
                      <TextField
                        required
                        id="name"
                        name="name"
                        label="نام"
                        type="text"
                        fullWidth
                        onChange={(e) => userDetailHandler(e)}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                      <TextField
                        required
                        id="unit"
                        name="unit"
                        label="واحد"
                        type="text"
                        fullWidth
                        onChange={(e) => userDetailHandler(e)}
                      />
                    </Grid>
                    <Grid item xs={12} md={6} lg={4}>
                      <TextField
                        required
                        id="calery"
                        name="calery"
                        label="جمله"
                        type="number"
                        fullWidth
                        onChange={(e) => userDetailHandler(e)}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="start">
                              کالری
                            </InputAdornment>
                          ),
                        }}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <TextField
                        id="desc"
                        name="desc"
                        label="جمله"
                        type="text"
                        fullWidth
                        onChange={(e) => userDetailHandler(e)}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Autocomplete
                        multiple
                        id="foodCat"
                        options={foodCat}
                        disableCloseOnSelect
                        value={form.Medicine}
                        getOptionLabel={(option) => option.title}
                        onChange={(e, value) =>
                          MedicineHandler(e, value, "foodCat")
                        }
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
                        // style={{ width: 500 }}
                        renderInput={(params) => (
                          <TextField {...params} label="دسته بندی ها" />
                        )}
                      />
                    </Grid>

                    <Grid item xs={12} md={12} lg={12}>
                      <Autocomplete
                        multiple
                        id="meals"
                        options={mealsCata}
                        disableCloseOnSelect
                        value={form.Medicine}
                        getOptionLabel={(option) => option.title}
                        onChange={(e, value) =>
                          MedicineHandler(e, value, "meals")
                        }
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
                        // style={{ width: 500 }}
                        renderInput={(params) => (
                          <TextField {...params} label="وعده ها" />
                        )}
                      />
                    </Grid>
                    <Grid item xs={12} md={12} lg={12}>
                      <Button variant="contained">ثبت</Button>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={4} md={4} lg={4} sx={{ height: "100%" }}>
                  <Grid item xs={12} md={12} lg={12}>
                    <PerfectScrollbar
                      style={{
                        height: "100%",
                        maxHeight: "calc(57vh - 205px)",
                        overflowX: "hidden",
                      }}
                    >
                      <ListWrapper
                        className="pa"
                        sx={{
                          width: "100%",
                          bgcolor: "background.paper",
                          position: "relative",
                          overflow: "auto",
                          "& ul": { padding: 0 },
                        }}
                        subheader={<li />}
                      >
                        {foodCat.map((sectionId) => (
                          <div key={`${sectionId.id}`}>
                            <ul>
                              <ListSubheader>{`${sectionId.title}`}</ListSubheader>
                              {[0, 1, 2].map((item) => (
                                <ListItem key={`food-${sectionId}-${item}`}>
                                  <ListItemText
                                    sx={{ padding: "0 15px" }}
                                    primary={`food ${item}`}
                                  />
                                </ListItem>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </ListWrapper>
                    </PerfectScrollbar>
                  </Grid>
                </Grid>
              </Grid>
            </>
          )}
        </CardWrapper>
      </Card>
    </Container>
  );
}
