package server

import (
	spotifyClient "github.com/Kazalo11/guess_the_song/internal/spotify/client"
	"github.com/gin-gonic/gin"
)

func Start() {
	router := gin.Default()
	router.Use(CORSMiddleware())
	v1 := router.Group("/v1")
	addRoutes(v1)
	spotifyClient.InitSpotifyClient()
	router.Run()
}

func addRoutes(superRoute *gin.RouterGroup) {
	spotifyClient.SpotifyRoutes(superRoute)
}
