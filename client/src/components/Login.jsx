import React from 'react';
const axios = require('axios');

export default function Login() {
  return (
    <div className="login">
      <h1 style={{ fontSize: '120px'}}>Welcome</h1>
      <p>To start a focus session, log into spotify.
        Select your focus playlist of choice and a background based on your mood.
        Then head over to focus mode to start your personalized pomodoro session
      </p>
      <a href='http://localhost:3000/login'>
        Login to Spotify
      </a>
    </div>
  )
};