import styled from "@emotion/styled";
import { Skeleton } from "@mui/material";

const CustomSkeleton: any = styled(Skeleton)(({ theme }: any) => ({
  backgroundColor: theme.palette.background.main,
  borderRadius: theme.shape.borderRadius,
}));

export default CustomSkeleton;
