
const arr = [16,-37,54,-4,72,-56, 47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47 ];
alert(`В нас є масив  = [${arr.join(',  ')}]`);


let minNumber = arr[0];
for (const item of arr) {
    if (item < minNumber) {
        minNumber = item;
    }
}
alert(`Найменше число масиву це = [${minNumber}] , його индекс в масиві  №${arr.indexOf(minNumber)}`);



let maxNumber = arr[0];
for (const item of arr) {
    if (item > maxNumber) {
        maxNumber = item;
    }
}
alert(`Найбільше число масиву це = [${maxNumber}] , його индекс в масиві  №${arr.indexOf(maxNumber)}`);



const arrNegNumber = arr.filter(item => item < 0) ;

alert(`Ось всі негативні елементи масиву = [${arrNegNumber.join(', ')}] .\n Ось їхня загальна кількість = ${arrNegNumber.length}`);



const arrPozNumber = arr.filter(item => item > 0) ;

const arrOddNumber = arrPozNumber.filter(item => item % 2 === 1);

alert(`Ось всі непарні елементи масиву = [${arrOddNumber.join(', ')}] .\n Ось їхня загальна кількість = ${arrOddNumber.length}`);



const arrEvenNumber = arrPozNumber.filter(item => item % 2 === 0);

alert(`Ось всі парні елементи масиву = [${arrEvenNumber.join(', ')}] .\n Ось їхня загальна кількість = ${arrEvenNumber.length}`);



const sumEvenNumber = arrEvenNumber.reduce((sum, item) => sum + item, 0);

alert(`Ось сума парних елементів масиву = ${sumEvenNumber}.`);



const  sumOddNumber = arrOddNumber.reduce((sum, item) => sum + item, 0);

alert(`Ось сума непарних елементів масиву = ${sumOddNumber}.`)



const multPozNumber = arrPozNumber.reduce((sum, item) => sum * item);

alert(`Ось добуток позитивних елементів масиву = ${multPozNumber}.`);


const max = Math.max(...arr);
const result = arr.map(v => v === max ? v : 0);

alert(`Найбільший серед елементів масиву = [${result.join(",  ")}] , остані обнулил.`);