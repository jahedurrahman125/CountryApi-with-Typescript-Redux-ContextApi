import React, { useState, useContext } from 'react';
import { Table, TableContainer, TableRow, TablePagination, TableCell, TableBody, Paper, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux'

import { valuesOf, Order, Country } from '../../../types';
import TableHeader from '../TableHeader/TableHeader';
import { columns } from '../constants/ColumnNames';
import { addCountry } from '../../../redux/actions/country'
import { getComparator, stableSort } from './SortingFunctions';
import selectorData from '../../../StoreData/StoreData'
import { themeContext } from '../../../context/Context';


const TableContent = (props: valuesOf) => {
  const [order, setOrder] = useState<Order>('asc');   //rowDirection, setRowDirection
  const [orderBy, setOrderBy] = useState('flag');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const dispatch = useDispatch()
  const country = selectorData()
  const [customTheme, setCustomTheme] = useContext(themeContext)

  let data = country.map(item => item.name)

  const getSelectedData = (flag, name) => {
    const country: Country = {
      flag: flag,
      name: name
    }
    dispatch(addCountry(country))
  }

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: any
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrderBy(property);
    setOrder(isAsc ? 'desc' : 'asc')
  };

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  let btnStyle

  if (customTheme) {
    btnStyle = {
      backgroundColor: `${customTheme.button.backgroundColor}`,
      color: `${customTheme.button.textColor}`,
    }
  }
  return (
    <Paper>
      <TableContainer key="mainContent">
        <Table>
          <TableHeader
            order={order}  //rowDirection
            orderBy={orderBy}
            handleRequestSort={handleRequestSort}
            key='header'
          />
          <TableBody key='tableBody'>
            {stableSort((props.data), getComparator(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return <TableRow hover key={row.name}>
                  {
                    columns.map((column) => {
                      const value = row[column.id];
                      return (column.id === "flag") ?
                        <TableCell key={column.id} align={column.align}>
                          <img
                            src={row.flag}
                            alt="flag"
                            style={{ height: "2.5rem", width: "2.5rem", "borderRadius": "50%" }}
                          />
                        </TableCell>
                        : (column.id === "languages") ?
                          <TableCell key={column.id} align={column.align}>
                            <ul
                              style={{
                                paddingLeft: 0,
                                listStylePosition: "inside",
                              }}
                            >
                              {row.languages.map((item) => {
                                return <li key={item.name}>{item.name}</li>;
                              })}
                            </ul>
                          </TableCell>
                          : (column.id === "actions") ?
                            <TableCell key={column.id} align={column.align} >
                              <Button  
                                variant="contained"
                                onClick={() => {
                                  getSelectedData(row['flag'], row['name']);
                                }}
                                disabled={data.findIndex(item => item === row['name']) !== -1}
                                style={btnStyle}
                              >
                                Add product
                              </Button>
                            </TableCell>
                            : <TableCell key={column.id} align={column.align}>
                              {value}
                            </TableCell>
                    })
                  }
                </TableRow>
              })
            }
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 50, 100]}
        component="div"
        count={(props.data).length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}


export default TableContent;