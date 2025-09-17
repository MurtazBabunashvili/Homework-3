//Exercise 1

let fullName = "Lika Mamaladze"
let arr = fullName.split(" ") //შევქმნათ ერეი, რომელიც შეიცავს სახელს/გვარს
let answer = ""
for (let i = 0; i < arr.length; i++) {
    answer += arr[i].charAt(0).toUpperCase() + "." //Abbreviation + uppercase, ყოველი შემთხვევისათვის
}
console.log(answer)

//Exercise 2

let email = " EXAMPLE@MAIL.COM "
let trimmedLowerEmail = email.trim() //გავწმინდოთ ზედმეტი space-ბისგან
let lowerEmail = trimmedLowerEmail.toLocaleLowerCase() //გადავიყვანოთ lowerCase-ში
console.log(lowerEmail.includes("@")) //შევამოწმოთ შეიცავს თუ არა ძაღლუკას

//Exercise 3

let str = "luka"
let anotherStr = str.slice(0, str.length - 1) //ყველა ასო ბოლოს გარდა შევინახოთ სხვა სტრინგში
anotherStr += str[str.length - 1].toLocaleUpperCase() //მივაწებოთ ბოლო ასო upperCase-ში
console.log(anotherStr)

//Exercise 4

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FooBar")
    } else if (i % 3 === 0) {
        console.log("Foo")
    } else if (i % 5 === 0) {
        console.log("Bar")
    } else {
        console.log(i)
    }
}

//Exercise 5

let text = "JS is stupid but sometimes cool"
if (text.includes("stupid")) { // ტექსტი შეიცავს თუ არა stupid-ს
    text = text.replace("stupid", "s****d") //თუ შეიცავს ჩაანაცვლე *-ებით
}
console.log(text)

/* 
THEORY 

1. როდესაც ვსაუბრობთ მინიჭების ოპერატორებზე, გვაქვს 3 ტიპის:
let, var და const.
var არის მოძველებული, ამიტომ ხშირად ვიყენებთ let-ს.
const კი არის კონსტანტა/მუდმივი ცვლადი, რომელსაც ვერ ჩავანაცვლებთ/შევცვლით

2. გვაქვს ორი ტიპის ცვლადები, პრიმიტიული და არაპრიმიტიული:
String(ვთქვად სიტყვები), boolean(True/False), number, null, undefined, function, Object, BigInt, Symbol

3. Left hand side search ეძებს ტოლობის მარცხნივ მდგომ ცვლადს, რომელშიც შეინახება რაღაც კონკრეტული მნიშვნელობა
Right hand side search კი ეძებს ტოლობის მარჯვნივ მდგომ მნიშვნელობას, რომელსაც შევინახავთ ცვლადში

4. split() მეთოდი, რომელიც იღებს პარამეტრის მნიშვნელობას და სტრინგს ხლეჩს მის მიხედვით. გახლეჩილი "ნაწილები" კი ქმნიან ერეის.

5. დიახ, სტრინგი არის primitive ტიპი, ანუ შეგვიძლია, რომ ამოვიღოთ ინფორმაცია სტრინგ ცვლადისაგან, მაგრამ მას ვერ შევცვლით პირდაპირ გადაწერის გარეშე.
მაგალითად tempString[0] = "k" ვერ ჩავანაცვლებთ

6. == ადარებს მხოლოდ მნიშვნელობას, როდესაც === ადარებს ტიპსაც და მნიშვნელობასაც.
ვთქვად, როგორც ლექციისას ვთქვით, "10" == 10 გამოიტანს true-ს მაგრამ "10" === 10 გამოიტანს false-ს რადგან სამი ტოლობისას
სტრინგის ტიპი არ ემთხვევა ინტის ტიპს, მაგრამ ორი ტოლობისას ვადარებთ მნიშვნელობას, ანუ ათიანებს, რაც ჭეშმარიტია.

*/
