// 1 block peremenie
// variable
var name ='Daniil' //могу менять переменную просто написав name=
const lastName= 'Alabuzhev' // не могу менять переменную
let age = 26 //могу менять
const InProgrammer = true //boolean
const firstName= 'Danya'

// 2 Mutation
console.log('Imya people ' + name + ' and age ' + age)
const lastName1=prompt('Введи фамилию,чмо')
alert(firstName + ' ' +lastName1)

// 3 Operators
const currentYear =2022
const bithhdayYear= 2002

const age1 = currentYear - bithhdayYear
console.log(age1.toString())
// 4 Types data
const isP = true
const name1 = 'Danilov'
const age12 = 20
console.log(typeof isP, typeof name1, typeof age12)
// 5 Prioritet operators
const fullAge = 22
const birthYear1= 2002
const currYear = 2022
const isFullAge  = currYear - birthYear1 >= fullAge
console.log(isFullAge)
// 6 Condition operators
const courseStatus = 'pending'
if (courseStatus==='ready'){
    console.log('Course ready')
} else if (courseStatus==='pending'){
    console.log('Course in razrabotke')
}
// 8 Functions
function calculatorAge(year){
    return 2022-year
}
const myAge = calculatorAge(2002)
console.log(myAge)
// 9 Arrays
const cars =['Mazda', 'Mercedez', 'Ford']
cars[0]='Porsche'
console.log(cars)
// 10 CICLES

