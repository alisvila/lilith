import { v4 as uuid } from "uuid";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  ButtonGroup,
  Modal,
  Backdrop,
  Fade,
  Paper,
  Typography,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useEffect, useState } from "react";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid",
  borderColor: "primary.main",
  boxShadow: 24,
  p: 4,
  borderRadius: "25px"
};

export const MealList = (props: any) => {
  const [open, setOpen] = useState(false);
  const [calery, setCalery]: any = useState("ss");

  useEffect(() => {
    // setCalery(api.call())
  }, []);

  const deleteCalery = () => {
    // api.callDelete(selectedCalery)
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Card {...props}>
        <Grid sx={{ p: 3 }} container>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">کالری</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={props.selectedCalery}
                label="Age"
                onChange={props.handleChange}
              >
                {props.caleryList.map((item: any, index: number) => (
                  <MenuItem key={index} value={item.calorie}>
                    {item.calorie}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={2} sm={4} md={6} lg={6}></Grid>
          <Grid
            item
            xs={6} sm={4} md={2} lg={2}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            <Button
              variant="outlined"
              color="error"
              endIcon={<RemoveIcon />}
              onClick={deleteCalery}
            >
              حذف
            </Button>
            <Button
              variant="contained"
              endIcon={<AddIcon />}
              onClick={handleOpen}
            >
              اضافه
            </Button>
          </Grid>
        </Grid>
      </Card>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={() => setOpen(false)}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Grid spacing={2} sx={style} container>
            <Grid item>
              <Typography
                id="transition-modal-title"
                variant="h6"
                component="h2"
              >
                افزودن کالری چدید
              </Typography>
            </Grid>
            <Grid>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Grid>
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                fullWidth
                value={calery}
                onChange={(e: any) => setCalery(e.target.value)}
              />
              </FormControl>

            <Divider />
            <Grid sx={{mt: 2}}>
              <Button variant="contained" onClick={() => props.saveCalery(calery)}>ثبت</Button>
              <Button variant="text" onClick={() => setOpen(false)}>انصراف</Button>
            </Grid>
          </Grid>
        </Fade>
      </Modal>
    </>
  );
};
