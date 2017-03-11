/**
 * Created by dasco on 3/9/2017.
 */
class Person {
    name: string;
    private type: string;
    protected age: number;

    constructor(name: string, public username: string) {
        this.name = name;
    }
}
const person = new Person("Drake", "Inuyasha5689");
console.log(person.name, person.username);