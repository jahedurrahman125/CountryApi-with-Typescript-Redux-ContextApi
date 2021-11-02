import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      padding: '2rem',
      margin: 'auto',
      width: '50vw',
    },
    avatar: {
      width: '3rem',
      height: '3rem',
    },
    button: {
      backgroundColor: 'green',
      color: '#fff',
      width: '4rem',
      fontSize: '.6rem'
    },
    buttonBack:{
      backgroundColor: 'green',
      color: '#fff',
      width: '4rem',
      fontSize: '.6rem',
      marginTop: '.3rem'
    }
  }),
);
