package main

import (
	"log"

	"github.com/Kazalo11/guess_the_song/internals/server"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Error loading .env file")
	}
	server.Start()
}
