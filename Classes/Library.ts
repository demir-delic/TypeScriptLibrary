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
    //private library: ILibraryItem[];

    addItem(item: IAlbum);
    addItem(item: IBook);
    addItem(item: IMovie);
    addItem(item: ILibraryItem) {
        
    }
    
    findItemById(id: number, collection: ILibraryItem[]): ILibraryItem {
        
        return collection.find(item => { // why is find not a member of collection?
            return id === item.id;
        });
    
    }

    checkout(id: number, type: ItemType): ILibraryItem {
        let foundItem: ILibraryItem;

        if(type === ItemType.album) {
            foundItem = this.findItemById(id, this.albums)
        }
        else if(type === ItemType.book) {
            foundItem = this.findItemById(id, this.books);
        }
        else {
            foundItem = this.findItemById(id, this.movies);
        }

        foundItem.available = false;
        return foundItem;
    }

    return(item: ILibraryItem) {
        item.id
    }

    listItems() {
        this.library.forEach(item => {

        });
    }
}