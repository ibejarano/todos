import React from 'react';
import Popover from '@material-ui/core/Popover';
import {makeStyles} from '@material-ui/core/styles';
import EditText from './EditText';
import ConfirmButton from './ConfirmButton';
import CancelButton from './CancelButton';

const useStyles = makeStyles(theme => ({
  root: {
    width: 600,
    display: 'flex'
  },
}));

export default function EditPopper({
  target,
  ind,
  isOpen,
  text,
  handleClose,
  handleEditConfirm,
  handleEditChange,
}) {
  const classes = useStyles();
  const id = isOpen ? 'simple-popover' : undefined;
  let anchorEl = target ? target : null;

  return (
    <div>
      <Popover
        id={id}
        open={isOpen}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}>
        <form
          className={classes.root}
          onSubmit={e => {
            e.preventDefault();
            handleEditConfirm(ind);
          }}>
          <EditText text={text} handleEditChange={handleEditChange} />
          <ConfirmButton type="submit" />
          <CancelButton type="button" onClick={ () =>{
            console.log('Hola!')
            handleEditConfirm(-1)}} />
        </form>
      </Popover>
    </div>
  );
}
