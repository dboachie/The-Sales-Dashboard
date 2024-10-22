import Table from "@mui/material/Table";
import Paper from "@mui/material/Paper";
import { mockTransactions } from "../utils/mockData";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "id", width: 70 },
  { field: "user", headerName: "user", width: 130 },
  { field: "date", headerName: "date", width: 130 },
  {
    field: "cost",
    headerName: "cost",
    type: "number",
    width: 90,
  },
];

export default function Transactionbar() {
  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={mockTransactions}
        columns={columns}
        //initialState={{ pagination: { paginationModel } }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
