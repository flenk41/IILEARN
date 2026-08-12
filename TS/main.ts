type Game = {
    name: string;
    price: number;
    isAvalible: boolean;
};

const FirstGame: Game = {
    name: "GoodOFWar",
    price: 100,
    isAvalible: true
};

const TwoGame: Game = {
    name: "CSGO",
    price: 300,
    isAvalible: false
};

console.log(FirstGame, TwoGame);


// 2
interface Transaction {
    id: number;
    name: string;
    amount: number;
    category: string;
}

const trans: Transaction[] = [
    {
        id: 1,
        name: "Покупка",
        amount: 1500,
        category: "Доход"
    },
    {
        id: 2,
        name: "Покупка",
        amount: 4500,
        category: "Доход"
    }
];

for (let num of trans) {
    console.log(num);
}

// 3

interface Product {
    name: string;
    price: number;
    discount?: number;
}

function getFinalPrice(prod: Product): number {
    if (prod.discount !== 0 && prod.discount !== undefined) {
        return prod.price * (1 - prod.discount / 100);
    }
    else {
        return prod.price;
    }
}

const item: Product = { name: "Ноутбук", price: 5000 };
console.log(getFinalPrice(item));
const item2: Product = { name: "ПК", price: 65000, discount: 15 };
console.log(getFinalPrice(item2));

//4

interface Player {
    readonly id: number;
    nickname: string;
    level?: number;
    email?: string;
}

const player: Player = {
    id: 1,
    nickname: "Flenk"
};

player.id; // можем только читать
player.level = 10;
player.email = "nasdasd_23123@mail.ru";