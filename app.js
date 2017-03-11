var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by dasco on 3/9/2017.
 */
var Person = (function () {
    function Person(name, username) {
        this.username = username;
        this.age = 20;
        this.name = name;
    }
    Person.prototype.printAge = function () {
        console.log(this.age);
        this.setType("old guy");
    };
    Person.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return Person;
}());
var person = new Person("Drake", "Inuyasha5689");
console.log(person.name, person.username);
person.printAge();
// person.setType("Cool guy"); wont work with private method
//Inheritance
var Drake = (function (_super) {
    __extends(Drake, _super);
    // name = "Drake";
    function Drake(username) {
        _super.call(this, "Drake", username);
        this.age = 20;
    }
    return Drake;
}(Person));
var drake = new Drake("inuyasha5689");
console.log(drake);
//# sourceMappingURL=app.js.map