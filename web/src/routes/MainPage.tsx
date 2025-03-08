import Dropdown from "@/components/shared/Dropdown";
import { Artist, SpotifyService } from "@/generated";
import { artistsToArtistOption } from "@/mapping/ArtistsToArtistOption";
import { Card, Flex, Heading } from "@chakra-ui/react";
import { useState } from "react";

export default function MainPage() {
  const [artist, setArtist] = useState<Artist | undefined>(undefined);
  const loadArtists = async (artistName: string) => {
    const response = await SpotifyService.searchForArtists(artistName);
    const artistOptions = artistsToArtistOption(response);
    console.log(artistOptions);
    return artistOptions;
  };

  return (
    <Flex align="center" justify="center" p={4}>
      <Card.Root maxW="md" w="100%" boxShadow="xl">
        <Card.Header>
          <Heading size="lg" textAlign="center">
            Enter in an artist to pick for guess the song
          </Heading>
        </Card.Header>
        <Card.Body p={6}>
          <Dropdown loadOptions={loadArtists} />
        </Card.Body>
      </Card.Root>
    </Flex>
  );
}
