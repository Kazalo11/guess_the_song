package client

import (
	"os"

	"github.com/Kazalo11/guess_the_song/internal/util"
	"github.com/gin-gonic/gin"

	"github.com/zmb3/spotify/v2"
	spotifyauth "github.com/zmb3/spotify/v2/auth"
)

var (
	auth = spotifyauth.New(
		spotifyauth.WithRedirectURL(redirectURI),
		spotifyauth.WithClientID(os.Getenv("SPOTIFY_ID")),
		spotifyauth.WithScopes(spotifyauth.ScopeUserModifyPlaybackState, spotifyauth.ScopeUserReadPlaybackState,
			spotifyauth.ScopeUserReadEmail, spotifyauth.ScopeUserReadEmail, spotifyauth.ScopeStreaming, spotifyauth.ScopeUserLibraryModify,
			spotifyauth.ScopeUserLibraryRead),
	)
	state        = "abc123"
	codeVerifier = util.RandomBytesInHex(32)
	userClient   *spotify.Client
	serverClient *spotify.Client

	codeChallenge = util.GenerateCodeChallenge(codeVerifier)
)

const redirectURI = "http://localhost:8080/v1/spotify/callback"

func SpotifyRoutes(superRoute *gin.RouterGroup) {
	spotifyRouter := superRoute.Group("/spotify")
	{
		authRoutes(spotifyRouter)
		spotifyRouter.GET("/callback", completeAuth)
		spotifyRouter.GET("/search/artists", searchForArtists)
		spotifyRouter.POST("/play/artist", playArtistSongs)
		spotifyRouter.GET("/artist/{artistId}/random-songs")
	}
}

func authRoutes(superRoute *gin.RouterGroup) {
	authRouter := superRoute.Group("/auth")
	authRouter.GET("/url", getSpotifyAuthURL)
	authRouter.GET("/access-token", getAccessToken)

}

//TODO: Add in an api to start playing random songs from the artist
