import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  TextField,
  Grid,
  MenuItem,
  List,
  ListItem,
  IconButton,
  ListItemText,
  styled,
} from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import DeleteIcon from "@mui/icons-material/Delete";
import { getProfile, getSingleProfile } from "../../api/profile";

const Illness = [
  {
    name: "قلبی",
    sub: [
      { title: "The Shawshank Redemption", id: 1 },
      { title: "The Godfather", id: 2 },
      { title: "The Godfather: Part II", id: 3 },
      { title: "The Dark Knight", id: 4 },
      { title: "12 Angry Men", id: 5 },
      { title: "Schindler's List", id: 6 },
    ],
  },
  {
    name: "کلیوی",
    sub: [
      { title: "The Shawshank Redemption", id: 7 },
      { title: "The Godfather", id: 8 },
      { title: "The Godfather: Part II", id: 9 },
      { title: "The Godfather", id: 10 },
      { title: "The Godfather", id: 11 },
      { title: "The Godfather", id: 12 },
    ],
  },
  {
    name: "سوختگی",
    sub: [
      { title: "The Shawshank Redemption", id: 13 },
      { title: "The Shawshank Redemption", id: 14 },
      { title: "The Shawshank Redemption: Part II", id: 15 },
      { title: "The Shawshank Redemption", id: 16 },
      { title: "12 Angry Men", id: 17 },
      { title: "Schindler's List", id: 18 },
    ],
  },
];

const GridWrapper: any = styled(Grid)(({ theme }: any) => ({
  border: `1px solid ${theme.palette.neutral[200]}`,
  borderRadius: theme.shape.borderRadius,
}));

export default function UserIllnessSurgery(props: any) {
  const [category, setCategory] = useState(0);
  const [selected, setSelected] = useState();
  const [diseaseType, setDiseaseType] = useState([]);
  const [disease, setDisease] = useState([]);
  const [selectedDisease, setSelectedDisease]: any = useState([]);

  useEffect(() => {
    getDisease()
    getDiseaseType()
  }, [])

  useEffect(() => {
    console.log('its in the bag')
  }, [props.Disease])

  useEffect(() => {
    console.log(category)
    getDisease()
  }, [category])

  const getDiseaseType = async () => {
    const dRes: any = await getProfile("/DiseaseType");
    setDiseaseType(dRes);
  };
  const getDisease = async () => {
    const dRes: any = await getSingleProfile("/DiseaseType", `${category.toString()}/Diseases`);
    console.log(dRes)
    setDisease(dRes);
  };


  const categoryHandler = (e: any) => {
    setCategory(e.target.value);
  };
  const diseaseHandler = (e: any) => {
    let newDisease: any = [...props.Disease]
    // const newDisease = props.Disease.find((d: any) => d === e.target.value);
    if (!props.Disease.find((d: any) => d === e.target.value)) {
      newDisease.push(e.target.value)
    }
    props.UserIllnessSurgeryHandler(newDisease)
    // setSelectedDisease((prev: any) => [...prev, e.target.value])

    // const diseaseItem = Illness.map((cat) =>
    //   cat.sub.find((disease) => disease.id === e.target.value)
    // ).find((i) => i);
    // !props.Disease.find((d: any) => d.id === diseaseItem?.id) &&
    //   props.UserIllnessSurgeryHandler({
    //     Disease: [diseaseItem, ...props.Disease],
    //   });
  };

  const deleteDisease = (item: any) => {
    const newDisease = props.Disease.filter((d: any) => d.id !== item.id);
    props.UserIllnessSurgeryHandler({ Disease: newDisease });
  };

  return (
    <Card>
      <CardContent>
        <Typography mb={5} variant="h4">
          بیماری های خاص{" "}
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              id="category"
              name="category"
              label="گروه بیماری"
              select
              value={category ?? ""}
              defaultValue={category ?? ""}
              fullWidth
              onChange={categoryHandler}
            >
              {diseaseType.map((category: any) => (
                <MenuItem key={category?.name} value={category?.id}>
                  {category?.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <TextField
              id="disease"
              name="disease"
              label=" بیماری"
              value={"بیماری"}
              select
              fullWidth
              onChange={diseaseHandler}
            >
              <MenuItem key={"Diseases"} disabled value={"بیماری"}>
                بیماری ها
              </MenuItem>
              {disease.map((category: any) => (
                <MenuItem key={category.name} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
              لیست بیماری های انتخاب شده
            </Typography>
            <Grid container>
              <GridWrapper item xs={12} md={12} lg={12}>
                <PerfectScrollbar
                  style={{
                    height: "100%",
                    minHeight: "200px",
                    maxHeight: "200px",
                    overflowX: "hidden",
                  }}
                >
                  <List dense={false}>
                    {props.Disease.map((disease: any) => {
                      return (
                        <ListItem
                          dense
                          key={disease}
                          secondaryAction={
                            <IconButton
                              edge="end"
                              aria-label="delete"
                              onClick={() => deleteDisease(disease)}
                            >
                              <DeleteIcon />
                            </IconButton>
                          }
                        >
                          <ListItemText primary={disease} />
                        </ListItem>
                      );
                    })}
                  </List>
                </PerfectScrollbar>
              </GridWrapper>
            </Grid>
          </Grid>
        </Grid>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          دیگر بیماری ها
        </Typography>
        <TextField
          id="filled-multiline-flexible"
          multiline
          minRows={4}
          fullWidth
          value={props.OtherDisease}
          onChange={(e) =>
            props.UserIllnessSurgeryHandler({ OtherDisease: e.target.value })
          }
        />
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          سوابق جراحی
        </Typography>
        <TextField
          id="filled-multiline-flexible"
          multiline
          minRows={4}
          fullWidth
          value={props.Surgery}
          onChange={(e) =>
            props.UserIllnessSurgeryHandler({ Surgery: e.target.value })
          }
        />
      </CardContent>
    </Card>
  );
}
