import { Box, Container } from '@mui/material';
import { PatientListResults } from '../../components/patents/PatientListResults';
import { PatientListToolbar } from '../../components/patents/PatientListToolbar';
import DashLayout from '../layouts/dashboard';
import { customers } from '../../__mocks__/customers';

const DocPatients = () => (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2
      }}
    >
      <Container maxWidth={false}>
        <PatientListToolbar />
        <Box sx={{ mt: 3 }}>
          <PatientListResults customers={customers} />
        </Box>
      </Container>
    </Box>
);

export default DocPatients;


// https://rossbulat.medium.com/advanced-typescript-by-example-api-service-manager-7ea591f5eba8
