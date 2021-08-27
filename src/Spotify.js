import React, { Component } from "react";
import { FaSpotify } from 'react-icons/fa';
// import hash from "./hash";
import "./index.scss";
export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = "fed1c759d0d140f591fddf0ba2689b1b";
const redirectUri = "http://localhost:3001";
const user_albums_url = "https://api.spotify.com/v1/me/albums";

const scopes = [
  "user-library-read",
];

// Get the hash of the url
const hash = window.location.hash
  .substring(1)
  .split("&")
  .reduce(function (initial, item) {
    if (item) {
      var parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
    }
    return initial;
  }, {});

window.location.hash = "";

class Spotify extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      token: null,
    item: {
      album: {
        images: [{ url: "" }]
      },
    }
    }
  }

  getUserAlbums(token) {
    // Make a call using the token
    $.ajax({
      url: user_albums_url,
      type: "GET",
      beforeSend: (xhr) => {
        xhr.setRequestHeader("Authorization", "Bearer " + token);
      },
      success: (data) => {
        this.setState({
          item: data.item,
          is_playing: data.is_playing,
          progress_ms: data.progress_ms,
        });
      }
    });
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;
  
    if (_token) {
      // Set token
      this.setState({
        token: _token
      });
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {!this.state.token && (
            <a
              className="btn btn--loginApp-link"
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
            >
              Login to <FaSpotify />
            </a>
          )}
          {this.state.token && (
            <div>show me something</div>
          )}
        </header>
      </div>
    );
  }
}
export default Spotify;