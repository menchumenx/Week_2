                //////////
                //RETO 7//
                //////////
import { Library } from "./library"
import { Book } from "./books"

let libro1 = new Book("El marino rojo",100,"123456","pablo piro","la nueva");
let libro2 = new Book("El ave",500,"987123","el pajaro","El nido");

let libros = new Library([libro1,libro2],"Valencia","Jules")

console.log(libros.getAddress());
console.log(libros.getManager());
libros.setAddress("Madrid");
libros.setManager("julito");
libros.getNumberOfBooks();
console.log(libros.printAll());
libros.findByAuthor("pablo piro");