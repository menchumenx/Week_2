                //////////
                //RETO 3//
                //////////
import { Person } from "./person"

export class Contacts
{
    public people:Person[]

    constructor(){
        this.people = new Array;
    }

    public printCalendar()             //Imprime por consola los datos de todas las personas de la agenda
    {
        for(let i = 0 ; i < this.people.length ; i++)
    {
        return console.log(this.people[i]);
    }
    } 
}