import ILibraryItem from "../Interfaces/ILibraryItem";
import IAlbum from "../Interfaces/IAlbum";
import IBook from "../Interfaces/IBook";
import IMovie from "../Interfaces/IMovie";
import { ItemType } from "../ItemType";

export default class Library {
    constructor() {
        this.albums = [];
        this.books = [];
        this.movies = [];
    }

    private albums: IAlbum[];
    private books: IBook[];
    private movies: IMovie[];

    returnItemTypeArray(item: ILibraryItem): ILibraryItem[] {
        if(item.type === ItemType.album) {
           return this.albums;
        }
        else if(item.type === ItemType.book) {
            return this.books;
        }
        else {
            return this.movies;
        }
    }
    
    findItemById(id: number, collection: ILibraryItem[]): ILibraryItem {
        let foundItem;
        
        collection.forEach(item => {
            if(id === item.id) {
                foundItem = item;
            }
        });
        
        return foundItem;
    }

    addItem(item: IAlbum): void;
    addItem(item: IBook): void;
    addItem(item: IMovie): void;
    addItem(item: ILibraryItem): void {
        this.returnItemTypeArray(item).push(item);
    }    
    
    checkout(item: ILibraryItem): ILibraryItem {
        let foundItem: ILibraryItem;

        foundItem = this.findItemById(item.id, this.returnItemTypeArray(item));

        if(!foundItem) {
            console.log("The requested item does not exist in the library.");
        }
        else {
            foundItem.available = false;
            return foundItem;
        }
    }

    return(item: ILibraryItem): void {
        this.findItemById(item.id, this.returnItemTypeArray(item));
        item.available = true;
    }

    listItems() {
        this.albums.forEach(album => {
            console.log(`Album type: ${album.type} \nAlbum ID: ${album.id} \nAlbum name: ${album.name} \nAlbum description: ${album.description} \nAlbum artist: ${album.artist}\n`)
        });

        this.books.forEach(book => {
            console.log(`Book type: ${book.type} \nBook ID: ${book.id} \nBook name: ${book.name} \nBook description: ${book.description} \nBook author: ${book.author}\n`)
        });

        this.movies.forEach(movie => {
            console.log(`Movie type: ${movie.type} \nMovie ID: ${movie.id} \nMovie name: ${movie.name} \nMovie description: ${movie.description} \nMovie director: ${movie.director}\n`)
        });
    }
}