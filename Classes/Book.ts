import IBook from "../Interfaces/IBook";
import { ItemType } from "../ItemType";

export default class Book implements IBook {
    constructor(id: number, name: string, description: string, available: boolean, author: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.available = available;
        this.author = author;
        this.type = ItemType.book;        
    }

    id: number;
    name: string;
    description: string;
    available: boolean;
    author: string;
    type: ItemType;
}