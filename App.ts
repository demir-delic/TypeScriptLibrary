import Library from "./Classes/Library";
import Album from "./Classes/Album";
import Book from "./Classes/Book";
import Movie from "./Classes/Movie";
import { ItemType } from "./ItemType";

let library = new Library();

let comfortEagle = new Album(0, "Comfort Eagle", "Cake's fourth studio album, released in 2001.", true, "Cake");
let burek = new Album(13, "Burek", "Vjerovatno moj omiljeni album od Dino Merlina.", true, "Dino Merlin");
let hp1 = new Book(1, "Harry Potter and the Sorcerer's Stone", "The first book in the popular series by J.K. Rowling.", true, "J.K. Rowling");
let ssRedemption = new Movie(2, "The Shawshank Redemption", "Critically acclaimed 1994 American drama film about a prison break.", true, "Frank Darabont");

library.addItem(comfortEagle);
library.addItem(hp1);
library.addItem(ssRedemption);

library.checkout(burek);

library.listItems();

library.return(hp1);