import React from "react";
import { Avatar, Card, CardContent, Grid, IconButton, Theme, Typography } from "@mui/material";
import styled from "@emotion/styled";
import './message.css'

const MessageBlue = styled("div")(({ theme }: any) => ({
    position: "relative",
      marginLeft: "20px",
      marginBottom: "10px",
      padding: "13px 29px",
      backgroundColor: "#e7c9ff",
    //   width: "100%",
      //height: "50px",
      textAlign: "left",
      font: "400 .9em 'Open Sans', sans-serif",
      border: "1px solid #d9aefb",
      borderRadius: "10px",
      lineHeight: '25px',
      "&:after": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "15px solid #e7c9ff",
        borderLeft: "15px solid transparent",
        borderRight: "15px solid transparent",
        top: "0",
        left: "-15px",
      },
      "&:before": {
        content: "''",
        position: "absolute",
        width: "0",
        height: "0",
        borderTop: "17px solid #d9aefb",
        borderLeft: "16px solid transparent",
        borderRight: "16px solid transparent",
        top: "-1px",
        left: "-17px"
      }
}))

const MessageOrange = styled("div")(({ theme }: any) => ({
    position: "relative",
    marginRight: "20px",
    marginBottom: "10px",
    padding: "13px 29px",
    backgroundColor: "#e6ecfe",
    // width: "100%",
    //height: "50px",
    textAlign: "left",
    font: "400 .9em 'Open Sans', sans-serif",
    border: "1px solid #bacbff",
    borderRadius: "10px",
    lineHeight: '25px',
    "&:after": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "15px solid #e6ecfe",
      borderLeft: "15px solid transparent",
      borderRight: "15px solid transparent",
      top: "0",
      right: "-15px",
    },
    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "0",
      borderTop: "17px solid #bacbff",
      borderLeft: "16px solid transparent",
      borderRight: "16px solid transparent",
      top: "-1px",
      right: "-17px"
    }
}))

export const MessageLeft = (props: any) => {
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  const photoURL = props.photoURL ? props.photoURL : "dummy.js";
  const displayName = props.displayName ? props.displayName : "名無しさん";
  return (
    <>
      <div className='messageRow'>
        <Avatar
          alt={displayName}
          className="orange"
          src={photoURL}
        ></Avatar>
        <div>
          <div className="displayName">{displayName}</div>
          <MessageBlue>
            <div>
              <p className="messageContent">{message}</p>
            </div>
            <div className="messageTimeStampRight">{timestamp}</div>
          </MessageBlue>
        </div>
      </div>
    </>
  );
};


export const MessageRight = (props: any) => {
  const photoURL = props.photoURL ? props.photoURL : "dummy.js";
  const displayName = props.displayName ? props.displayName : "名無しさん";
  const message = props.message ? props.message : "no message";
  const timestamp = props.timestamp ? props.timestamp : "";
  return (
    <div className="messageRowRight">
      <div>
        <div className="displayName">{displayName}</div>

        <MessageOrange>
          <p className="messageContent">{message}</p>
          <div className="messageTimeStampRight">{timestamp}</div>
        </MessageOrange>
      </div>
      <Avatar alt={displayName} className="orange" src={photoURL}></Avatar>
    </div>
  );
};
