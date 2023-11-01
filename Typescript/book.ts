export class Book{
    private title: string;
    private nPages: number;
    private isbn: string;
    private author: string;
    private editorial:string;

    constructor(title:string, nPages: number, isbn: string, author: string, editorial: string){
        this.title = title;
        this.nPages = nPages; 
        this.isbn = isbn;
        this.author = author; 
        this.editorial = editorial; 
    }

    public setTitle(newTitle: string): void{
        this.title = newTitle;
    }

    public getTitle(): string{
        return this.title;
    }

    public setNPages(newNPages: number):void{
        this.nPages = newNPages;
    }

    public getNPages(): number{
        return this.nPages;
    }

    public setIsbn(newIsbn: string): void{
        this.isbn = newIsbn;
    }

    public getIsbn(): string{
        return this.isbn;
    }

    public setAuthor(newAuthor: string): void{
        this.author = newAuthor;
    }

    public getAuthor(): string{
        return this.author;
    }

    public setEditorial(newEditorial:string): void{
        this.editorial = newEditorial;
    }

    public getEditorial(): string{
        return this.editorial;
    }

    public toString(): string{
        return `Title - ${this.title} 
Numer of Pages - ${this.nPages}
ISBN - ${this.isbn}
Author - ${this.author}
Editorial - ${this.editorial}`;
    }

}