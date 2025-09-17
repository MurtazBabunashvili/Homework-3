function doubleElements(arr) {
    return arr.map(el => 2 * el)
}

function evens(arr) {
    let evensArr = arr.filter(el => el % 2 === 0)
    return evensArr
}

function stringLength(arr) {
    let moreThanFive = arr.filter(el => el.length <= 5)
    return moreThanFive.join("#")
}

function multiplyTwoDivideThree(arr) {
    let multipliedByTwo = arr.map(el => el * 2)
    let dividesByThree = multipliedByTwo.filter(el => el % 3 === 0)
    return dividesByThree
}

function sumOfPositives(arr) {
    let positives = arr.filter(el => el > 0)
    return positives.reduce((acc, curr) => acc + curr, 0)
}

function deleteLastChar(arr) {
    return arr.map(el => el.slice(0, el.length - 1));
}


function sumOfTwoLowest(arr) {
    let tempArr = arr.filter(el => el > 0).sort((a, b) => a - b);
    return tempArr[0] + tempArr[1]
}