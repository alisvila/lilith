import React from "react";
import { Container } from "@mui/material";
import SendTicket from "../users/SendTicket";

export default function Ticket() {
  return (
    <Container maxWidth={false}>
      <SendTicket />
    </Container>
  );
}
