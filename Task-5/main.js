// Uyga vazifa
// Vazifa - 1

// function function1(sm) {
//     console.log(`${sm / 100} m`);
//     return sm
// }
// function1(Math.round(Math.random() * 9999))

// Vazifa - 2

// function function2(kg) {
//     let calc = kg / 1000
//     console.log(`${calc} tonna`);
//     return calc
// }
// function2(Math.round(Math.random() * 9999))

// Vazifa - 3

// function function3(kb) {
//     console.log(kb / 1024, "Kb");
//     return kb
// }
// function3(Math.round(Math.random() * 9999))

// Vazifa - 4

// function function4(kesmaA, kesmaB) {
//     console.log(kesmaA / kesmaB);
// }
// function4(99, 33)

// 5ni shartiga yaxshi tushunmadim

// //Vazifa-6

// function function6(son) {
//     let birlik = son % 10
//     let onlik = (son - birlik) / 10
//     let natija = birlik * 10
//     console.log(son, natija + onlik);
// }
// function6(Math.round(Math.random() * 99))

// Vazifa - 7

// let son = (son) => {
//     let birlik = son % 10
//     let onlik = (son - birlik) / 10
//     let natija = birlik + onlik
//     return natija
// }
// console.log(son(23));

// //Vazifa-8

// let son = (num) => {
//     let birlik = num % 10
//     let onlik = (num - birlik) / 10
//     let birlik2 = birlik * 10
//     let natija = birlik2 + onlik
//     console.log(num);
//     return natija
// }
// console.log(son(Math.round(Math.random() * 99)));

// Vazifa - 9

// let son = (num) => {
//     let onlik = num % 100
//     let yuzlik = num - onlik
//     return yuzlik
// }
// console.log(son(723));

// Vazifa - 10

// let son = (num) => {
//     let qoldiq = num % 100
//     let birlik = qoldiq % 10
//     let onlik = qoldiq - birlik
//     let natija = `birliklar ${birlik}   onliklar ${onlik}`
//     console.log(`berilgan son ${num}`);
//     console.log(natija);
// }
// son(Math.round(Math.random() * 999))

// //Vazifa-11

// let son = (num) => {
//     let qoldiq = num % 100
//     let yuzlik = (num - qoldiq) / 100
//     let birlik = qoldiq % 10
//     let onlik = (qoldiq - birlik) / 10
//     natija = yuzlik + onlik + birlik
//     console.log(num);
//     console.log(`${yuzlik} + ${onlik} + ${birlik} = ${natija}`);
//     return natija
// }
// console.log(son(Math.round(Math.random() * 999)))

//Vazifa-12

// let son = (num) =>{
//     let natija = 0

//          let qoldiq = num % 10
//          let birlik = (num-qoldiq)/10
//          let  onlik = qoldiq *10
//           natija = onlik+birlik

//         return natija
//  }

//  console.log(son(45));

//Vazifa-13

// let son = (num) =>{
//     let qoldiq = num % 100
//     let  birlik = (num- qoldiq) /100
//     let yuzlik = qoldiq * 10
//     let natija = yuzlik + birlik
//     return natija

// }
// console.log(son (321));

//Vazifa-14

// let son =(num ) =>{
//     let qoldiq = num % 10
//     let onlik =(num - qoldiq )/10
//     let natija= qoldiq * 100 +onlik
//     return natija

// }
// console.log(son(779));

//Vazifa-15
// let son = (num) =>{
//     let qoldiq = num % 10
//     let qoldiq2 = (num - qoldiq)/10
//     let yuzlik = qoldiq2 % 10
//     let onlik = (qoldiq2-yuzlik)/10
//     yuzlik *=100
//     onlik *= 10
//     natija = yuzlik + onlik + qoldiq
//     return natija
// }
// console.log(son(236));

//Vazifa-16

// let son = (num) =>{
//     let qoldiq = num % 100
//     let yuzlik = num -qoldiq
//     let onlik = (qoldiq % 10) *10
//     let birlik = qoldiq - (qoldiq % 10)
//     birlik /= 10
//     natija = yuzlik + onlik + birlik
//     return  natija
// }
// console.log(son(123));

//Vazifa-17

// let son = (num) =>{
//     let qoldiq = num % 1000
//     let qoldiq2 = qoldiq / 100

//     return qoldiq2.toFixed(0)

// }
// console.log(son(1934));

//Vazifa-18

// let son =(num)=>{
//     let qoldiq =num / 1000

//     console.log(qoldiq.toFixed(0) );
// }
// console.log(son(4321));

//Vazifa-19-20-21-22-23
// shatrlari deyarli bir xil ekan

// let vaqt =(num) =>{
//     let min = num /60
//     let soat = num /360
//     let natija = `kun boshidan beri ${soat.toFixed(0)} soat va ${min} daqida , ${num} soniya o'tdi`

//     return natija

// }
// console.log(vaqt(36000));

//Boolean
//Vazifa-1

