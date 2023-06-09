import { Dvd } from "./model/Dvd";
import { IGetInfo } from "./model/IGetInfo";
import { Libro } from "./model/Libro";
import { LibroCartaceo } from "./model/LibroCartaceo";
import { LibroDigitale } from "./model/LibroDigitale";

let libreria : IGetInfo[] = [];

libreria.push(new LibroCartaceo('I Promessi Sposi','Alessandro Manzoni',400));
libreria.push(new LibroDigitale('La Divina Commedia','Dante Alighieri',500));
libreria.push(new Dvd('Guerre stellari','Non lo ricordo'));

libreria.forEach(l => console.log(l.getInfo()));