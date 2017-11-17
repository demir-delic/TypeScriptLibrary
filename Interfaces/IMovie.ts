import ILibraryItem from "./ILibraryItem";

export default interface Movie extends ILibraryItem {
    director: string;
}