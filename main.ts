import { Libro } from "./model/Libro";
import { LibroCartaceo } from "./model/LibroCartaceo";
import { LibroDigitale } from "./model/LibroDigitale";

let libreria : Libro[] = [];

libreria.push(new LibroCartaceo('I Promessi Sposi','Alessandro Manzoni',400));
libreria.push(new LibroDigitale('La Divina Commedia','Dante Alighieri',500));
libreria.forEach(l => console.log(l.getInfo()));