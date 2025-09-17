


let txt4 = "Hello".slice(0, 2)
console.log(txt4)


let txt5 = "hello world".toLocaleUpperCase()
let txt6 = "TEXT".toLocaleLowerCase()
console.log(txt5)
console.log(txt6)

let txt7 = txt5 + txt6
console.log(txt7)

let txt1 = "str1"
let txt2 = "str2"
console.log(` ${txt1} ${txt2} `)


console.log(txt1.concat(txt2))

let empty = ""
if (empty) {
    console.log("String is not empty")
} else {
    console.log("String is empty")
}



let str = ("     Hello ".concat("World     ")).trim()
console.log(str)

let names = "name1 name2 name3".split(" ")
console.log(names)

let someString = "Hello world"
let someNum = someString.indexOf("e")
console.log(someNum)
let anotherNum = someString.indexOf("l", 5)
console.log(anotherNum)

let includes = someString.includes("Hello")
console.log(includes)

let age = 15
let answer = age <= 13 ? console.log("Not adult") : age > 13 ? console.log("not kid") : console.log("Adult")
