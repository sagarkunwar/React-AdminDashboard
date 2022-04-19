import React from "react";
import "../datatable/datatable.scss";
import { Link } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";
import { userRows, columns } from "../../datatablesource";

function Datatable() {
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 300,
      renderCell: () => {
        return (
          <div className="cellAction">
            <Link to="/user/id">
              <div className="viewButton">View</div>
            </Link>
            <div className="deleteButton">Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div style={{ height: 750, width: 1300 }} className="datatable">
      <DataGrid
        rows={userRows}
        columns={columns.concat(actionColumn)}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}

export default Datatable;
