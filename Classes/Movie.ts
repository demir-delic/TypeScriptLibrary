import IMovie from "../Interfaces/IMovie";

export default class Movie implements IMovie {
    constructor(id: number, name: string, description: string, aviailable: boolean, director: string){
        this.id = id;
        this.name = name;
        this.description = description;
        this.available = aviailable;
        this.director = director;
    }

    id: number;
    name: string;
    description: string;
    available: boolean;
    director: string;
}