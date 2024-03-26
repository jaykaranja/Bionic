import { Genre } from "./Genre";

export type Song = {
    id: number;
    title: string;
    cover_image: string;
    genre: Genre
}