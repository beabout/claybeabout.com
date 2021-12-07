import { data } from "jquery";
import React, { Component } from "react";
import { FaSpotify } from 'react-icons/fa';
import "./index.scss";
import $ from "jquery";

export const authEndpoint = 'https://accounts.spotify.com/authorize';
// Replace with your app's client ID, redirect URI and desired scopes
const clientId = 0; // load from file
const redirectUri = "http://localhost:3001/discography";
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
      item: []
    }
    this.getUserAlbums = this.getUserAlbums.bind(this);
  }

  setItem = (res, _token) => {
    this.setState({
      token: _token,
      item: res.items.map(i => i.album.images[0].url)
    });
  }

  getUserAlbums = (token) => {
    this.setState({ item: "Bang bang bih"})
    $.ajax({
      url: user_albums_url,
      type: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      success: function (res) {
        if(res){
          console.log(res);
          this.setItem(res, token);
        }
      }.bind(this)
    });
  }

  componentDidMount() {
    // Set token
    let _token = hash.access_token;
  
    if (_token) {
      // Set token
      this.setState({
        token: _token,
        item: this.getUserAlbums(_token)
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
            <div>
              <div> Token: { this.state.token }</div>
              <div> item: { this.state.item }</div>
            </div>
          )}
        </header>
      </div>
    );
  }
}
export default Spotify;