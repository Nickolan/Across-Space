import { elements } from "./elements";

export interface satellites{
    id: number;
    name: string;
    size: number;
    image: string;
    planetId: number;
    planet?: elements
}