// Package spotify provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/oapi-codegen/oapi-codegen/v2 version v2.4.1 DO NOT EDIT.
package spotify

// Artist Internal Artist
type Artist struct {
	Id       string `json:"id"`
	ImageUrl string `json:"imageUrl"`
	Name     string `json:"name"`
}

// AuthUrlResponse Schema for Spotify authentication URL response
type AuthUrlResponse struct {
	// AuthUrl The Spotify authorization URL
	AuthUrl string `json:"authUrl"`
}

// TokenResponse Token information
type TokenResponse struct {
	AccessToken string `json:"access_token"`
}

// SearchForArtistsParams defines parameters for SearchForArtists.
type SearchForArtistsParams struct {
	// Name name of the spotify artist
	Name *string `form:"name,omitempty" json:"name,omitempty"`
}
