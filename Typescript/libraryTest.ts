import { Library } from "./library";
import { Book } from "./book";

let book1 = new Book('El día que se perdió la cordura', 449, '978-84-8365-905-2', 'Javier Castillo', 'Suma de letras');
let book2 = new Book('La quinta mujer', 482, '978-84-8365-705-9', 'Pedro Perez', 'Tusquets');
let book3 = new Book('El juego del alma', 567, '978-64-4365-345-9', 'Javier Castillo', 'Borron y cuenta nueva');

let library = new Library([book1, book2, book3], 'C/ Alegria 23', 'Bartolo Zamora');

console.log(library.toString());

console.log(library.getNumberOfBooks());

console.log(library.findByAuthor('Javier Castillo'));

