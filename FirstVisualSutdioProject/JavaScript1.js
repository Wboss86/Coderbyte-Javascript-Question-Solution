//CODEBYTE QUESTIONS 1-5

//Question 1
//Have the function FirstReverse(str) take the str parameter being passed and return the string in reversed order.

//Answer
function FirstReverse(str) {
    var str_arr1 = new Array();
    var ans = '';
    for (i = 0; i < str.length; i++) {
        str_arr1.push(str.charAt(i));
    }
    for (j = str.length - 1; j >= 0; j--) {
        ans += str_arr1[j];
    }
    return ans;
}

//Also Correct Answer
function FirstReverse(str) {
    return str.split("").reverse().join("");
}


// keep this function call here 
// to see how to enter arguments in JavaScript scroll down

//Question 2
//Using the JavaScript language, have the function FirstFactorial(num) take the num parameter being passed and return the factorial of it (ie. if num = 4, return (4 * 3 * 2 * 1)). 
//For the test cases, the range will be between 1 and 18. 

//My Answer
function FirstFactorial(num) {
    var result = 1;
    for (var i = num; i >= 1; i--) {
        result *= i;
    }
    return result;
}

//Question 3
//Have the function LongestWord(sen) take the sen parameter being passed and return the largest word in the string.
//If there are two or more words that are the same length, return the first word from the string with that length. Ignore punctuation and assumesen will not be empty

//My Answer
function LongestWord(sen) {
    //var sen = "Hi, there Kanye Northwest";
    var max = "";
    var stringArray = sen.split(" ");
    for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i].length > max.length)
            max = stringArray[i];
    }
    return max;

}
//Best Answer
function LongestWord(str) {
    str = str.replace(/[^a-zA-Z]+/g, " ");
    var best = "";
    var arr = str.split(" ");
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        if (best.length < arr[i].length) best = arr[i];
    }
    return best;
}

//Question 4
//Using the JavaScript language, have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
//Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
//Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string. 

//Answer
function LetterChanges(str) {
    var iLetters = str.split('');
    var newStr = [];

    for (var i = 0; i < str.length; i++) {
        if (/[a-y]/ig.test(iLetters[i])) {
            newStr[i] = String.fromCharCode(iLetters[i].charCodeAt(0) + 1);
            if (/[aeiou]/ig.test(newStr[i])) {
                newStr[i] = newStr[i].toUpperCase();
            }
        } else if (/[z]/ig.test(iLetters[i])) {
            newStr[i] = "A";
        } else if (/[^A-Z]/ig.test(iLetters[i])) {
            newStr[i] = iLetters[i];
        }
    }

    return newStr.join('');
}
//Question 5
//Using the JavaScript language, have the function SimpleAdding(num) add up all the numbers from 1 to num.
//For the test cases, the parameter num will be any number from 1 to 1000.

//Answser
function simpleAdding(number) {
    var sum = 0;
    for (var i = 0; i <= number; i++) {
        sum += i;
    }
    return sum;
}