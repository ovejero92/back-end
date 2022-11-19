const varTest = 0 

const varAssignable = varTest || "sin valor"
console.log(varAssignable);

const varAssignable2 = varTest ?? "sin valor"
console.log(varAssignable2);

class persona {
    #age
    constructor(name, lastname, age){
        this.name = name
        this.lastname = lastname
        this.age = age
    }
    getAge = () => { return this.#age}
}
const Carolina = new persona("Carolina", "Mailen", 25)
console.log(Carolina.getAge());