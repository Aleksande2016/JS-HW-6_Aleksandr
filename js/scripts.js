// Задача 1

let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g, '!'));

// Задача 2 ----------------------------------------------------------------

let date = '2025-12-31';

console.log(date.replace(/-/g, '/'));
console.log(date.replace(/(2025)(-)(12)(-)(31)/, '$5$4$3$2$1'));

// Задача 3 ----------------------------------------------------------------

let str1 = 'Я учу JavaScript!';

console.log(str1.substr(2, 3));
console.log(str1.substring(2, 5));
console.log(str1.slice(2, 5));

console.log(str1.substr(6, 10));
console.log(str1.substring(6, str1.length-1));
console.log(str1.slice(6, str1.length-1));

// Задача 4 ------------------------------------------------------------------

let arr = [4, 2, 5, 19, 13, 0, 10],
    sum = 0;

for(i = 0; i < arr.length; i++) {
   // console.log((arr[i])**3);
    sum += i**3; 
}

console.log(Math.sqrt(sum));

// Задача 5 ----------------------------------------------------------------

let a = 3,
    b = 5,
    c = a - b,
    a1 = 6,
    b1 = 1,
    c1 = a1 - b1;

    if (c < 0) {
        console.log(Math.abs(-c));
    } else {
        console.log(c);
    }

    if (c1 < 0) {
        console.log(Math.abs(-c1));
    } else {
        console.log(c1);
    }

// Задача 6 ----------------------------------------------------------------
let dateNow = new Date();

function addZero() {

}

console.log(dateNow.toLocaleString('ru', opt));

// Задача 7 ----------------------------------------------------------------

let str2 = 'aa aba abba abbba abca abea';

console.log(str2.match(/['a']{1}['b']{1,}['a']{1}/gi));

// Задача 8 -----------------------------------------------------------------

let phone = '+375-29-3768567';
let tel = /[+0-9]{1,3}-[0-9]{2,3}-[0-9]{7}/gi;

let result = tel.test(phone);

let funInput = function (phone) {
    if (result == true) {
        return true;
    } return false;
}

console.log(funInput());

// Задача 9 -------------------------------------------------------------

let email = 'group________FE114@gmail.com',
    regexp = /[0-9a-z]{2,}[-_]{0,1}@[a-z]{2,11}.[a-z]{2,11}/gi,
    checking = regexp.test(email);

function eReg(a) {
    if (checking == true) {
        return true;
    } return false;
}

console.log(eReg(email));

