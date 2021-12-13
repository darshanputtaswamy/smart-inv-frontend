import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'itype', headerName: 'Perticular Type', width: 150 },
  { field: 'name', headerName: 'Perticular Name', width: 150 },
  {
    field: 'quantity',
    headerName: 'Quantity',
    width: 90,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 90,
  }
];

const rows = [
  {"id":6,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"750 Ml","price":"50"},
  {"id":7,"bid":14,"itype":"BEER","name":"OLD MONK","quantity":"500 ml","price":"50"},
  {"id":8,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"50 Ml","price":"50"},
  {"id":9,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"750 Ml","price":"50"},
  {"id":10,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":11,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":12,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":13,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":14,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":15,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":16,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":17,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":18,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":19,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":20,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":21,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":22,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":23,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":24,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":25,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":26,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"},
  {"id":27,"bid":14,"itype":"Wiskhey","name":"Old Monk","quantity":"350 Ml","price":"50"}
]

export default function Inventory() {
  return (
    <div style={{ height: 500, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
      />
    </div>
  );
}