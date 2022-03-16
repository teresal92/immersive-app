import React from 'react';

export default function Login() {
  return (
    <div className="login">
      <h1 style={{ fontSize: '120px'}}>Welcome</h1>
      <p>To start a focus session, log into spotify.
        Select your focus playlist of choice and a background based on your mood.
        Then head over to focus mode to start your personalized pomodoro session
      </p>
      <a
        href="http://localhost:3000/login"
        target="popup"
        onClick="window.open('http://localhost:3000/login','popup','width=600,height=600')"
      >
        Login to Spotify
      </a>
    </div>
  )
};