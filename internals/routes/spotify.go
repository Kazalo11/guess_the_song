package routes

import (
	"net/http"

	"github.com/gin-gonic/gin"

	spotifyauth "github.com/zmb3/spotify/v2/auth"
)

var (
	auth = spotifyauth.New(
		spotifyauth.WithRedirectURL(redirectURI),
		spotifyauth.WithScopes(spotifyauth.ScopePlaylistReadPrivate, spotifyauth.ScopePlaylistReadCollaborative, spotifyauth.ScopeUserLibraryRead),
	)
	state = "abc123"
)

const redirectURI = "http://localhost:8080/v1/spotify/callback"

func SpotifyRoutes(superRoute *gin.RouterGroup) {
	spotifyRouter := superRoute.Group("/spotify")
	{
		spotifyRouter.GET("/auth", getSpotifyAuthURL)
	}
}

func getSpotifyAuthURL(c *gin.Context) {
	url := auth.AuthURL(state)

	c.JSON(http.StatusOK, gin.H{"authUrl": url})

}
