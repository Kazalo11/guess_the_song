package routes

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"github.com/zmb3/spotify/v2"
	spotifyauth "github.com/zmb3/spotify/v2/auth"
	"golang.org/x/oauth2/clientcredentials"
)

func InitSpotifyClient() {
	ctx := context.Background()
	config := &clientcredentials.Config{
		ClientID:     os.Getenv("SPOTIFY_ID"),
		ClientSecret: os.Getenv("SPOTIFY_SECRET"),
		TokenURL:     spotifyauth.TokenURL,
	}
	token, err := config.Token(ctx)
	if err != nil {
		log.Fatalf("couldn't get token: %v", err)
	}

	httpClient := spotifyauth.New().Client(ctx, token)
	serverClient = spotify.New(httpClient)

}

func searchForArtists(c *gin.Context) {
	name := c.Query("name")
	results, err := serverClient.Search(c, name, spotify.SearchTypeArtist)
	if err != nil {
		c.JSON(http.StatusInternalServerError, fmt.Sprintf("Can't search for artists due to: %v", err))
	}
	artists := results.Artists

}
