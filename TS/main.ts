let PriceArray: number[] = [1, 2, 3, 4, 5];

PriceArray.push(10);
PriceArray[1] = 10;
PriceArray.pop();
console.log(PriceArray.length);
for (let index = 0; index < PriceArray.length; index++) {
    console.log(PriceArray[index]);
}

// 2

let Mass: number[] = [1, 2, 3, 4, 5, 6];
let sum: number = 0;
let even: number = 0;
let maxelem: number = 0;

for (let numb of Mass) {
    sum += numb;
    if (numb % 2 === 0) {
        even += 1;
    }
    if (maxelem < numb) {
        maxelem = numb;
    }
}

// 3

const Fintech: number[] = [100, -20, 300, 400, -10];

const razhodi: number[] = Fintech.filter(balance => balance < 0);

const absoluteValues: number[] = Fintech.map(num => Math.abs(num));

const Findes = Fintech.find(num => num < -1000);


// 4


