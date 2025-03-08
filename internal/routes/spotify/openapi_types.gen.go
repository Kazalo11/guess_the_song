// Package routes provides primitives to interact with the openapi HTTP API.
//
// Code generated by github.com/oapi-codegen/oapi-codegen/v2 version v2.4.1 DO NOT EDIT.
package routes

// AuthUrlResponse Schema for Spotify authentication URL response
type AuthUrlResponse struct {
	// AuthUrl The Spotify authorization URL
	AuthUrl string `json:"authUrl"`
}
