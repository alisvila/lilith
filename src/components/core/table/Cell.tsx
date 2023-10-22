import styled from "@emotion/styled";
import React, { useState } from "react";

type State = {
  edit: boolean;
  value: string;
};

const Select = styled("select")(({ theme }: any) => ({
  margin: "50px",
  width: "150px",
  padding: "5px 35px 5px 5px",
  fontSize: "16px",
  border: "1px solid #ccc",
  height: "34px",
  "&:focus": {
    outline: "none !important",
    borderColor: theme.palette.secondary[800],
    borderRadius: "5px",
    // box-shadow: 0 0 10px #719ece;
  },
}));

const Input = styled("input")(({ theme }: any) => ({
  border: "1px solid rgb(0 0 0 / 8%)",
  "&:focus": {
    outline: "none !important",
    borderColor: theme.palette.secondary[800],
    borderRadius: "5px",
    // box-shadow: 0 0 10px #719ece;
  },
}));

const Span = styled("span")(({ theme }: any) => ({
  border: "1px solid rgb(0 0 0 / 8%)",
}));

export default function Cell(props: any) {
  const [edit, setEdit] = useState(false);
  const [state, setState]: any = useState({ value: props.value });
  //   const [display, setDisplay] = useState(
  //     props.determineDisplay({ x: props.x, y: props.y }, props.value)
  //   );

  const calculateCss: any = () => {
    let css: any = {
      flex: 1,
      // maxWidth: "150px",
      // width: '100%',
      padding: "4px",
      margin: "0",
      height: "35px",
      boxSizing: "border-box",
      position: "relative",
      display: "inline-block",
      color: "#424242",
      borderWidth: "1px",
      textAlign: "center",
      verticalAlign: "top",
      fontSize: "14px",
      lineHeight: "25px",
      overflow: "hidden",
    };

    if (props.type === "drop" || Array.isArray(state.value)) {
      css.backgroundColor = "#fff";
    }

    if (props.x === 0 || props.y === 0) {
      css.backgroundColor = "#f0f0f0";
      // css.fontWeight = "bold";
    }

    if (props.x === 0) {
      css.position = "sticky";
      css.right = "0";
      css.zIndex = "5";
      // css.fontWeight = "bold";
    }

    return css;
  };

  const onChange = (e: any) => {
    props.handleChange(e.target.value, props.id, props.name);
    // setState(e.target.value);
  };

  const checkTitle = () => {
    if (props.isReadOnly) {
      return <Span style={calculateCss()}>{props.value} </Span>;
    } else if (Array.isArray(props.value)) {
      return (
        <Select style={calculateCss()} id="cars" name="cars">
          {props.value.map((item: any) => {
            return <option value={item}>{item}</option>;
          })}
        </Select>
      );
    } else {
      return (
        <Input
          className="exel-input"
          id={props.id}
          style={calculateCss()}
          type="text"
          value={props.value}
          onChange={onChange}
          autoComplete="off"
        />
      );
    }
  };

  return <>{checkTitle()}</>;
}
