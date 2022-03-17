import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function PlaylistListEntry({playlist, handleSelectPlaylist}) {
  if (playlist.images.length === 0) {
    return <div>Loading playlists...</div>
  }

  return (
    <Card sx={{ maxWidth: 400, maxHeight: 500 }}>
      <CardMedia
        component="img"
        height="300"
        width="300"
        image={playlist.images[0].url}
        alt="playlist cover"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {playlist.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          onClick={(e) => handleSelectPlaylist(e, playlist.id)}
        >
          Select Playlist
        </Button>
      </CardActions>
    </Card>
  );
};


// function PlaylistListEntry({playlist}) {
//   if (playlist.images.length === 0) {
//     return <div>Loading playlists...</div>
//   }

//   return (
//     <li className="playlist-entry">
//       <div className="playlist-card" style={{ height: '400px', width: '400px', margin: '0 auto'}}>
//         <img src={playlist.images[0].url} alt="playlist cover" height={300} width={300} />
//         <h4>{playlist.name}</h4>
//         <p>{playlist.description}</p>
//         <p>Tracks: {playlist.tracks.total}</p>
//       </div>
//     </li>
//   )
// };

export default PlaylistListEntry;