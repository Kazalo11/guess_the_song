import { Artist } from "@/generated";
import { Options } from "react-select";


export function artistsToArtistOption(artists: Artist[]): Options<Artist> {
    const artistOptions: Options<Artist> = artists.map(artist => ({
        value: artist.id,
        label: artist.name,
        ...artist
    }));

    return artistOptions;
}