// 1
class Player { 
    // Поля
    readonly id: number;
    public nickname: string;
    private level: number;

    //Конструктор
    constructor(id:number,nickname:string,level:number) { 
        this.id = id;
        this.nickname = nickname;
        this.level = level;
    }
    // методы
    increaseLevel(): void{ 
        this.level++;
    }

    getLevel() { 
        return this.level;
    }
}

const player = new Player(1, "Flenk", 1);

console.log(player.getLevel()); // 1
player.increaseLevel();
console.log(player.getLevel()); // 2

//

class BankAccount { 
    constructor(
        readonly accountID: number,
        private balance: number
    ) {}

    deposit(amount: number): boolean { 
        if (amount > 0) { 
            this.balance += amount;
            return true;
        }
        return false;
    }
    withdraw(amount: number): boolean { 
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    }

}

const AccountBank = new BankAccount(1, 100);
console.log(AccountBank.deposit(200));
console.log(AccountBank.withdraw(300))


// 3

interface Priceable { 
    name: string;
    price: number;
    descount?: number;

    getFinalPrice(): number;
}

class Product implements Priceable { 
    name: string;
    price: number;
    descount?: number;

    constructor(name: string, price: number,descount?:number) {
        this.name = name;
        this.price = price;
        this.descount = descount || 0;
    }

    getFinalPrice(): number { 
        return this.price * (1 - this.descount / 100);
    }
}

// 4

class User { 
    id: number;
    private password: string;

    constructor(id: number, password: string) { 
        this.id = id;
        this.password = password;
    }
    getPassword(): string { 
        return this.password;
    }
}

const user = new User(1, "secret");

user.id = 2;
console.log(user.getPassword());