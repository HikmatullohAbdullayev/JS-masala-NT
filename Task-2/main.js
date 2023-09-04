// function x() {
//     for (let i of arguments){
//         console.log(i);
//     }
// }
// x(1,3,4,21,4,5,4,45,3,23,433,4,43)

// const x = ( ) =>  {

// }

//  Array dagi malumotlarni sochish

// const arr = [1,2,3,4,5,67,]

// let a = [...arr]

//  Object dagi malumotlarni sochish

// const obj ={
//     name:"nmadir",
//     id:12,

// }
// let o = {...obj}

// ichma-ich obj 

// const obj2 ={
//     name:"nmadir",
//     id:12,
//     nestObj:{
//         age: 20,
//         data: 2003
//     }
// }
// let o2 = {...obj2, nestObj2:{...obj2.nestObj} }
// console.log(o2);



//!!!Uyga vazifa !!!
// obyekt ichidagi malumotni boshqa obyektga ko'chirish

let obj = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
     street: "Kulas Light",
      suite: "Apt. 556",
      city: "Gwenborough",
      zipcode: "92998-3874",
      geo: {
        lat: "-37.3159",
        lng: "81.1496"
      }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
      name: "Romaguera-Crona",
      catchPhrase: "Multi-layered client-server neural-net",
      bs: "harness real-time e-markets"
    }
  }

// let obj2 ={nestObj:{...obj.address.geo}}
// let obj2 ={nestObj:{...obj.address.geo.lat}}
// let obj2 ={nestObj:{...obj.company}}
// let obj2 ={newObj:{...obj}}

// console.log(obj2);