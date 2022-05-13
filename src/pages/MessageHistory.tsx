import { Container } from "@mui/material";
import React from "react";
import historyJson from "./history";
import History from "../components/ui-comp/message/History";

export default function MessageHistory() {
  return (
    <Container maxWidth={false}>
      <History historyObj={historyJson}/>
    </Container>
  );
}
