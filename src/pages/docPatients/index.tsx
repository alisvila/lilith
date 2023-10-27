import react, { useEffect, useState } from "react";
import { Box, Button, Container, Typography } from "@mui/material";
import { PatientListResults } from "../../components/patents/PatientListResults";
import { PatientListToolbar } from "../../components/patents/PatientListToolbar";
import DashLayout from "../layouts";
import { useParams } from "react-router-dom";
import { getSingleProfile, deleteSingleProfile } from "../../api/profile";
import DeleteDialog from "../../components/core/deleteDialog";

export default function DocPatients(props: any) {
  const [docDetail, setDocDetail]: any = useState();
  const [docPatient, setDocPatient] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [open, setOpen] = useState(false);

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

  const handleConfitm = () => {
    console.log("delete");
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteDoc = () => {
    deleteSingleProfile("/Doctor", id + "/Patients");
  };
  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2,
      }}
    >
      <Container maxWidth={false}>
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            m: -1,
          }}
        >
          <Typography sx={{ m: 1 }} variant="h3">
            جزییات دکتر
          </Typography>
          <Box sx={{ m: 1 }}>
            <Button
              color="error"
              variant="contained"
              onClick={() => setOpen(true)}
            >
              حذف
            </Button>
          </Box>
        </Box>

        <PatientListToolbar docDetail={docDetail} isLoading={isLoading} />
        <Box sx={{ mt: 3 }}>
          <PatientListResults customers={docPatient} isLoading={isLoading} />
        </Box>
        <DeleteDialog
          open={open}
          handleClose={handleClose}
          handleConfitm={handleConfitm}
          label={docDetail?.name + docDetail?.lastName}
        />
      </Container>
    </Box>
  );
}
