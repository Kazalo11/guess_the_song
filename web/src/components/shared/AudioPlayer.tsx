import { getAccessToken } from "@/client/SpotifyClient";
import { useEffect, useState } from "react";
import SpotifyPlayer from "react-spotify-web-playback";

export default function AudioPlayer() {
  const [accessToken, setAccessToken] = useState("");
  useEffect(() => {
    const setToken = async () => {
      const token = await getAccessToken();
      setAccessToken(token);
    };

    setToken();
  }, []);

  return <SpotifyPlayer token={accessToken} uris={[]} />;
}
