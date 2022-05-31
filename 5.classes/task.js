class PrintEditionItem {
    _state = 100;
    type = null;

    constructor(name,releaseDate,pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
    }

    fix () {
        this.state = this.state * 1.5
    }
    set state (stateNamber) {
        if (stateNamber>100){
            this._state = 100;   
        }
        else if (stateNamber < 0) {
            this._state = 0;   
        }
        else {
            this._state = stateNamber; 
        }
    }
    get state () {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {;
    constructor (name,releaseDate,pagesCount) {
        super(name, releaseDate, pagesCount);
        
    }
    type = "magazine";
}

class Book extends Magazine {;
    constructor (author,name,releaseDate,pagesCount) {
        super (name,releaseDate,pagesCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends Book{
    type = 'novel';
}
class FantasticBook extends Book{
    type = 'fantastic';
}
class DetectiveBook extends Book{
    type = 'detective';
}

class Library {
    books = [];
    constructor(name) {
        this.name = name;
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book)
        }
        else this.books.push(null);
          
    }
    findBookBy(type, value) {
           let Indexbook = this.books.findIndex((item)=>
              (item[type]===value))
              if (Indexbook !== -1) {
                  return this.books[Indexbook];
              }
              else return null;  
    }
    giveBookByName(bookName) {
    let bookIndex  = this.books.findIndex((item)=>(item.name===bookName))
        if (bookIndex !== -1) {
            this.books.splice([bookIndex],[1]);
            return this.books[bookIndex];
        }
            else return null;
        }
  }
  

