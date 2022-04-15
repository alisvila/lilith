import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customers/customerListResults';
import { CustomerListToolbar } from '../components/customers/customerListToolbar';
import DashLayout from './layouts/dashboard';
import { customers } from '../__mocks__/customers';

const Customers = () => (
  <DashLayout>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 2
      }}
    >
      <Container maxWidth={false}>
        <CustomerListToolbar />
        <Box sx={{ mt: 3 }}>
          <CustomerListResults customers={customers} />
        </Box>
      </Container>
    </Box>
  </DashLayout>
);

export default Customers;


// https://rossbulat.medium.com/advanced-typescript-by-example-api-service-manager-7ea591f5eba8