// let son =(num) =>{
//     if (num > 0){
//         return "kirtilgan son 0 dan katta"
//     }else{
//         return "kirtilgan son 0 dan kichik"
//     }
// }
// console.log(son(-5));

//Vazifa-2-3

// let son = (num) =>{
//     if (num % 2 !== 0) {
//         return `${num} soni toq son`
//     }else{
//        return  ` ${num} soni juft son`
//     }
// }
// console.log(son(Math.round(Math.random() * 100)));

//Vazifa-4
// let son =(num1,num2)=>{
//     if (num1 > 2 && num2 <= 3) {
//         return "rost"

//     } else {
//         return "rost emas"
//     }
// }
// console.log(son(3,7));
// console.log(son(3,2));
// console.log(son(Math.round(Math.random() * 5)),(Math.round(Math.random() * 5)));

//Vazifa-5

// let son = (num1,num2)=>{

//     if (num1>=0 || num2< -2) {
//         return "rost"

//     } else {
//         return "rost emas"
//     }
// }

// console.log(son(-2,2));

// console.log(son((Math.round(Math.random() * 10)),(Math.round(Math.random() * 10))));

//Vazifa-6

// let son =(num1,num2,num3)=>{
//     natija = num1<=num2<=num3
//     return  natija
// }
// console.log(son(1,2,3))

//Vazifa-7

// let son =(num1,num2,num3) => {
//     let natija = num2 > num1 && num2 < num3
//     return natija
// }
// console.log(son(1,2,3));

//Vazifa-8

// let son =(num1,num2)=>{
//     let natija = num1 % 2 !==0 && num2 % 2 !==0
//     return natija
//  }
// console.log(son (3,5));

//Vazifa-9-10

// let son =(num1,num2)=>{
//         let natija = num1 % 2 !==0 || num2 % 2 !==0
//         return natija
//      }
//     console.log(son (3,4));

//Vazifa-11

// let son =(num1,num2) => {
//     let natija = num1 % 2 == 0 && num2 % 2==0 ||
//                 num1 % 2 !== 0 && num2 % 2 !==0
//      return natija
// }

// console.log(son(3,2));

//if-else
//Vazifa-1

// let son= (num)=>{
//     if (num>0) {
//         num+=1
//         return num

//     } else {
//         return num
//     }
// }
// console.log(son(2));

//Vazifa-2

// let son = (num) =>{
//     if (num>0) {
//         num+=1
//         return num

//     } else {
//         num-=2
//         return num
//     }
// }
// console.log(son(-2));
// console.log(son(2));

// let son = (num) => {
//   if (num > 0) {
//     num += 1;
//     return num;
//   } else if (num < 0) {
//     num -= 2;
//     return num;
//   } else {
//     num = 10;
//     return num;
//   }
// };
// console.log(son(0));


//Vazifa-4-5

// let son =(num1,num2,num3)=>{
//     if (num1 > 0 && num2 > 0 && num3 > 0) {
//         return "musbat son yoq"

//     } else if (num1 > 0 && num2 > 0 && num3 < 0) {
//         return "1 ta musbat 2ta manfiy son"
//     }
//      else if (num1 > 0 && num2 < 0 && num3 < 0) {
//         return "2 ta musbat 1 ta manfiy son"
//     }
//      else if (num1 < 0 && num2 > 0 && num3 < 0) {
//         return "2 ta musbat 1ta manfiy son"
//     }
//      else if (num1 < 0 && num2 < 0 && num3 > 0) {
//         return "2 ta musbat 1ta manfiy son"
//     }
//      else if (num1 < 0 && num2 > 0 && num3 > 0) {
//         return "1 ta musbat 2ta manfiy son"
//     }
//      else {
//         return "3 ta musbat son"
//     }
// }
// console.log(son(1,2,-3));


//Vazifa-6

// let son= (num1, num2) =>{
//     if (num1>num2){
//         return num1
//     }else{
//         return num2
//     }
// }
// console.log(son(5,3));


//Vazifa-7

// let son = (num1,num2) =>{
//     if (num1<num2) {
//         return `birinchi raqam kichik ${num1} `

//     } else {
//        return  `ikkinchi raqam kichik ${num2}`

//     }
// }
// console.log(son(5,3));

//Vazifa-8

// let son =(num1,num2)=>{
//     if (num1> num2) {
//         return `${num1},${num2}`

//     } else {
//         return `${num2},${num1}`
//     }
// }
// console.log(son(5,8));

//Vazifa-9

// let son = (num1, num2) => {
//     if (num1 == num2) {
//         num2 += 1
//         return `${num1},${num2}`

//     } else if (num1 > num2) {
//         num2 += 1
//         num1 -= num2
//         return ` ${num1},${num2}`
//     } else {
//         return ` ${num1},${num2}`
//     }
// }

//Vazifa-10


// let son = (num1, num2) => {
// if (num1!== num2) {
//     num1+=num2
//     return num1
// } else {
//     num1=0
//     num2=0
//     return `${num1} va ${num2} `
    
// }
// }
// console.log(son(2,2));



