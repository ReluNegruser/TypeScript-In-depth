import { Category } from './enums';
import { Book, DamageLogger, Author, Librarian } from './interfaces';
import { UniversityLibrarian, ReferenceItem, Encyclopedia } from './classes';

function GetAllBooks(): Book[] {
    let books = [
        { id: 1, title: 'Ulysses', author: 'James Joyce', available: true, category: Category.Fiction },
        { id: 2, title: 'A Farewell to Arms', author: 'Ernest Hemingway', available: false, category: Category.Fiction },
        { id: 3, title: 'I Know Why the Caged Bird Sings', author: 'Maya Angelou', available: true, category: Category.Poetry },
        { id: 4, title: 'Moby Dick', author: 'Herman Melville', available: true, category: Category.Fiction}
    ];

    return books;
}

function LogFirstAvailable(books = GetAllBooks()): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = '';
    for(let currentBook of books) {    

        if(currentBook.available) {
            firstAvailable = currentBook.title;
            break;
        }
    }

    console.log('Total Books: ' + numberOfBooks);
    console.log('firstAvailable ' + firstAvailable);
}


function GetBookTitleByCategory (categoryFilter: Category = Category.Fiction): Array<string> {
    console.log('Getting books in category: ' + Category[categoryFilter]);

    const allBooks = GetAllBooks();
    const filteredTitles: string[] = [];

    for(let currentBook of allBooks) {
        if(currentBook.category === categoryFilter) {
            filteredTitles.push(currentBook.title);
        }
    }

    return filteredTitles;
}

function LogBookTites(titles: string[]): void {
    for(let title of titles) {
        console.log(title);
    }
}

function GetBookByID(id:number) {
    const allBooks = GetAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}

function CreateCustomerID(name: string, id: number): string {
    return name + id;
}
function CreateCustomer(name: string, age?: number, city?: string): void {
    console.log('Creating customer: ' + name);

    if(age) {
        console.log('Age: ' + age);
    }

    if(city) {
        console.log('City: ' + city);
    }
}

function CheckoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log('Checking out books for ' + customer);

    let booksCheckedOut: string[] = [];

    for(let id of bookIDs) {
        let book = GetBookByID(id);
        if(book.available) {
            booksCheckedOut.push(book.title);   
        }
    }

    return booksCheckedOut;
}

function GetTitles(author: string): string[];
function GetTitles(available: boolean): string[];
function GetTitles(bookProperty: any): string[] {
    const allBooks = GetAllBooks();
    const foundTitles: string[] = [];

    if(typeof bookProperty == 'string') {
        //get all books by an author
        for(let book of allBooks) {
            if(book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    if(typeof bookProperty == 'boolean') {
        //get all books based on availbility
        for(let book of allBooks) {
            if(book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }

    return foundTitles;
}

function PrintBook(book: Book): void {
    console.log(book.title + ' by ' + book.author);
}
//*************************************************************************

// let ref: ReferenceItem = new ReferenceItem('Updated Facts and Figures', 2012);
// ref.printItem();
// ref.publisher = 'Random Data Publisher';
// console.log(ref.publisher);

// let refBook: ReferenceItem = new Encyclopedia('Worldpedia', 1900, 10);
// refBook.printCitation();

let Newspapaer = class extends ReferenceItem {
    printCitation(): void {
        console.log(`Newspapaer: ${this.title}`);
    }
}

let myPaper = new Newspapaer('The Gazette', 2016);
myPaper.printCitation();

class Novel extends class { title: string } {
    mainCharacter: string;
}

let favoriteNovel = new Novel();