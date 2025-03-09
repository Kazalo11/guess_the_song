package config

import "os"

func GetFrontendUrl() string {
	if os.Getenv("ENV") == "prod" {
		return "https://guess-the-song-frontend-811320721068.europe-west1.run.app"
	}
	return "http://localhost:3000"
}
