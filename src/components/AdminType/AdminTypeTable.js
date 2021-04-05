import React from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

const columns = [
  { id: "SNO", label: "S.no", minWidth: 50 },
  { id: "AdminTypeName", label: "Admin Type Name", minWidth: 100 },
  {
    id: "AdminID",
    label: "Admin ID",
    minWidth: 120,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "ConnectedUser",
    label: "Connected User",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "Createdby",
    label: "Created by",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "DateCreated",
    label: "Date Created",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "Actions",
    label: "Actions",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(
  SNO,
  AdminID,
  AdminTypeName,
  ConnectedUser,
  Createdby,
  DateCreated,
  Actions
) {
  return {
    SNO,
    AdminID,
    AdminTypeName,
    ConnectedUser,
    Createdby,
    DateCreated,
    Actions,
  };
}

const rows = [
  createData(
    "1",
    "Admin Type Name",
    "001",
    1324171,
    "Durgesh Kumar",
    "Jan 30,2021 0:39:37"
  ),
  createData(
    "2",
    "Admin Type Name",
    "001",
    1403500,
    "Durgesh Kumar",
    "Jan 30,2021 0:39:37"
  ),
  createData(
    "3",
    "Admin Type Name",
    "001",
    6048397,
    "Durgesh Kumar",
    "Jan 30,2021 0:39:3"
  ),
  createData(
    "4",
    "Admin Type Name",
    "001",
    3271674,
    "Durgesh Kumar",
    "Jan 30,2021 0:39:37"
  ),
  createData(
    "5",
    "Admin Type Name",
    "001",
    3760210,
    "Durgesh Kumar",
    "Jan 30,2021 0:39:37"
  ),
  createData(
    "6",
    "Admin Type Name",
    "001",
    2547540,
    "Durgesh Kumar",
    "Jan 30,2021 0:39:37"
  ),
  createData(
    "7",
    "Admin Type Name",
    "001",
    8301920,
    "Durgesh Kumar",
    "Jan 30,2021 0:39:37"
  ),
];

function AdminTypeTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <div classname="admintypetable">
      <Paper className="admintype__body-table-paper">
        <TableContainer className="admintype__body-table-container">
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}

export default AdminTypeTable;
