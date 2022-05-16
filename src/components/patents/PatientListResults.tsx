import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
import PropTypes from "prop-types";
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  CardContent,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import CustomSkeleton from "../../components/ui-comp/Skeleton";
import { persianDate } from "../helper";

// import { getInitials } from '../../utils/get-initials';

type Customer = {
  id: never;
  avatarUrl: string;
  name: string;
  lastName: string;
  email: string;
  address: string;
  phoneNumber: string;
  registerDate: Date;
};

export const PatientListResults = ({ customers, ...rest }: any) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event: any) => {
    let newSelectedCustomerIds;

    if (event.target.checked) {
      newSelectedCustomerIds = customers.map(
        (customer: Customer) => customer.id
      );
    } else {
      newSelectedCustomerIds = [];
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleSelectOne = (event: any, id: never) => {
    const selectedIndex = selectedCustomerIds.indexOf(id);
    let newSelectedCustomerIds: any = [];

    if (selectedIndex === -1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds,
        id
      );
    } else if (selectedIndex === 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(1)
      );
    } else if (selectedIndex === selectedCustomerIds.length - 1) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newSelectedCustomerIds = newSelectedCustomerIds.concat(
        selectedCustomerIds.slice(0, selectedIndex),
        selectedCustomerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedCustomerIds(newSelectedCustomerIds);
  };

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <CardContent>
        <PerfectScrollbar>
          {/* <Box sx={{ minWidth: 1050 }}> */}
          <Box style={{ overflow: "auto" }}>
            <Table>
              <TableHead>
                <TableRow>
                  {/* <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell> */}
                  <TableCell>نام</TableCell>
                  <TableCell>ایمیل</TableCell>
                  <TableCell>تعداد بیمار</TableCell>
                  <TableCell>شماره تماس</TableCell>
                  <TableCell>آخرین بازدید</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {!customers ? (
                  <>
                    <TableRow>
                      <TableCell>
                        <CustomSkeleton variant="rectangular" height={60} />
                      </TableCell>
                      <TableCell>
                        <CustomSkeleton variant="rectangular" height={60} />
                      </TableCell>
                      <TableCell>
                        <CustomSkeleton variant="rectangular" height={60} />
                      </TableCell>
                      <TableCell>
                        <CustomSkeleton variant="rectangular" height={60} />
                      </TableCell>
                      <TableCell>
                        <CustomSkeleton variant="rectangular" height={60} />
                      </TableCell>
                    </TableRow>
                  </>
                ) : (
                  <>
                    {customers.slice(0, limit).map((customer: Customer) => (
                      <TableRow
                        component={NavLink}
                        to={`/dashboard/patient/${customer.id}`}
                        hover
                        key={customer.id}
                        selected={
                          selectedCustomerIds.indexOf(customer.id) !== -1
                        }
                      >
                        {/* <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedCustomerIds.indexOf(customer.id) !== -1}
                      onChange={(event) => handleSelectOne(event, customer.id)}
                      value="true"
                    />
                  </TableCell> */}
                        <TableCell>
                          <Box
                            sx={{
                              alignItems: "center",
                              display: "flex",
                            }}
                          >
                            <Avatar src={customer.avatarUrl} sx={{ mr: 2 }}>
                              {customer.name}
                            </Avatar>
                            <Typography color="textPrimary" variant="body1">
                              {customer.name} {customer.lastName}
                            </Typography>
                          </Box>
                        </TableCell>
                        <TableCell>{customer.email}</TableCell>
                        <TableCell>{customer.address}</TableCell>
                        <TableCell>{customer.phoneNumber}</TableCell>
                        <TableCell>
                          {persianDate(customer.registerDate)}
                        </TableCell>
                      </TableRow>
                    ))}
                  </>
                )}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        {customers && (
          <TablePagination
            component="div"
            count={customers.length}
            onPageChange={handlePageChange}
            onRowsPerPageChange={handleLimitChange}
            page={page}
            rowsPerPage={limit}
            rowsPerPageOptions={[5, 10, 25]}
          />
        )}
      </CardContent>
    </Card>
  );
};
