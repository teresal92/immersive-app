import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Room({mood, handleSelectRoom}) {
  return (
    <Card sx={{ maxWidth: 400, maxHeight: 500 }}>
      <CardMedia
        component="img"
        height="140"
        image={`${mood.img_url}`}
        alt={`${mood.name}`}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {mood.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleSelectRoom(mood)}>Enter Room</Button>
        <Button size="small">Favorite</Button>
      </CardActions>
    </Card>
  );
};