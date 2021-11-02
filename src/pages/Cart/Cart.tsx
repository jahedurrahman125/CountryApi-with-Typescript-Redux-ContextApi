import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Table, TableRow, TableCell, TableBody, Button, Avatar } from '@material-ui/core';

import fetchStoreData from '../../StoreData/StoreData';
import { removeCountry } from '../../redux/actions';
import useStyles from './Style';

export default function Cart() {
  const dispatch = useDispatch();
  const dataInCart = fetchStoreData();
  const classes = useStyles();
  const history = useHistory();

  const handleHistry = () => {
    history.push('/')
  }
  return (
    <Table className={classes.root}>
      <TableBody>
        {dataInCart.map(item => (
          <TableRow>
            <TableCell>
              <Avatar
                src={item.flag}
                alt="flag"
                className={classes.avatar}
              />
            </TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>
              <Button className={classes.button} onClick={() => dispatch(removeCountry(item))}>Remove</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <Button className={classes.buttonBack} onClick={handleHistry}>Go Back</Button>
    </Table >
  )
} 