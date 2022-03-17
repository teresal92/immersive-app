import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function Room({mood}) {
  return (
    <Card sx={{ maxWidth: 400, maxHeight: 500 }}>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {mood}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Enter Room</Button>
        <Button size="small">Favorite</Button>
      </CardActions>
    </Card>
  );
}