import { getBackendUrl } from "../utils/Config";

export async function getSpotifyAuthUrl(): Promise<string> {
	
	const backendUrl = getBackendUrl()
	const response = await fetch(`${backendUrl}/v1/spotify/auth`);
	const url: {authUrl: string} = await response.json()
	return url.authUrl
}