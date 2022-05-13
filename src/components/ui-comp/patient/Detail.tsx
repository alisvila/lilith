import React from 'react'
import { Grid } from '@mui/material'
import MoreDetail from '../dash/MoreDetail'

export default function Detail() {
  return (
    <Grid item xs={12}>
      <Grid container spacing={5}>
        <Grid item lg={12} xs={12}>
          <MoreDetail sx={{ height: "100%" }} />
        </Grid>
      </Grid>
    </Grid>
    )
}
