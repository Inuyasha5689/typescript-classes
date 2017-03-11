/**
 * Created by dasco on 3/9/2017.
 */
class Person {
    name: string;
    private type: string;
    protected age: number = 20;

    constructor(name: string, public username: string) {
        this.name = name;
    }

    printAge(){
        console.log(this.age);
        this.setType("old guy");
    }

    private setType(type: string){
        this.type = type;
        console.log(this.type);
    }
}
const person = new Person("Drake", "Inuyasha5689");
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy"); wont work with private method