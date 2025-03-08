import { Artist } from "@/generated";
import { Options } from "react-select";

export type ArtistOption = Artist & {
	value: string,
	label: string
}


export function artistsToArtistOption(artists: Artist[]): Options<ArtistOption> {
    const artistOptions: Options<ArtistOption> = artists.map(artist => ({
        value: artist.id,
        label: artist.name,
        ...artist
    }));

    return artistOptions;
}