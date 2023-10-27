import React from "react";
import { Container } from "@mui/material";
import SendTicket from "../../components/sendTicket";

export default function Ticket() {
  return (
    <Container maxWidth={false}>
      <SendTicket />
    </Container>
  );
}
