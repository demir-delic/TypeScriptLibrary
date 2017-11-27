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
        if(item.type === ItemType.album) { return this.albums; }
        else if(item.type === ItemType.book) { return this.books; }
        else { return this.movies; }
    }
    
    findItemById(id: number, collection: ILibraryItem[]): ILibraryItem {
        let foundItem: ILibraryItem;
        
        collection.forEach(item => {
            if(id === item.id) { foundItem = item; }
        });
        
        return foundItem;
    }

    addItem(item: IAlbum): void;
    addItem(item: IBook): void;
    addItem(item: IMovie): void;
    addItem(item: ILibraryItem): void {
        this.returnItemTypeArray(item).push(item);
        console.log(`${item.name} has been added to the library.`);
    }    
    
    checkout(item: ILibraryItem): ILibraryItem {
        let foundItem: ILibraryItem = this.findItemById(item.id, this.returnItemTypeArray(item));

        if(!foundItem) {
            console.log(`The requested item, ${item.name}, does not exist in the library.`);
        }
        else {
            foundItem.available = false;
            console.log(`${item.name} has been checked out.`);
            return foundItem;
        }
    }

    return(item: ILibraryItem): void {
        let libraryItem = this.findItemById(item.id, this.returnItemTypeArray(item));
        if(!libraryItem.available) {
            libraryItem.available = true;
            console.log(`${item.name} has been returned to the library.`);
        }
        else {
            console.log(`The item that you tried to return, ${item.name}, is already present in the library.`);
        }
    }

    list(itemArray: ILibraryItem[]): void {
        itemArray.forEach(item => {
            console.log(`Type: ${item.type} \nID: ${item.id} \nName: ${item.name} \nDescription: ${item.description}`);
            
            if(item.type === ItemType.album) { console.log(`Artist: ${item["artist"]}\n`); }
            else if(item.type === ItemType.book) { console.log(`Author: ${item["author"]}\n`); }
            else { console.log(`Director: ${item["director"]}\n`); }
        });
    }

    listItems(): void {
        this.list(this.albums);
        this.list(this.books);
        this.list(this.movies);
    }
}