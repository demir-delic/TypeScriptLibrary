import ILibraryItem from "../Interfaces/ILibraryItem";
import IAlbum from "../Interfaces/IAlbum";
import IBook from "../Interfaces/IBook";
import IMovie from "../Interfaces/IMovie";


class Library {
    constructor() {
        this.albums = [];
        this.books = [];
        this.movies = [];
    }

    private albums: IAlbum[];
    private books: IBook[];
    private movies: IMovie[];

    addItem(item: IAlbum);
    addItem(item: IBook);
    addItem(item: IMovie);
    addItem(item: ILibraryItem) {

    }
    
    checkout(id: string) {

    }

    return(item: ILibraryItem) {

    }

    listItems() {

    }
}