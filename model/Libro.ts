class Libro
{
    private dataCreazione : Date;

    //Costruttori in overload
    constructor(titolo: string, autore:string);
    constructor(titolo: string, autore: string, prezzo: number);

    //Implementazione del costruttore
    constructor(public titolo: string, public autore: string, public prezzo?: number)
    {
        this.dataCreazione = new Date();
    }

    getInfo(): string
    {
        if(this.prezzo === undefined)
            return `${this.titolo} - ${this.autore}`;
        return `${this.titolo} - ${this.autore} - ${this.prezzo}€`
    }
}