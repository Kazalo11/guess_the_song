package client

import (
	"context"
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/Kazalo11/guess_the_song/internal/spotify/mapping"
	models "github.com/Kazalo11/guess_the_song/internal/spotify/models"
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
	fmt.Println("Looking for artists")
	name := c.Query("name")
	results, err := serverClient.Search(c, name, spotify.SearchTypeArtist)
	if err != nil {
		c.JSON(http.StatusInternalServerError, fmt.Sprintf("Can't search for artists due to: %v", err))
	}
	if results == nil {
		c.JSON(http.StatusNotFound, "Not artists found")
		return
	}
	spotifyArtists := results.Artists.Artists

	fmt.Printf("artists received: %v \n", spotifyArtists)

	artists := make([]models.Artist, 0, len(results.Artists.Artists))

	for _, spotifyArtist := range spotifyArtists {
		artist := mapping.SpotifyArtistToArtist(spotifyArtist)
		artists = append(artists, artist)
	}
	c.JSON(http.StatusOK, artists)

}

func getRandomSongsFromArtist(c *gin.Context) {

}
