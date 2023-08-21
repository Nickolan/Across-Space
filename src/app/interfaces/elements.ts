import { satellites } from "./satellites";

export interface elements{
    name: string;
    size: number;
    distancewWithEarth: number;
    image: string;
    satellite?: satellites[];
}