import { satellites } from "./satellites";

export interface elements{
    name: string;
    image: string;
    size: number;
    distancewWithEarth: number;
    satellite?: satellites[];
}