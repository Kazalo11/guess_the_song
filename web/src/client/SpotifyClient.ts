import { Artist, createConfiguration, server1, server2, SpotifyApi } from "@/generated";

const server = import.meta.env.PROD ? server1: server2
const config = createConfiguration({baseServer: server})
const apiInstance = new SpotifyApi(config)

export async function searchForArtists(name: string): Promise<Artist[]> {
	return await apiInstance.searchForArtists(name);
}

export async function getSpotifyAuthUrl(): Promise<string> {
	const response = await apiInstance.getSpotifyAuthUrl();
	return response.authUrl;
}