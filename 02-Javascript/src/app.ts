type myArr =  string[];

console.log("Array operations - head");
console.log("----------- ----------");

const comida: myArr = ["pescado", "carne", "fruta", "lacteos"];
const head = ([first]: myArr ): string => first;
console.log(head(comida));

console.log("----------- ----------");
console.log("Array operations - tail");
console.log("----------- ----------");

const tail = ([, ...resto]: myArr): myArr => resto;
console.log(tail(comida));

console.log("----------- ----------");
console.log("Array operations - init");
console.log("----------- ----------");


const init = (arr: myArr): myArr => arr.slice(0, arr.length - 1);

console.log(init(comida));
console.log(comida);

console.log("----------- ----------");
console.log("Array operations - last");
console.log("----------- ----------");

const last = (arr: myArr): myArr => arr.slice(-1);
console.log(last(comida));

console.log("----------- ----------");
console.log("Concat");
console.log("----------- ----------");


const ropa: myArr = ["pantalón", "camisa", "falda", "zapatos"];
const complementos: myArr = ["bolso", "pendientes", "reloj"];

const concat = (a: myArr, b: myArr): myArr => [...a, ...b];
console.log(concat(ropa, complementos));

const concatOpcional = (...arg) => {
    let arr: myArr = [];
    for (let i = 0; i < arg.length; i++) {
        arr = [...arr, ...arg[i]];
    }
    return arr;
}
console.log(concatOpcional(ropa, complementos));

console.log("----------- ----------");
console.log("Clone marge - clone");
console.log("----------- ----------");


const comensal = {
    restaurante: "el gusto",
    mesa: 4,
    reserva: true,
    menu: {
        entrantes: "ensalada",
        carne: "entrecot",
        bebida: "vino",
    }
}
const clone = source => ({...source});
console.log(clone(comensal));

const a = { name: "Maria", surname: "Ibañez", country: "SPA" };
const b = { name: "Luisa", age: 31, married: true };

const marge = (source, target) => ({...target, ...clone(source)});
console.log(marge(a, b));

console.log("----------- ----------");
console.log("Read books")
console.log("----------- ----------");

interface Book {
    title: string;
    isRead: boolean;
}

const books: Book[] = [
    { title: "Harry Potter y la piedra filosofal", isRead: true },
    { title: "Canción de hielo y fuego", isRead: false },
    { title: "Devastación", isRead: true },
];


const isBookRead = (books: Book[], titleToSearch: string): boolean => {
    const myBook = books.find(({title}) => title === titleToSearch);
    return myBook?.isRead === true;
};

console.log(isBookRead(books, "Canción de hielo y fuego"));
console.log(isBookRead(books, "Devastación"));
console.log(isBookRead(books, "Harry Potter filosofal"));

console.log("----------- ----------");
console.log("Slot Machine");
console.log("----------- ----------");

class SlotMachine {
    public contMoney: number;
    public random:  boolean[];
    constructor() {
        this.contMoney = 0;
        this.random;
    }

    play() {
        this.contMoney ++;
        this.random = [
            this.booleanRando(),
            this.booleanRando(),
            this.booleanRando(),
        ];
        console.log(this.showPlay());
    };

    booleanRando() {
        return Math.random() > 0.5
    }

    showPlay() {
        const status = this.random.every(status => status);

       return status
            ? "Congratulations!!!. You won " + this.contMoney + " coins!!" 
            : "Good luck next time!!";
    }
};

const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();