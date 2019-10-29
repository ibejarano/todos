import React from 'react';
import Popover from '@material-ui/core/Popover';
import EditText from './EditText';
import EditButton from './EditButton';



export default function EditPopper({ target, 
  ind , 
  isOpen , 
  text, handleClose, 
  handleEditConfirm,
  handleEditChange
}) {

  const id = isOpen ? 'simple-popover' : undefined;
  let anchorEl = target? target : null;

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
        }}
      >
        <form onSubmit={(e) => {
          e.preventDefault();
          handleEditConfirm( ind )
          }}>
        <EditText text={text} handleEditChange={handleEditChange} />
        <EditButton type='submit' />
        </form>
      </Popover>
    </div>
  );
}