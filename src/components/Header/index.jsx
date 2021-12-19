import Register from 'features/Auth/components/Register';
import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import CloseIcon from '@mui/icons-material/Close';
import { makeStyles } from '@mui/styles';
import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogContent,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: 2,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#fff',
    textDecoration: 'none',
  },
  closeButton: {
    position: 'absolute',
    top: 1,
    right: 1,
    color: 'grey',
    zIndex: 1,
  },
});

export default function Header() {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className={classes.link}>
            <CodeIcon className={classes.menuButton} />
          </Link>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/" className={classes.link}>
              My Shop
            </Link>
          </Typography>

          <NavLink to="/todos" className={classes.link}>
            <Button color="inherit">Todo</Button>
          </NavLink>

          <NavLink to="/albums" className={classes.link}>
            <Button color="inherit">Album</Button>
          </NavLink>

          <Button onClick={handleClickOpen} color="inherit">
            Register
          </Button>
        </Toolbar>
      </AppBar>

      <Dialog
        disableEscapeKeyDown
        open={open}
        onClose={(event, reason) => {
          if (reason !== 'backdropClick') {
            handleClose(event, reason);
          }
        }}
      >
        <IconButton
          size="large"
          sx={{
            display: 'flex',
            position: 'absolute',
            justifyContent: 'end',
            ml: 1,
            '&.MuiButtonBase-root:hover': {
              bgcolor: 'transparent',
            },
            zIndex: 1,
          }}
          className={classes.closeButton}
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent>
          <Register />
        </DialogContent>
      </Dialog>
    </Box>
  );
}
