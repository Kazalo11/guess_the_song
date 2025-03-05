import { getSpotifyAuthUrl } from "@/client/ServerClient";
import { useState } from "react";

export default function LoginPage() {
  const [authUrl, setAuthUrl] = useState<string | null>(null);

  useEffect(() => {
    const getAuthUrl = async () => {
      const url = await getSpotifyAuthUrl();
      setAuthUrl(url);
    };
    getAuthUrl();
  });

  return <></>;
}
