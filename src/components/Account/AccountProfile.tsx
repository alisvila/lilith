import { Avatar, Box, Card, CardContent, Typography } from "@mui/material";
import User from "src/types/User";

export const AccountProfile = (props: { accountDetail: any }) => (
  <Card>
    <CardContent>
      <Box
        sx={{
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <input
          type="file"
          accept="image/*"
          style={{ display: "none" }}
          id="contained-button-file"
        />
        <label htmlFor="contained-button-file">
          <Avatar
            src={props.accountDetail.avatar}
            sx={{
              height: 64,
              mb: 2,
              width: 64,
              cursor: "Pointer",
            }}
          />
        </label>

        <Typography color="textPrimary" gutterBottom variant="h5">
          {props.accountDetail.name}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {`${props.accountDetail.city} ${props.accountDetail.country}`}
        </Typography>
        <Typography color="textSecondary" variant="body2">
          {props.accountDetail.timezone}
        </Typography>
      </Box>
    </CardContent>
    {/* <Divider /> */}
    {/* <CardActions>
      <Button color="primary" fullWidth variant="text">
        بارگذاری عکس
      </Button>
    </CardActions> */}
  </Card>
);
