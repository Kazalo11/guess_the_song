import { useArtist } from "@/context/ArtistProvider";

export default function GamePage() {
  const { artist } = useArtist();

  return (
    <div>
      <h1>Let's Play a Game</h1>
      <p>Selected Artist: {artist?.name}</p>
    </div>
  );
}
