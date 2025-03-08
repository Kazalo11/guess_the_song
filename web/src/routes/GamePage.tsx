import { useArtist } from "@/context/ArtistProvider";
import { Card, Flex, Heading, Image } from "@chakra-ui/react";

export default function GamePage() {
  const { artist } = useArtist();

  return (
    <Flex align="center" justify="center" p={4}>
      <Card.Root maxW="md" w="100%" boxShadow="xl">
        <Card.Header>
          <Heading size="lg" textAlign="center">
            Let's play guess the song with {artist?.name}
          </Heading>
        </Card.Header>
        <Card.Body p={6}>
          <Image src={artist?.imageUrl} alt={artist?.name} />
        </Card.Body>
      </Card.Root>
    </Flex>
  );
}
