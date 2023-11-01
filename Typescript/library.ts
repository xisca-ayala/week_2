import {Book} from './book'

export class Library{
    private books: Book[];
    private address:  string;
    private manager: string;

    constructor(books: Book[], address:  string, manager: string){
        this.books = books;
        this.address = address; 
        this.manager = manager;
    }

    public setAddress(newAddress: string): void{
        this.address = newAddress 
    }

    public getAddress(): string{
        return this.address
    }

    public setManager(newManager: string): void{
        this.manager = newManager
    }

    public getManager(): string{
        return this.manager
    }

    public toString(): string{
        let result: string = '';
        this.books.forEach(function(book, index) {
            result += `
            Book${index+1}: 
            Title - ${book.getTitle()} 
            Number of Pages - ${book.getNPages()}
            IBN - ${book.getIsbn()}
            Author - ${book.getAuthor()}
            Editorial - ${book.getEditorial()}`
        });
        return result;
    }

    public getNumberOfBooks(): number{
        return this.books.length;
    }

    public findByAuthor(author: string): Book[]{
        let result: Book[] = []; 
        this.books.forEach(function(book){
            if(book.getAuthor() == author) {
                result.push(book);
            }
        });
        return result;
    }
}