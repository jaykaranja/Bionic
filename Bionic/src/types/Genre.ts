import { Song } from "./Song";

export type Genre = {
    id: number;
    name: string;
    cover_image: string;
    songs: Song[] | []
}
