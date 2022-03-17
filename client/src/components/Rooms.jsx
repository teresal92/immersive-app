import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

import Room from './Room.jsx';

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: '20px',
    paddingRight: '20px'
  }
})

export default function Rooms({moods, handleSelectRoom}) {
  const classes = useStyles();
  return (
    <div>
      <Grid container rowSpacing={2} columnSpacing={2} className={classes.gridContainer}>
        {moods.map((mood, i) =>
          (<Grid key={i} item xs={12} sm={6} md={3}>
            <Room
              mood={mood}
              handleSelectRoom={handleSelectRoom}
            />
          </Grid>)
        )}
      </Grid>
      <Button>Add more Rooms</Button>
    </div>
  )
};
