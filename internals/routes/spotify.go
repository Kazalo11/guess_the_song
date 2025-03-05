package routes

import (
	"crypto/sha256"
	"encoding/base64"
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/Kazalo11/guess_the_song/internals/util"
	"github.com/gin-gonic/gin"
	"golang.org/x/oauth2"

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
	ch           = make(chan *spotify.Client)
)

const redirectURI = "http://localhost:8080/v1/spotify/callback"

func SpotifyRoutes(superRoute *gin.RouterGroup) {
	spotifyRouter := superRoute.Group("/spotify")
	{
		spotifyRouter.GET("/auth", getSpotifyAuthURL)
		spotifyRouter.GET("/callback", completeAuth)
	}
}

func getSpotifyAuthURL(c *gin.Context) {
	sha2 := sha256.New()
	io.WriteString(sha2, codeVerifier)
	codeChallenge := base64.RawURLEncoding.EncodeToString(sha2.Sum(nil))

	url := auth.AuthURL(state,
		oauth2.SetAuthURLParam("code_challenge_method", "S256"),
		oauth2.SetAuthURLParam("code_challenge", codeChallenge),
		oauth2.SetAuthURLParam("client_id", os.Getenv("CLIENT_ID")),
	)

	c.JSON(http.StatusOK, gin.H{"authUrl": url})

}

func completeAuth(c *gin.Context) {
	tok, err := auth.Token(c.Request.Context(), state, c.Request,
		oauth2.SetAuthURLParam("code_verifier", codeVerifier))
	if err != nil {
		c.JSON(http.StatusForbidden, fmt.Sprintf("Error getting token: %w", err))
	}
	if st := c.Request.FormValue("state"); st != state {
		c.JSON(http.StatusNotFound, "State mismatch")
	}
	client := spotify.New(auth.Client(c.Request.Context(), tok))
	fmt.Printf("Login completed")
	ch <- client
}
