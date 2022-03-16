import React, { useState, useEffect } from 'react';
import PlaylistListEntry from './PlaylistListEntry.jsx';

function PlaylistList({playlists}) {
  return (
    <div className="playlist">
      {playlists.length > 0 ? <h4>Playlist Results</h4> : <h3>No Results Found</h3>}
      <ul>
        {playlists.map((playlist, i) => <PlaylistListEntry key={i} playlist={playlist} />)}
      </ul>
    </div>
  )
};

export default PlaylistList;