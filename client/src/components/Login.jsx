import React from 'react';

export default function Login() {
  return (
    <div className="login">
      <h1 style={{ fontSize: '120px'}}>Welcome</h1>
      <p>To start a focus session, log into spotify.
        Select a focus room to open up a curated room based on your mood.
      </p>
      <a
        href="http://localhost:3000/login"
        target="popup"
        onClick="window.open('http://localhost:3000/login','popup','width=600,height=600')"
      >
        Login to Spotify
      </a>
      <p style={{ marginTop: '20px'}}>
        After logging in, click the button below to enter the app.
      </p>
      <a
        href="http://localhost:3000/"
      >
        Enter Immersive
      </a>
    </div>
  )
};