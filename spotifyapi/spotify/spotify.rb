require 'rspotify'
require './spotify'

class Spotify
  def initialize
    id     = ""
    secret = ""
    RSpotify::authenticate(id, secret)
  end

  def clay
    RSpotify::User.new('cbeeb121')
  end

  def search_artists(name)
    artists = RSpotify::Artist.search(name)
  end

  def search_albums(name)
    albums = RSpotify::Album.search(name)
  end

  def search_track(name)
    songs = RSpotify::Track.search(name)
  end

  def find_artists(name)
    artists = RSpotify::Artist.find(name)
  end

  def find_albums(name)
    albums = RSpotify::Album.find(name)
  end

  def find_user(name)
    user = RSpotify::User.find(name)
  end

  def find_track(name)
    songs = RSpotify::Track.find(name)
  end
end
