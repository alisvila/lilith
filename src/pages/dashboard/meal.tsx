import React, { useState, useEffect } from "react";
import { Container, Grid, Button } from "@mui/material";
import DashLayout from "../layouts/dashboard";
import Table from "../../components/ui-comp/table/TableWrapper";
import { MealList } from "../../components/ui-comp/dash/MealList";
import { createProfile, getProfile } from "../../api/profile";
import CustomSkeleton from "../../components/ui-comp/Skeleton";

export default function Meal() {
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCalery, setSelected]: any = useState("2500");
  const [caleryList, setCaleryList]: any = useState([]);

  useEffect(() => {
    getMealCata();
  }, []);

  const handleChange = (e: any) => {
    setSelected(e.target.value);
  };

  const getMealCata = async () => {
    setIsLoading(true);
    const mainC: any = await getProfile("/Pattern/MainCalories");
    setCaleryList(mainC);
    setIsLoading(false);
  };

  const saveCalery = async (calery: any) => {
    const payload = {
      calorie: +calery,
      doctorId: 4,
      typeIds: [1, 2, 4, 8], // what the hell
    };
    const mainC: any = await createProfile("/Pattern/MainCalories", payload);
    await getMealCata();
    
  };

  const handleSubmit = async (payload: any, id: number) => {
    await createProfile(`/Pattern/${selectedCalery}/${id}`, payload);
  };

  return (
    <Container maxWidth={false}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={12}>
          <MealList
            isLoading={isLoading}
            handleChange={handleChange}
            caleryList={caleryList}
            selectedCalery={selectedCalery}
            saveCalery={saveCalery}
            sx={{ height: "100%" }}
          />
        </Grid>
        <Grid item xs={12} lg={12}>
          {isLoading ? (
            <CustomSkeleton
              animation="wave"
              variant="rectangular"
              height={260}
            />
          ) : (
            <Table
              selectedCalery={selectedCalery}
              handleSubmit={handleSubmit}
            />
          )}
        </Grid>
      </Grid>
    </Container>
  );
}
