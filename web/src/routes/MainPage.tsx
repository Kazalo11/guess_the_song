import { Button } from "@/components/shared/Button";
import Dropdown from "@/components/shared/Dropdown";
import { useArtist } from "@/context/ArtistProvider";
import { SpotifyService } from "@/generated";
import { artistsToArtistOption } from "@/mapping/ArtistsToArtistOption";
import { Card, Flex, Heading } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function MainPage() {
  const { artist, setArtist } = useArtist();
  const loadArtists = async (artistName: string) => {
    const response = await SpotifyService.searchForArtists(artistName);
    const artistOptions = artistsToArtistOption(response);
    return artistOptions;
  };

  const navigate = useNavigate();

  return (
    <Flex align="center" justify="center" p={4}>
      <Card.Root maxW="md" w="100%" boxShadow="xl">
        <Card.Header>
          <Heading size="lg" textAlign="center">
            Enter in an artist to pick for guess the song
          </Heading>
        </Card.Header>
        <Card.Body p={6}>
          <Dropdown loadOptions={loadArtists} setValue={setArtist} />
          {artist && (
            <Button
              link="/play"
              text="Click this to confirm this artist for guess the song"
            />
          )}
        </Card.Body>
      </Card.Root>
    </Flex>
  );
}
