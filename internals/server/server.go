package server

import (
	"github.com/gin-gonic/gin"
)

func Start() {
	router := gin.Default()
	v1 := router.Group("/v1")

	router.Run()
}
