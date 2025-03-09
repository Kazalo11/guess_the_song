import { getSpotifyAuthUrl } from "@/client/SpotifyClient";
import { Button } from "@/components/shared/Button";
import { ButtonGroup } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function LoginPage() {
  const [authUrl, setAuthUrl] = useState<string>("");

  useEffect(() => {
    const getAuthUrl = async () => {
      const url = await getSpotifyAuthUrl();
      setAuthUrl(url);
    };
    getAuthUrl();
  });

  return (
    <div>
      <ButtonGroup mt="24px">
        <Button
          link={authUrl}
          text="Click this to login to spotify"
          external
        ></Button>
      </ButtonGroup>
    </div>
  );
}
