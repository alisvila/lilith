import react, { useEffect, useState } from "react";
import { Box, Container, Skeleton } from "@mui/material";
import { CustomerListResults } from "../components/customers/customerListResults";
import { CustomerListToolbar } from "../components/customers/customerListToolbar";
import DashLayout from "./layouts/dashboard";
import { customers } from "../__mocks__/customers";
import { getProfile } from "../api/profile";

export default function Customers(props: any) {
  const [docList, setDocList]: any = useState([])
  const [isLoading, setIsLoading]: any = useState(true)

  useEffect(() => {
    const getDocs = async () => {
      const docs = await getProfile("/Doctor");
      setDocList(docs)
      setIsLoading(false)
    }
    getDocs()
  }, []);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2,
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>

          <CustomerListResults customers={docList} isLoading={isLoading}/>
        </Box>
      </Container>
    </Box>
  );
}

// https://rossbulat.medium.com/advanced-typescript-by-example-api-service-manager-7ea591f5eba8
