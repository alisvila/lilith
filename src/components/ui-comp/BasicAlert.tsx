import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts(props: any) {
  return (
      <Alert severity={props.variant}>
          {props.children}
      </Alert>
  );
}
