package client

import (
	"github.com/Kazalo11/guess_the_song/internal/util"
	"github.com/gin-gonic/gin"

	"github.com/zmb3/spotify/v2"
	spotifyauth "github.com/zmb3/spotify/v2/auth"
)

var (
	auth = spotifyauth.New(
		spotifyauth.WithRedirectURL(redirectURI),
		spotifyauth.WithScopes(spotifyauth.ScopePlaylistReadPrivate, spotifyauth.ScopePlaylistReadCollaborative, spotifyauth.ScopeUserLibraryRead),
	)
	state        = "abc123"
	codeVerifier = util.RandomBytesInHex(32)
	userClient   *spotify.Client
	serverClient *spotify.Client
)

const redirectURI = "http://localhost:8080/v1/spotify/callback"

func SpotifyRoutes(superRoute *gin.RouterGroup) {
	spotifyRouter := superRoute.Group("/spotify")
	{
		spotifyRouter.GET("/auth", getSpotifyAuthURL)
		spotifyRouter.GET("/callback", completeAuth)
		spotifyRouter.GET("/search/artists", searchForArtists)
	}
}

//TODO: Add in api to get users playlists

//TODO: Given a users playlist, get all songs
