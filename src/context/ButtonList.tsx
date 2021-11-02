
import React, { useContext } from 'react'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { List, Button } from '@material-ui/core';

import { materialTheame, sharpTheame, cherryBonBonTheame, seaWaveTheame } from './Model';
import { themeContext } from './Context';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    list:{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      
    },
    root: {
      fontSize: '0.6rem',
      width: '3rem',
      color: '#000',
      marginBottom: '.3rem'
    },
  }),
);


const ButtonList = () => {
  const classes = useStyles();
  const [customTheme, setCustomTheme] = useContext(themeContext)
  return (
    <List className={classes.list}>
      <h3>Pick Colors</h3>
      <Button
        style={{ backgroundColor: '#6a1b9a' }}
        onClick={() => setCustomTheme(materialTheame)}
        className={classes.root}
      >
        Material
      </Button>
      <Button
        style={{ backgroundColor: '#ffeb3b' }}
        onClick={() => setCustomTheme(sharpTheame)}
        className={classes.root}
      >
        Sharp
      </Button>
      <Button
        style={{ backgroundColor: '#c62828' }}
        onClick={() => setCustomTheme(cherryBonBonTheame)}
        className={classes.root}
      >
        Cherry
      </Button>
      <Button
        style={{ backgroundColor: '#9be7ff' }}
        onClick={() => setCustomTheme(seaWaveTheame)}
        className={classes.root}
      >
        Wave
      </Button>
    </List>
  )
}

export default ButtonList
