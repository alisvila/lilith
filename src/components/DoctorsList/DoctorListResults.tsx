import { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";
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
import { persianDate } from "../helper";
import EnhancedTableHead from "../core/grid/EnhancedTableHead";
import EnhancedTableToolbar from "../core/grid/EnhancedTableToolbar";
import GridSkeleton from "../core/grid/GridSkeleton";
import DeleteDialog from "../core/dialog/delete";
import type { Person } from "../../types/User"

const tableHead = [
  {
    id: "name",
    numeric: false,
    disablePadding: true,
    label: "نام",
  },
  {
    id: "email",
    numeric: false,
    disablePadding: true,
    label: "ایمیل",
  },
  {
    id: "address",
    numeric: false,
    disablePadding: true,
    label: "آدرس",
  },
  {
    id: "phoneNumber",
    numeric: false,
    disablePadding: true,
    label: "شماره تماس",
  },
  {
    id: "birthDate",
    numeric: false,
    disablePadding: true,
    label: "تاریخ تولد",
  },
];

export const DoctorListResults = ({ doctors, ...rest }: any) => {
  const [selectedDoctorIds, setSelectedDoctorIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [open, setOpen] = useState(false);

  const handleConfitm = () => {
    console.log("delete");
    selectedDoctorIds.map((id) => {
      // deleteSingleProfile("/Doctor" + id)
      setTimeout(() => console.log("deleted", id), 2000);
    });
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSelectAll = (event: any) => {
    let newselectedDoctorIds;

    if (event.target.checked) {
      newselectedDoctorIds = doctors.map((doctors: Person) => doctors.id);
    } else {
      newselectedDoctorIds = [];
    }

    setSelectedDoctorIds(newselectedDoctorIds);
  };

  const handleSelectOne = (event: any, id: never) => {
    const selectedIndex = selectedDoctorIds.indexOf(id);
    let newselectedDoctorIds: any = [];

    if (selectedIndex === -1) {
      newselectedDoctorIds = newselectedDoctorIds.concat(
        selectedDoctorIds,
        id
      );
    } else if (selectedIndex === 0) {
      newselectedDoctorIds = newselectedDoctorIds.concat(
        selectedDoctorIds.slice(1)
      );
    } else if (selectedIndex === selectedDoctorIds.length - 1) {
      newselectedDoctorIds = newselectedDoctorIds.concat(
        selectedDoctorIds.slice(0, -1)
      );
    } else if (selectedIndex > 0) {
      newselectedDoctorIds = newselectedDoctorIds.concat(
        selectedDoctorIds.slice(0, selectedIndex),
        selectedDoctorIds.slice(selectedIndex + 1)
      );
    }

    setSelectedDoctorIds(newselectedDoctorIds);
  };

  const handleLimitChange = (event: any) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleRemove = () => {
    setOpen(true);

    console.log("deleteall", selectedDoctorIds);
    // createProfile("/Doctor", selectedDoctorIds)
  };

  return (
    <Card {...rest}>
      <CardContent>
        <PerfectScrollbar>
          {/* <Box sx={{ minWidth: 1050 }}> */}
          <Box style={{ overflow: "auto" }}>
            <EnhancedTableToolbar
              numSelected={selectedDoctorIds.length}
              handleRemove={handleRemove}
            />
            <Table>
              <EnhancedTableHead
                headCells={tableHead}
                onSelectAllClick={handleSelectAll}
                numSelected={selectedDoctorIds.length}
                rowCount={doctors.length}
              />
              {/* <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedCustomerIds.length === customers.length}
                    color="primary"
                    indeterminate={
                      selectedCustomerIds.length > 0
                      && selectedCustomerIds.length < customers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                  <TableCell>نام</TableCell>
                  <TableCell>ایمیل</TableCell>
                  <TableCell>آدرس</TableCell>
                  <TableCell>شماره تماس</TableCell>
                  <TableCell>تاریخ تولد</TableCell>
                </TableRow>
              </TableHead> */}
              <TableBody>
                {rest.isLoading && (
                  <>
                    <TableRow>
                      <GridSkeleton cells={6} />
                    </TableRow>
                  </>
                )}
                {doctors.slice(0, limit).map((doctor: Person) => (
                  <TableRow
                    hover
                    key={doctor.id}
                    selected={selectedDoctorIds.indexOf(doctor.id) !== -1}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={
                          selectedDoctorIds.indexOf(doctor.id) !== -1
                        }
                        onChange={(event) =>
                          handleSelectOne(event, doctor.id)
                        }
                        value="true"
                      />
                    </TableCell>
                    <TableCell>
                      <Box
                        component={NavLink}
                        to={`/dashboard/doc/${doctor.id}`}
                        sx={{
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <Avatar src={doctor.avatarUrl} sx={{ mr: 2 }}>
                          {doctor.name}
                        </Avatar>
                        <Typography color="textPrimary" variant="body1">
                          {doctor.name} {doctor.lastName}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>{doctor.email}</TableCell>
                    <TableCell>{doctor.address.city}</TableCell>
                    <TableCell>{doctor.phoneNumber}</TableCell>
                    <TableCell>{persianDate(doctor.birthDate)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>
        <TablePagination
          component="div"
          count={doctors.length}
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
          label={selectedDoctorIds.length}
        />
      </CardContent>
    </Card>
  );
};
