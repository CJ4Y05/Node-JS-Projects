class Book{
    constructor(title, author){
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
    }

    borrow(){

        if(this.isBorrowed === true){
            console.log("This book is being borrowed by someone...");
        }
        else{
            this.isBorrowed = true;
            console.log("You are borrowing this book...");
        }
    }

    returnBook(){
        
        if(this.isBorrowed === true){
            console.log("You are returning this book...");
        }
        else{
            console.log("This book is not being borrowed...");
        }

    }

    getStatus(){
        if(this.isBorrowed === true){
            return 'Borrowed';
        }
        else{
            return 'Available';
        }
    }
}

let book1 = new Book("Harry Potter", "J.K. Rowling");

book1.borrow();
book1.returnBook();
console.log(book1.getStatus());
