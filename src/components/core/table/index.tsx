import React, {
    useEffect,
    useState,
    forwardRef,
    useImperativeHandle,
  } from "react";
  import { Grid, Skeleton } from "@mui/material";
  import { updateProfile, getProfile } from "../../../api/profile";
  import Row from "./Row";
  import RowHeader from "./RowHeader";
  import { tableValues } from "./tableValue";
  
  const Table = forwardRef((props: any, ref: any) => {
    const { selectedCalery, id } = props;
    const [data, setData]: any[] = useState([]);
    const [loading, setLoading]: any = useState(true);
  
    const categoury = ["حالی", "نان", "سبزی", "میوه", "لبنیات", "گوشت", "چربی"];
  
    useEffect(() => {
      setLoading(true);
      getMealCata();
    }, []);
  
    useEffect(() => {
      setLoading(true);
      getMealCata();
    }, [props]);
  
    const getMealCata = async () => {
      const meal: any = await getProfile(`/Meal`);
      const LC: any = await getProfile(`/Pattern/${selectedCalery}/${id}`);
      const finalData: any = [];
      meal.map((item: any) => {
        finalData.push({
          mealCaloriePatternId: null,
          mealId: item.id,
          calorie: selectedCalery,
          type: id,
          bread: 0,
          vegetable: 0,
          fruit: 0,
          milk: 0,
          meat: 0,
          fat: 0,
        });
      });
      finalData.map((item: any) => {
        const discoveredLc = LC.find((l: any) => l.mealId === item.mealId);
        Object.assign(item, discoveredLc);
        Object.assign(item, {
          mealId: meal.find((m: any) => m.id === item.mealId),
        });
      });
  
      setData(finalData);
      setLoading(false);
    };
  
    const handleChange = (value: any, rowIndexer: number, cellName: string) => {
      const newState = [...data];
      console.log(newState);
      newState[rowIndexer][cellName] = value;
      setData(newState);
    };
  
    useImperativeHandle(ref, () => ({
      handleSubmit() {
        handleSubmit();
      },
    }));
  
    const handleSubmit = async () => {
      const finalData: any = [];
        data.map((item: any) => {
          finalData.push(Object.assign({}, item, {
            mealId: item.mealId.id,
          }));
        });
  
      try {
        await updateProfile(`/Pattern`, finalData);
      } catch (e) {
        console.log(data);
      }
    };
  
    const makeRow = () => {
      const rows = [];
      rows.push(
        <Grid container>
          <Grid
            item
            lg={12}
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <RowHeader id={id} rowData={categoury} />
          </Grid>
        </Grid>
      );
      data.map((item: any, index: number) => {
        rows.push(
          <Grid container key={index}>
            <Grid
              item
              lg={12}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Row id={index} handleChange={handleChange} rowData={item} />
            </Grid>
          </Grid>
        );
      });
  
      return rows;
    };
  
    return (
      <>
        {loading ? (
          <Skeleton animation="wave" variant="rectangular" height={250} />
        ) : (
          <>{makeRow()}</>
        )}
      </>
    );
  });
  
  export default Table;
  