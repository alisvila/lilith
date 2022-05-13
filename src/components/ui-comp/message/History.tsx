import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  TextField,
} from "@mui/material";
import PerfectScrollbar from "react-perfect-scrollbar";
import { MessageLeft, MessageRight } from "./Message";
import styled from "@emotion/styled";
import SendIcon from "@mui/icons-material/Send";

const NewPaper = styled(Paper)(({ theme }: any) => ({
  width: "100%",
  height: "80vh",
  maxHeight: "700px",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  position: "relative",
  boxShadow: "none",
}));

const MessagesBody = styled(Paper)(({ theme }: any) => ({
  // width: "calc( 100% - 20px )",
  width: "100%",
  margin: 10,
  overflowY: "auto",
  height: "calc( 100% - 80px )",
}));

const SearchButton = () => {
  return (
    <Button variant="contained" endIcon={<SendIcon />}>
      ارسال
    </Button>
  );
};

export default function History(props: any) {
  const [message, setMessage] = useState("");
  useEffect(() => {
    console.log(props.historyObj, "==================================");
  }, []);

  return (
    <Grid item xs={12}>
      <Grid container spacing={5}>
        <Grid item lg={12} xs={12}>
          <Card {...props}>
            <CardContent>
              <NewPaper>
                  <MessagesBody id="style-1">
                <PerfectScrollbar>
                    {!!props.historyObj &&
                      props.historyObj.map((item: any) => {
                        if (item.from === "self") {
                          return (
                            <MessageRight
                              message={item.message}
                              timestamp={item.time}
                              photoURL={item.avatar}
                              displayName={item.from}
                              avatarDisp={true}
                            />
                          );
                        } else {
                          return (
                            <MessageLeft
                              message={item.message}
                              timestamp={item.time}
                              photoURL={item.avatar}
                              displayName={item.from}
                              avatarDisp={true}
                            />
                          );
                        }
                      })}
                </PerfectScrollbar>
                  </MessagesBody>
                <TextField
                  id="standard-name"
                  label="ارسال پیام"
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  fullWidth
                  InputProps={{ endAdornment: <SearchButton /> }}
                />
              </NewPaper>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Grid>
  );
}
