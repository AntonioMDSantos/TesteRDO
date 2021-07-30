const araToRoman = document.querySelector('.aTr');
const botAraToRoman = document.querySelector('.sATR');
const resultRoman = document.querySelector('.resultRom');
const romanToArabico = document.querySelector('.rTa');
const botRomanToAra = document.querySelector('.sRTA');
const resultAra = document.querySelector('.resultAra');

botAraToRoman.onclick = function () {
    debugger;
    let num = Number(araToRoman.value);
    let resp = '';
    while (num > 0) {
        if (num <= 3999 && num >= 1000) {
            num -= 1000;
            resp += 'M';
        } else if (num <= 999 && num >= 900) {
            num -= 900;
            resp += 'CM';
        } else if (num <= 899 && num >= 500) {
            num -= 500;
            resp += 'D';
        } else if (num <= 499 && num >= 400) {
            num -= 400;
            resp += 'CD';
        } else if (num <= 399 && num >= 100) {
            num -= 100;
            resp += 'C';
        } else if (num <= 99 && num >= 90) {
            num -= 90;
            resp += 'XC';
        } else if (num <= 89 && num >= 50) {
            num -= 50;
            resp += 'L';
        } else if (num <= 49 && num >= 40) {
            num -= 40;
            resp += 'XL';
        } else if (num <= 39 && num >= 10) {
            num -= 10;
            resp += 'X';
        } else if (num == 9) {
            num -= 9;
            resp += 'IX';
        } else if (num < 9 && num >= 5) {
            num -= 5;
            resp += 'V';
        } else if (num == 4) {
            num -= 4;
            resp += 'IV';
        } else if (num < 3 || num > 0) {
            num -= 1;
            resp += 'I';
        }

    } resultRoman.innerHTML = resp;
};
botRomanToAra.onclick = function () {
    let romanToAra = romanToArabico.value.toUpperCase();
    let arabicoFinal = 0;
    let numCount = '';
    for (let count = 0; count < romanToAra.length; count++) {
        if (romanToAra[count] == "I") {
            numCount = romanToAra[count] + romanToAra[count + 1];
            if (numCount == "IV") {
                arabicoFinal -= 1;
            } else if (numCount == "IX") {
                arabicoFinal -= 1;
            } else {
                arabicoFinal += 1;
            }

        } else if (romanToAra[count] == "V") {
            arabicoFinal += 5;

        } else if (romanToAra[count] == "X") {
            numCount = romanToAra[count] + romanToAra[count + 1];
            if (numCount == "XL") {
                arabicoFinal -= 10;
            } else if (numCount == "XC") {
                arabicoFinal -= 10;
            } else {
                arabicoFinal += 10;
            }
        } else if (romanToAra[count] == "L") {
            arabicoFinal += 50;

        } else if (romanToAra[count] == "C") {
            numCount = romanToAra[count] + romanToAra[count + 1];
            if (numCount == "CD") {
                arabicoFinal -= 100;
            } else if (numCount == "CM") {
                arabicoFinal -= 100;
            } else {
                arabicoFinal += 100;
            }
        } else if (romanToAra[count] == "D") {
            arabicoFinal += 500;

        } else if (romanToAra[count] == "M") {
            arabicoFinal += 1000;
        }
    }
    resultAra.innerHTML = arabicoFinal;
};