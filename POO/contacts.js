//RETO 7
class Contacts 
{
    constructor() 
{
    this.array = new Array();
}

printPersons()
{
    for(let i = 0 ; i < this.array.length ; i++)
    {
        return console.log(this.array[i]);
    }
}
}

module.exports = {Contacts : Contacts}
