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
  Skeleton,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import CustomSkeleton from "../../core/skeleton";
import { persianDate } from "../../helper";
import EnhancedTableHead from "../../core/grid/EnhancedTableHead";
import EnhancedTableToolbar from "../../core/grid/EnhancedTableToolbar";
import GridSkeleton from "../../core/grid/GridSkeleton";
import { createProfile } from "../../../api/profile";
import DeleteDialog from "../../core/deleteDialog";
import { deleteSingleProfile } from "../../../api/profile";
// import { getInitials } from '../../utils/get-initials';

type Customer = {
  id: never;
  avatarUrl: string;
  lastName: string;
  name: number;
  email: string;
  address: {
    city: string;
    state: string;
    country: string;
  };
  birthDate: string;
  phoneNumber: Date;
};

const tableHead = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "نام",
  },
  {
    id: "date",
    numeric: false,
    disablePadding: true,
    label: "تاریخ ساخت",
  },
];

export const DiseaseListResults = ({ customers, ...rest }: any) => {
  const [selectedCustomerIds, setSelectedCustomerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);

  const handleConfitm = () => {
    console.log("delete");
    selectedCustomerIds.map(id => {
      // deleteSingleProfile("/Doctor" + id)
      setTimeout(() => console.log('deleted', id), 2000)

    })
    setOpen(false)
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const handleRemove = () => {
    setOpen(true)

    console.log("deleteall", selectedCustomerIds);
    // createProfile("/Doctor", selectedCustomerIds)
  };

  return (
    <Card {...rest}>
      <CardContent>
        <PerfectScrollbar>
          {/* <Box sx={{ minWidth: 1050 }}> */}
          <Box style={{ overflow: "auto" }}>
            <EnhancedTableToolbar
              numSelected={selectedCustomerIds.length}
              handleRemove={handleRemove}
            />
            <Table>
              <EnhancedTableHead
                headCells={tableHead}
                onSelectAllClick={handleSelectAll}
                numSelected={selectedCustomerIds.length}
                rowCount={customers.length}
              />
              <TableBody>
                {rest.isLoading && (
                  <>
                    <TableRow>
                      <GridSkeleton cells={3} />
                    </TableRow>
                  </>
                )}
                {customers.slice(0, limit).map((customer: Customer) => (
                  <TableRow
                    hover
                    key={customer.id}
                    selected={selectedCustomerIds.indexOf(customer.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={
                          selectedCustomerIds.indexOf(customer.id) !== -1
                        }
                        onChange={(event) =>
                          handleSelectOne(event, customer.id)
                        }
                        value="true"
                      />
                    </TableCell>
                    <TableCell>
                      <Box
                        component={NavLink}
                        to={`/dashboard/disease/type/${customer.id}`}
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

                    <TableCell>{persianDate(customer.birthDate)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <TablePagination
          component="div"
          count={customers.length}
          onPageChange={handlePageChange}
          onRowsPerPageChange={handleLimitChange}
          page={page}
          labelRowsPerPage="سطر در صفحه:"
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
        <DeleteDialog
          open={open}
          handleClose={handleClose}
          handleConfitm={handleConfitm}
          label={selectedCustomerIds.length}
        />
      </CardContent>
    </Card>
  );
};
