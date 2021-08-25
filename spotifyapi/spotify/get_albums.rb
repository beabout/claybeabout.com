#!/usr/bin/ruby

require 'rspotify'
require './spotify'

def main
  s = Spotify.new
  c = s.clay
  # u = RSpotify::User.new(request.env['omniauth.auth'])
  # u.saved_albums.map(&:title)
end

main
