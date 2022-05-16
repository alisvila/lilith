import react, { useEffect, useState } from "react";
import { Box, Container, Typography } from "@mui/material";
import { PatientListResults } from "../../components/patents/PatientListResults";
import { PatientListToolbar } from "../../components/patents/PatientListToolbar";
import DashLayout from "../layouts/dashboard";
import { customers } from "../../__mocks__/customers";
import { useParams } from "react-router-dom";
import { getSingleProfile } from "../../api/profile";

export default function DocPatients(props: any) {
  const [docDetail, setDocDetail] = useState();
  const [docPatient, setDocPatient] = useState();
  const [isLoading, setIsLoading] = useState(true);
  let { id } = useParams();
  useEffect(() => {
    const getDocDetail = async () => {
      const docs: any = await getSingleProfile("/Doctor", id);
      setDocDetail(docs);
    };
    const getDocPatient = async () => {
      const docs: any = await getSingleProfile("/Doctor", id + "/Patients");
      setDocPatient(docs);
    };
    getDocDetail();
    getDocPatient();
    setIsLoading(false);
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
        <Typography gutterBottom variant="h3">
          جزییات دکتر
        </Typography>
        <PatientListToolbar docDetail={docDetail} isLoading={isLoading} />
        <Box sx={{ mt: 3 }}>
          <PatientListResults customers={docPatient} isLoading={isLoading} />
        </Box>
      </Container>
    </Box>
  );
}
