
//Tub sonni aniqlash


// let son1 = Number(prompt("0 dan katta son kiriting"))
// let son2 = false
// let son3 = 1
// if (son1 > 0) {
//     for (let i = 2; i < son1; i++) {

//         if (son1 % i == 0) {

//             son2 = true

//         }
//     }
//     if (son2 == false) {
//         console.log(son1, "tub ");

//     } else {
//         console.log(son1, "tub emas");
//     }

// } else {
//     console.log("0 Dan katta son kirting");

// }

//Tub sonlarni chiqarish va mukammal son aniqlash

// let son1 = Number(prompt("0 dan katta son kiriting"))

// let son3 = 0
// if (son1 > 0) {
//     for (let i = 2; i <= son1; i++) {
//         let son2 = true
//         for (let j = 2; j < i; j++) {
//             if (i % j == 0) {
//                 son2 = false
//                 break
//             }
//         }
//         if (son2) {
//             console.log(i,"tub son");
//         }
//     }

//     let count = 0

//     for (let i = 1; i < son1; i++) {
//         if (son1 % i == 0) {
//             count += i
//         }
//     }


//     if (count == son1) {
//         console.log(son1 ,"mukammal son");
//     } else {
//         console.log(son1, "mukammal son emas");
//     }
// } else {
//     console.log("0 dan katta son kiriting");
// }

// Belgilarni topish

let soz = prompt("nmadur yozing")
let a = true
let soniP = 0
let soniM = 0
let soniB = 0
let soniK = 0
for (let i = 0; i < soz.length; i++) {

    for (let j = 0; i > j; j++) {
        if (soz[i] == "+") {
            soniP += 1
            a = false
            console.log(soz[i], "bu ishora", soniP, "-bolib kelganda", i += 1, "-belgi bo'lib qatnashgan");


        } else if (soz[i] == "-") {
            soniM += 1
            a = false
            console.log(soz[i], "bu ishora", soniM, "-bolib kelganda", i += 1, "-belgi bo'lib qatnashgan");

        } else if (soz[i] == "*") {
            soniK += 1
            a = false
            console.log(soz[i], "bu ishora", soniK, "-bolib kelganda", i += 1, "-belgi bo'lib qatnashgan");

        } else if (soz[i] == "/") {
            soniB += 1
            a = false
            console.log(soz[i], "bu ishora", soniB, "-bolib kelganda", i += 1, "-belgi bo'lib qatnashgan");

        }
    }



}


if (a) {

    console.log("kirtilgan matnda ishoralar yoq");

}
