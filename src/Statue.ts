import { Artwork } from "./interface";

export class Statue implements Artwork{
    title: string;
    year:number;
    price: number;
    height:number;
    
    constructor (c:string, d:number, p:number,h:number){
        if(c==null||!c.match(cimregex))
        {
            throw new Error("Rossz cím");
            
        }
        else if(d>2023)
        {
            throw new Error("Rossz dátum");
        }
        else if(p<5)
        {
            throw new Error("Rossz ár")
        }
        else if(h<15)
        {
            throw new Error("Rossz méret")
        }
        this.title=c;
        this.year=d;
        this.price=p;
        this.height=h;
    }

}
const cimregex: RegExp = /^[A-Za-z ,]+$/;
 
  