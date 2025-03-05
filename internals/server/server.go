package server

import (
	"github.com/Kazalo11/guess_the_song/internals/routes"
	"github.com/gin-gonic/gin"
)

func Start() {
	router := gin.Default()
	v1 := router.Group("/v1")
	addRoutes(v1)
	router.Run()
}

func addRoutes(superRoute *gin.RouterGroup) {
	routes.SpotifyRoutes(superRoute)
}
