import react, { useEffect, useState } from "react";
import { Box, Button, Container, debounce, Typography } from "@mui/material";
import { DoctorListResults } from "../../components/DoctorsList/DoctorListResults";
import { getProfile } from "../../api/profile";
import { NavLink, useSearchParams, useNavigate } from "react-router-dom";

export default function DoctorList(props: any) {
  const [docList, setDocList]: any = useState([]);
  const [isLoading, setIsLoading]: any = useState(true);
  const [searchKey, setSearchKey]: any = useState(true);

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const searchQuery = searchParams.get("search");

  const getDocs = async (searchKey?: string) => {
    // const debouncedSearchQuery = useDebounce(searchQuery, 500);

    const docs = searchKey
      ? await getProfile(`/Doctor?seaarch=${searchKey}`)
      : await getProfile("/Doctor");
    setDocList(docs);
    setIsLoading(false);
  };

  useEffect(() => {
    let timer = setTimeout(
      () =>
        navigate({
          pathname: "/doc",
          search: `?search=${searchKey}`,
        }),
      5000
    );
    return () => {
      clearTimeout(timer);
    };
    // getDocs();
  }, [searchKey]);

  //   useEffect(() => {
  //     debounce(getDocs(), 200);
  //   }, []);

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
          <Typography sx={{ m: 1 }} variant="h4">
            لیست دکتر
          </Typography>
          <Box sx={{ m: 1 }}>
            <Button
              component={NavLink}
              to="/dashboard/doc/create"
              color="primary"
              variant="contained"
            >
              افزودن دکتر جدید
            </Button>
          </Box>
        </Box>
        {/* <CustomerListToolbar /> */}
        <Box sx={{ mt: 3 }}>
          <DoctorListResults customers={docList} isLoading={isLoading} />
        </Box>
      </Container>
    </Box>
  );
}

// https://rossbulat.medium.com/advanced-typescript-by-example-api-service-manager-7ea591f5eba8
