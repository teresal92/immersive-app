import React, { useState, useEffect } from 'react';

function PlaylistListEntry({playlist}) {
  if (playlist.images.length === 0) {
    return <div>Loading playlists...</div>
  }

  return (
    <li className="playlist-entry">
      <div className="playlist-card" style={{ height: '400px', width: '400px', margin: '0 auto'}}>
        <img src={playlist.images[0].url} alt="playlist cover" height={300} width={300} />
        <h4>{playlist.name}</h4>
        <p>{playlist.description}</p>
        <p>Tracks: {playlist.tracks.total}</p>
      </div>
    </li>
  )
};

export default PlaylistListEntry;