import IBook from "../Interfaces/IBook";

export default class Book implements IBook {
    constructor(id: number, name: string, description: string, aviailable: boolean, author: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.available = aviailable;
        this.author = author;
    }

    id: number;
    name: string;
    description: string;
    available: boolean;
    author: string;
}