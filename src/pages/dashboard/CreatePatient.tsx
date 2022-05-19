import React, { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import { Container } from "@mui/material";
import Create from "../../components/ui-comp/patient/CreatePatient";
import CreateDoc from "../../components/ui-comp/doc/create";
import { useParams } from "react-router-dom";
import { getSingleProfile } from "../../api/profile";

export default function CreatePatientPage() {
  const [patientDetail, setPatientDetail]: any = useState();
  const [isLoading, setIsLoading]: any = useState(false);
  let { id } = useParams();
  useEffect(() => {
    const getpatientDetail = async () => {
      const docs: any = await getSingleProfile("/Patient", id);
      setPatientDetail(docs);
      setIsLoading(false);
    };
    if (id) {
      setIsLoading(true);
      getpatientDetail();
    }
  }, []);

  return (
    <Container maxWidth={false}>
      <Create  patientDetail={patientDetail} isLoading={isLoading} />
    </Container>
  );
}
