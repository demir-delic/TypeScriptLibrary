import IAlbum from "../Interfaces/IAlbum";
import { ItemType } from "../ItemType";

export default class Album implements IAlbum {
    constructor(id: number, name: string, description: string, aviailable: boolean, artist: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.available = aviailable;
        this.artist = artist;
        this.type = ItemType.album;
    }

    id: number;
    name: string;
    description: string;
    available: boolean;
    artist: string;
    type: ItemType;
}