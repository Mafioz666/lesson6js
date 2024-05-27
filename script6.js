//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
document.write('Task Lenght')
document.write('<br>','1 type','<br>')
let arrobj1=['hello world', 'lorem ipsum', 'javascript is cool']
let s=0;
for (let i = 0; i < arrobj1.length; i++) {
    s+=arrobj1[i].length
}
document.write(s)
document.write('<br>','2 type','<br>')
arrobj1.forEach((item)=>{
        document.write('<br>',item.length,'<br>')
    }

)
// - Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'
document.write('<br>','Task toUpperCase','<br>')
let arrobj2=[ 'hello world ', 'lorem ipsum ', 'javascript is cool ']
for (let i = 0; i < arrobj2.length; i++) {
    document.write(arrobj2[i].toUpperCase())
}
// - Перевести до нижнього регістру настипні стрінгові значення
//       'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
document.write('<br>','Task toLowerCase','<br>')
let arrobj3= [ 'HELLO WORLD ', 'LOREM IPSUM ', 'JAVASCRIPT IS COOL ']
for (let i = 0; i < arrobj3.length; i++) {
    document.write(arrobj3[i].toLowerCase())
}

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
//
document.write('<br>','Task Delete','<br>')
let str = "            dirty string     "
console.log(str)
console.log(str.trim())
document.write(str.trim())

// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
//
document.write('<br>'," Task stringtoarray",'<br>')
let strin = 'Ревуть воли як ясла повні';

const stringToarray =(string)=>{
    let arr=['']
    let j=0
    for (let i = 0; i < string.trim().length; i++) {
        if(string[i] !== " "){
            arr[j]+=string[i]
        }else {
            j++
            arr[j]=''
        }

    }
    return arr
}
console.log(stringToarray(strin))
document.write(stringToarray(strin))
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
document.write('<br>','Task numbrtostr','<br>')
let numbers=[10,8,-7,55,987,-1011,0,1050,0]
let nmbtosrt= numbers.map((numbe)=>{
        // let newnumber={...numbe};
        let newarrs=['']
        newarrs=numbe.toString()
        return newarrs
    },[]
)
console.log(numbers)
console.log(nmbtosrt)
document.write(nmbtosrt)
// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
//
document.write('<br>','Task sortNums','<br>')
const sortNums=(arr,direction)=>{
    if( direction==='ascending'){
        arr.sort((arr1,arr2)=>arr1-arr2)
    } else if( direction==='descending'){
        arr.sort((arr1,arr2)=>arr2-arr1)
    }
    return arr
}
let nums = [11,21,3];
document.write(sortNums(nums,'ascending'),'<br>')
document.write(sortNums(nums,'descending'),'<br>')
// ==========================
// - є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
document.write('<br>','Task','<br>')
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
//cmotrett concole
document.write('<br>','sort','<br>')
document.write(coursesAndDurationArray.sort((arr1,arr2) => arr2.monthDuration-arr1.monthDuration))//ne vuvodit etim cpocobom
console.log(coursesAndDurationArray.sort((arr1,arr2) => arr2.monthDuration-arr1.monthDuration))

document.write('<br>','filtr','<br>')
document.write(coursesAndDurationArray.filter(month => month.monthDuration>5))//ne vuvodit
console.log(coursesAndDurationArray.filter(month => month.monthDuration>5))

document.write('<br>','add','<br>')
let rezalt= coursesAndDurationArray.map((arr,index) =>({id:index+1,...arr}))
document.write(rezalt)//ne vuvodit
console.log(rezalt)
//  =========================
//  описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10','jack','queen','king','ace'
//     color:'', // 'red','black'
// }
document.write('<br>','Task card','<br>')
let cardSuit= ['spade', 'diamond','heart', 'clubs']
let value = ['6','7','8','9','10','jack','queen','king','ace']
let cards =cardSuit.reduce((acum,card)=>{
    value.forEach( carditem =>{
        let colored =(card==='diamond' || card ==='heart') ? 'red' : 'black';
        acum.push({
            cardSuit: carditem,
            value: card,
            color: colored
        })
    })
    return acum;
},[])
console.log(cards)//тут працює
document.write(cards)//чогось не виводить коректно)
console.log(cards.find(card => card.value ==='spade' && card.cardSuit==='ace' ))
console.log("six")
let six=(array) => {
    for (const item of array) {
        if (item.cardSuit === '6') {
            console.log(item)
        }
    }
}
six(cards)
let red=(array) => {
    for (const item of array) {
        if (item.color === 'red') {
            console.log(item)
        }
    }
}
console.log('red')
red(cards)
let carddiamond=(array) => {
    for (const item of array) {
        if (item.value === 'diamond') {
            console.log(item)
        }
    }
}
carddiamond(cards)
console.log("clubs")
let cardclubs=(array) => {
    for (const item of array) {
        if (item.value === 'clubs') {
            if (item.cardSuit==='9' || item.cardSuit==='10' || item.cardSuit==='jack'|| item.cardSuit==='queen'|| item.cardSuit==='king'|| item.cardSuit==='ace') {
                console.log(item)
            }
        }
    }
}
cardclubs(cards)
// =========================
//
// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// =========================
let objcards={spades:[],diamonds:[],hearts:[],clubs:[]}
document.write('<br>','Task card reduce','<br>')
let cardreduce=cards.reduce((obj,item)=>{
            if (item.value==='spade'){
                obj[0].push(item)
                objcards.spades= obj[0]
            }
            if (item.value ==='diamond'){
                obj[1].push(item)
                objcards.diamonds=obj[1]
            }
            if (item.value==='heart'){
                obj[2].push(item)
                objcards.hearts=obj[2]
            }
            if (item.value==='clubs'){
                obj[3].push(item)
                objcards.clubs=obj[3]
            }
            return obj
                        },[[],[],[],[]]

)
console.log("reduce")
console.log(objcards)

// взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

let reduce=coursesArray.reduce((acum,item)=>{
    let arr = item.modules
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]==='sass'){
             acum[0].push(item)
        }
        if (arr[i] ==='docker'){
             acum[1].push(item)
        }
    }
    return acum

    },[[],[]]
)
console.log("reduce")
console.log(reduce)