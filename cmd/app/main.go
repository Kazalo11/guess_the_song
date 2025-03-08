package main

import (
	"fmt"

	"github.com/Kazalo11/guess_the_song/internal/server"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		fmt.Printf("Error loading .env file due to: %v", err)
	}
	fmt.Println("Starting server")
	server.Start()
}
