import React from 'react';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export default function ToggleButtons({handleGroupButton}) {
  return (
      <Grid item xs={12} md={12}>
        <ButtonGroup fullWidth aria-label="full width outlined button group">
          <Button onClick={() => handleGroupButton('check')}>Check All</Button>
          <Button onClick={() => handleGroupButton('uncheck')}>Uncheck All</Button>
          <Button onClick={() => handleGroupButton('delete')}>Delete All</Button>
        </ButtonGroup>
      </Grid>
  );
}