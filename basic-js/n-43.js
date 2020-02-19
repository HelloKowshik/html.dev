// Recursive Functions
function printNumbers(n) {
    if (n <= 0) {
        return;
    }
   // console.log(n);
    printNumbers(n - 2);
    console.log(n);
}
//printNumbers(10);

function printToN(n) {
    if (n === 0) {
        return 0;
    }
    return n + printToN(n - 1);
}
//console.log(printToN(5));

function printNumberRange(m, n) {
    if (m > n) {
        return 0;
    }
    return m + printNumberRange(m + 1, n);
}
//console.log(printNumberRange(1, 100));

function factorial(n) {
    if (n === 1) {
        return 1;
    }
    return (n * factorial(n - 1));
}
//console.log(factorial(5));

function gcd(a, b) {
    console.log('A=' + a + ' B=' + b + ' A%B=' + (a % b));
    if (a % b === 0) {
        return b;
    }
    return gcd(b, a % b);
}
//console.log(gcd(45, 7));

function powerOfNum(num, power) {
    if (power === 0) {
        return 1;
    }
    var result = num * powerOfNum(num, power - 1);
    console.log('NUMBER=' + num + ' POWER=' + power+' RESULT='+result);
    return result;
}
//console.log(powerOfNum(4, 3));

function sumOfDigit(digit) {
    if (digit === 0) {
        return 0;
    }
    console.log('DIGIT='+digit)
    var sum = Math.floor((digit % 10)) + sumOfDigit(Math.floor(digit / 10));
    console.log('DIGIT='+digit+' VAGFOL=' +(Math.floor(digit / 10))+' REMINDER='+ (Math.floor((digit % 10)))+ ' SUM=' + sum);
    return sum;
}
//console.log(sumOfDigit(12345));

var arr = [5, 3, 8, 9, 10];
function traverseWithSum(arr, lastIndex) {
    if (lastIndex < 0) {
        return 0;
    }
    console.log('Last Index=' + lastIndex);
    var element = arr[lastIndex];
    var traverse = traverseWithSum(arr, lastIndex - 1);
    var result = element + traverse; 
    console.log('ELEMENT=' + element + ' TRAVERSE=' + traverse + ' SUM=' + result);
    return result;
}
//console.log(traverseWithSum(arr, arr.length - 1));

function reverseArray(arr, firstIndex, lastIndex) {
    if (firstIndex > lastIndex) {
        return;
    }
    var temp = arr[firstIndex];
    arr[firstIndex] = arr[lastIndex];
    arr[lastIndex] = temp;
    console.log('TEMP='+temp+' FI=' + arr[firstIndex] + ' LI=' + arr[lastIndex]+' FirstIndex='+firstIndex+' Last Index='+lastIndex);
    reverseArray(arr, firstIndex + 1, lastIndex - 1);
}
var arr1 = [1, 2, 3, 4, 5, 6];
//console.log('BEFORE: ' + arr1.toString()); 
//reverseArray(arr1, 0, arr1.length - 1);
//console.log('AFTER: ' + arr1.toString());

function fibonacci(index) {
    if (index <= 1) {
        return index;
    }
    console.log('Index=' + index);
    var result = fibonacci(index - 1) + fibonacci(index - 2);
    console.log('RESULT=' + result);
    return result;
}
//console.log(fibonacci(5));