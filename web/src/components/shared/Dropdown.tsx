import { getBackendUrl } from "@/utils/Config";
import AsyncSelect from "react-select/async";

const artistSearchUrl = `${getBackendUrl}/v1/spotify/search/artists`;

export default function Dropdown() {
  const loadArtists = async (artistName: string) => {
    const response = await fetch(`${artistSearchUrl}?name=${artistName}`);
    const artists = await response.json();
  };

  return <AsyncSelect cacheOptions loadOptions={loadArtists} />;
}
