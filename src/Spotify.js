
import React from "react";
import { FaSpotify } from 'react-icons/fa';
import "./index.scss";
import { Grid } from '@material-ui/core';
import $ from "jquery";

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const clientId = "";
const redirectUri = "http://localhost:3001/discography";
const user_albums_url = "https://api.spotify.com/v1/me/albums?limit=50&";

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

  updateItem = (res) => {
    res.items.forEach(elem => {
      this.state.item.push({
        art: elem.album.images[0].url,
        artists: elem.album.artists,
        name: elem.album.name,
        url: elem.album.external_urls.spotify
      })
    });
    this.setState({
      item: this.state.item
    });
  }

  getUserAlbums = (token, offset) => {
    $.ajax({
      url: user_albums_url+'offset='+offset,
      type: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      success: function (res) {
        console.log(res)
        if(res.items.length > 0){
          this.updateItem(res);
          this.getUserAlbums(token, offset+50)
        }
      }.bind(this)
    });
  }

  componentDidMount() {
    let _token = hash.access_token;
    if (_token) {
      this.setState({
        token: _token
      });
      this.getUserAlbums(_token, 0)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        {!this.state.token && (
          <a
            className="btn btn--loginApp-link"
            href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
          >
            Login to <FaSpotify />
          </a>
        )}
        {this.state.item.length > 0 && (
          <Grid className='p-100' container spacing={2}>
              { this.state.item.map(album => (
                <Grid className='album' item sm={6} md={3}>
                  <a href={album.url}>
                    <img src={album.art} style={{width:'100%'}} />
                  </a>
                </Grid>
              ))}
          </Grid>
        )}
      </div>
    );
  }
}
export default Spotify;