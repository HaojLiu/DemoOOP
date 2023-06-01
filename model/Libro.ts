class Libro
{
    private dataCreazione : Date;
    //titolo : string;
    //autore : string;
    //prezzo? : number;

    //Costruttori in overload
    constructor(titolo: string, autore:string);
    constructor(titolo: string, autore: string, prezzo: number);

    //Implementazione del costruttore
    constructor(public titolo: string, public autore: string, public prezzo?: number)
    {
        this.dataCreazione = new Date();
        //this.titolo = titolo;
        //this.autore = autore;
        //this.prezzo = prezzo;
    }
}