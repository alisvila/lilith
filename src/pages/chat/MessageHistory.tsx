import React from "react";
import { Container } from "@mui/material";
import History from "../../components/chat";
import { useGetChatHistoryQuery } from "../../services/chat";

export default function MessageHistory() {
  const { data, error, isLoading } = useGetChatHistoryQuery("bulbasaur");

  return (
    <Container maxWidth={false}>
      <History historyObj={data} />
      {isLoading && <>loading....</>}
    </Container>
  );
}
