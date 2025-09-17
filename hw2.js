//Exercise 1

let arr1 = []
for (let i = 5; i <= 15; i++) {
    arr1.push(i)
}
console.log("Array with numbers from 5 to 15: " + arr1)


//Exercise 2

let arr2 = [1, 2, 3, 4, 5]
let length = arr2.length //სატესტო ერეის სიგრძე
for (let i = 0; i < arr2.length / 2; i++) {
    let temp = arr2[length - 1 - i] //დროებით შევინახოთ ერეის ბოლოდან გამოყოლილი ელემენტი
    arr2[length - i - 1] = arr2[i] // და თვითონ ჩავანაცვლოთ ერეის საწყისი ელემენტებით
    arr2[i] = temp // საწყისი ელემენტები კი ჩავანაცვლოთ დროებითი ცვლადით, რომელიც ინახავს წინა ბოლოდან გამოყოლილი ელემენტის ინფორმაციას
}
console.log("Reversed array: " + arr2)

//Exercise 3

let arr3 = [100, 2, 3, 9]
let minElement = arr3[0] //დროებით დავუშვათ, რომ პირველი არის უმცირესი (შედარებისათვის)
for (let i = 1; i < arr3.length; i++) {
    if (arr3[i] < minElement) {
        minElement = arr3[i]
    }
}

console.log("Minimal number in the array is: " + minElement)
//მოცემული ალგორითმი იყო linear seach ახალა კი დამატებით გავაკეთებ მესამე ლექციის დახმარებით იმავე დავალებას

let sortedArr = arr3.sort((a, b) => a - b)
minElement = sortedArr[0]
console.log("Minimal number in the array is: " + minElement)

//Exercise 4

let arr4 = [1, 2, 3, 4, 5, 6, 7]
arr4 = arr4.slice(2, 5)
console.log("Sliced array: " + arr4)

//Exercise 5

let firstArr = [1, 2]
let secondArr = [3, 4]
//Way 1
let finalArray = [...firstArr, ...secondArr]
console.log("Unified array: " + finalArray)
//Way 2
finalArray = [[firstArr], [secondArr]].flat(Infinity)
console.log("Unified array: " + finalArray)

//Exercise 6

let arr5 = [1, 2, 3, 4, 5, 6, 6, 7, 7]
arr5 = [...new Set(arr5)]
console.log("Without duplicates: " + arr5)

//Exercise 7

let arr6 = [1, 2, 3, 4, 5, 6, 7]
let evenArr = []
let oddArr = []
for (let i = 0; i < arr6.length; i++) {
    if (arr6[i] % 2 === 0) {
        evenArr.push(arr6[i])
    } else {
        oddArr.push(arr6[i])
    }
}

console.log("Array of even numbers: " + evenArr)
console.log("Array of odd numbers: " + oddArr)

//Exercise 8
let arr7 = [1, 2, 3, 4, 5, 6, 7, -1, -2, -3, -4]
let negSum = 0
let positiveCount = 0

for (let i = 0; i < arr7.length; i++) {
    if (arr7[i] > 0) {
        positiveCount++
    } else {
        negSum += arr7[i] //0 ჩავთვალოდ უარყოფითად, რადგან ჯამს ხელს არ შეუშლის
    }
}
console.log("Sum of negative numbers: " + negSum)
console.log("Count of positive numbers: " + positiveCount)

//Exercise 9

let arr8 = [1, -2, 5, -7]
let inversedArr = []
for (let i = 0; i < arr8.length; i++) {
    inversedArr.push(-arr8[i])
}

console.log("Inversed array: " + inversedArr)

//Exercise 10

let arr9 = [1, [2, [3]], [4]]
arr9 = arr9.flat(Infinity)

console.log("Flattened array: " + arr9)