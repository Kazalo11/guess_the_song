package client

import (
	"crypto/sha256"
	"encoding/base64"
	"fmt"
	"io"
	"net/http"
	"os"

	"github.com/Kazalo11/guess_the_song/config"
	"github.com/gin-gonic/gin"
	"github.com/zmb3/spotify/v2"
	"golang.org/x/oauth2"
)

func getSpotifyAuthURL(c *gin.Context) {
	sha2 := sha256.New()
	io.WriteString(sha2, codeVerifier)
	codeChallenge := base64.RawURLEncoding.EncodeToString(sha2.Sum(nil))

	url := auth.AuthURL(state,
		oauth2.SetAuthURLParam("code_challenge_method", "S256"),
		oauth2.SetAuthURLParam("code_challenge", codeChallenge),
		oauth2.SetAuthURLParam("client_id", os.Getenv("SPOTIFY_ID")),
	)

	c.JSON(http.StatusOK, gin.H{"authUrl": url})

}

func completeAuth(c *gin.Context) {
	tok, err := auth.Token(c.Request.Context(), state, c.Request,
		oauth2.SetAuthURLParam("code_verifier", codeVerifier),
		oauth2.SetAuthURLParam("client_id", os.Getenv("SPOTIFY_ID")))
	if err != nil {
		c.JSON(http.StatusForbidden, fmt.Sprintf("Error getting token: %v", err))
	}
	if st := c.Request.FormValue("state"); st != state {
		c.JSON(http.StatusNotFound, "State mismatch")
	}
	userClient = spotify.New(auth.Client(c.Request.Context(), tok))
	fmt.Printf("Login completed")
	c.Redirect(http.StatusFound, config.GetFrontendUrl())
}
