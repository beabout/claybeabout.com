
import React from "react";
import "./index.scss";
import { Grid, Button } from '@material-ui/core';
import FadeIn from 'react-fade-in';
import $ from "jquery";

export const authEndpoint = 'https://accounts.spotify.com/authorize';
const redirectUri = "https://claybeabout.com/discography";
const sp_api_url = "https://api.spotify.com/v1"
const get_user_albums = `${sp_api_url}/me/albums?limit=50&`;
const get_user_playlists = `${sp_api_url}/users/cbeeb121/playlists?limit=20&`;

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

function getClientID(){
  return "fed1c759d0d140f591fddf0ba2689b1b";
}

class Spotify extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      token: null,
      albums: [],
      playlists: []
    }
    this.getUserAlbums = this.getUserAlbums.bind(this);
  }

  updateAlbums = (res) => {
    res.items.forEach(elem => {
      this.state.albums.push({
        art: elem.album.images[0].url,
        artists: elem.album.artists,
        name: elem.album.name,
        url: elem.album.external_urls.spotify
      })
    });
    this.setState({
      albums: this.state.albums
    });
  }

  updatePlaylists = (res) => {
    res.items.forEach(elem => {
      this.state.playlists.push({
        art: (elem.images.length > 0 ? elem.images[0].url : ''),
        desc: elem.description,
        id: elem.id,
        name: elem.name,
        url: elem.external_urls.spotify,
        tracks: elem.tracks
      })
    });
    this.setState({
      playlists: this.state.playlists
    });
  }
  
  updateSpotifyFile = (data) => {
    var albums_string = JSON.stringify(this.state.albums)
  }

  getUserAlbums = (token, offset) => {
    $.ajax({
      url: get_user_albums + 'offset=' + offset,
      type: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      success: function (res) {
        if(res.items.length > 0){
          this.updateAlbums(res);
          this.getUserAlbums(token, offset+50)
        }
      }.bind(this)
    });
  }

  getUserPlaylists = (token, offset) => {
    $.ajax({
      url: get_user_playlists + 'offset=' + offset,
      type: 'GET',
      headers: {
        'Authorization': 'Bearer ' + token
      },
      success: function (res) {
        if (res.items.length > 0) {
          this.updatePlaylists(res);
          this.getUserPlaylists(token, offset + 20)
          console.log(res)
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
      this.getUserPlaylists(_token, 0)
    }
  }

  render() {
    return (
      <div className="App">
        <FadeIn>
          <header className="App-header">
          </header>
          {!this.state.token && (
            <div>
              <div className="left-exposed">
                <p>
                  Login to see your spotify record collection
                  <Button 
                    className="btn-primary"
                    href={`${authEndpoint}?client_id=${getClientID()}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`}
                    >
                    Login to Spotify
                  </Button>
                </p>
              </div>
            </div>
          )}
          {this.state.albums.length > 0 && (
            <div>
              <div className="heading1">
                <h2>Your Collection</h2>
              </div>
              <Grid className='p-100' container spacing={2}>
                { this.state.albums.map(album => (
                  <Grid className='album' item sm={4} md={2}>
                    <a href={album.url} target="_blank">
                      <img src={album.art} style={{width:'100%'}} />
                    </a>
                  </Grid>
                ))}
              </Grid>
            </div>
          )}
          {/* {this.state.playlists.length > 0 && (
            <Grid className='p-100' container spacing={2}>
            { this.state.playlists.map(playlist => (
              <Grid className='playlist' container spacing={2}>
              <Grid item sm={4} md={4}>
              <a href={playlist.url}>
              <img src={playlist.art} style={{ width: '100%' }} />
              </a>
              </Grid>
              <Grid item sm={8} md={8}>
              <h2>{playlist.name}</h2>
              <h4>{playlist.desc}</h4>
              </Grid>
              </Grid>
              ))}
              </Grid>
            )} */}
        </FadeIn>
      </div>
    );
  }
}
export default Spotify;