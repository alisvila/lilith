import React, { useEffect, useState } from "react";
import FormControl from "@mui/material/FormControl";
import { Container } from "@mui/material";
import CreateDoc from "../../components/ui-comp/doc/create"
import { useParams } from "react-router-dom";
import { getSingleProfile } from "../../api/profile";

export default function CreateDoctor() {
  const [docDetail, setDocDetail]: any = useState();
  const [isLoading, setIsLoading]: any = useState(false);
  let { id } = useParams();
  useEffect(() => {
    const getDocDetail = async () => {
      const docs: any = await getSingleProfile("/Doctor", id);
      setDocDetail(docs);
      setIsLoading(false)
    };
    if (id) {
      setIsLoading(true)
      getDocDetail();
    }
  }, []);
  
  return (
    <Container maxWidth={false}>
      <CreateDoc docDetail={docDetail} isLoading={isLoading} />
    </Container>
  );
}
