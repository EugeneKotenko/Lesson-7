"use strict"

const exchangeRate = 40;

for(let i = 10; i <= 100; i += 10) {
    const multiplicationRate = i * exchangeRate;
    console.log(`${i} долари = ${multiplicationRate} гривен`);
}

function check(number) {
    if(number <= 1) {
        return false
    }

    for (let i = 2; i <= Math.sqrt(number); i++){
        if (number % i === 0) {
            return false;
        }
    }
    return true;
}

const randomNumber = 5; // enter any number

if(check(randomNumber)) {
    console.log(`${randomNumber}  просте`)
} else {
    console.log(`${randomNumber} не просте`)
}

function checkingDegrees(number) {
    while (number !== 1) {
        if (number % 3 !== 0){
            return false
        }
        number /= 3
    }
    return true
}

const numberDegrees = 9; // enter any number

if(checkingDegrees(numberDegrees)) {
    console.log(`${numberDegrees} можна одержати це число шляхом зведення числа 3 в деякий ступінь. `)
} else {
    console.log(`${numberDegrees} не можна одержати це число шляхом зведення числа 3 в деякий ступінь.`)
}
