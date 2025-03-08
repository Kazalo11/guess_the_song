package mapping

import (
	models "github.com/Kazalo11/guess_the_song/internal/spotify/models"
	"github.com/zmb3/spotify/v2"
)

func SpotifyArtistToArtist(fullArtist spotify.FullArtist) models.Artist {
	artist := models.Artist{
		Id:   string(fullArtist.ID),
		Name: fullArtist.Name,
	}
	if len(fullArtist.Images) != 0 {
		artist.ImageUrl = fullArtist.Images[0].URL
	}
	return artist

}
