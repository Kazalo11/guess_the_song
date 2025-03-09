package client

import (
	"fmt"
	"net/http"
	"os"

	"github.com/Kazalo11/guess_the_song/config"
	models "github.com/Kazalo11/guess_the_song/internal/spotify/models"

	"github.com/gin-gonic/gin"
	"github.com/zmb3/spotify/v2"
	"golang.org/x/oauth2"
)

func getSpotifyAuthURL(c *gin.Context) {

	url := auth.AuthURL(state,
		// oauth2.SetAuthURLParam("code_challenge_method", "S256"),
		// oauth2.SetAuthURLParam("code_challenge", codeChallenge),
		oauth2.SetAuthURLParam("client_id", os.Getenv("SPOTIFY_ID")),
	)

	c.JSON(http.StatusOK, gin.H{"authUrl": url})

}

func completeAuth(c *gin.Context) {
	tok, err := auth.Token(c, state, c.Request) // oauth2.SetAuthURLParam("code_verifier", codeVerifier),

	if err != nil {
		c.JSON(http.StatusForbidden, fmt.Sprintf("Error getting token: %v", err))
		return
	}
	if st := c.Request.FormValue("state"); st != state {
		c.JSON(http.StatusNotFound, "State mismatch")
		return
	}
	userClient = spotify.New(auth.Client(c, tok))
	fmt.Printf("Login completed")
	c.Redirect(http.StatusFound, config.GetFrontendUrl())
}

func getAccessToken(c *gin.Context) {
	if userClient == nil {
		c.JSON(http.StatusUnauthorized, "No client found")
		return
	}
	currToken, err := userClient.Token()
	if err != nil {
		c.JSON(http.StatusInternalServerError, fmt.Sprintf("Unable to get current token due to: %v", err))
	}

	tokenResponse := models.TokenResponse{
		AccessToken: currToken.AccessToken,
	}
	c.JSON(http.StatusOK, tokenResponse)

}

func playArtistSongs(c *gin.Context) {

	if userClient == nil {
		c.JSON(http.StatusUnauthorized, "No client found")
		return
	}
	playOptions := spotify.PlayOptions{}
	userClient.PlayOpt(c, &playOptions)

}
