class Counter {
    constructor(responsible) {
        this.responsible = responsible
        this.countLocal = 0
    }

    static countGlobal = 0

    getResponsible = () => { return this.responsible }
    getCounterLocal = () => { return this.countLocal }
    getCounterGlobal = () => { return this.countGlobal }

    count() {
        this.countLocal++
        Counter.countGlobal++
    }
}
const Carolina = new Counter("Carolina")
const Gustavo = new Counter("Gustavo")
const Favi = new Counter("Favian")
const Daniel = new Counter("Daniel")

Gustavo.count()
Carolina.count()
Carolina.count()
Gustavo.count()
Carolina.count()
Gustavo.count()
Daniel.count()
Daniel.count()
Favi.count()
Favi.count()
Favi.count()
Gustavo.count()
Gustavo.count()
Gustavo.count()
console.log(`${Carolina.getResponsible()}: ${Carolina.getCounterLocal()}`);
console.log(`${Daniel.getResponsible()}: ${Daniel.getCounterLocal()}`);
console.log(`${Favi.getResponsible()}: ${Favi.getCounterLocal()}`);
console.log(`${Gustavo.getResponsible()}: ${Gustavo.getCounterLocal()}`);


console.log(Counter.countGlobal);
