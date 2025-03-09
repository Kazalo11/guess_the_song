import { Artist } from "@/generated";

const server = import.meta.env.PROD ? server1: server2

export default function searchForArtists(name: string): Promise<Artist> {

}