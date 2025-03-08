import { SpotifyService } from "@/generated/services/SpotifyService";
import AsyncSelect from "react-select/async";

export default function Dropdown() {
  const loadArtists = async (artistName: string) => {
    const response = await SpotifyService.searchForArtists(artistName);
    console.log(response);
  };

  return <AsyncSelect cacheOptions loadOptions={loadArtists} />;
}
