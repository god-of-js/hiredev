// // var johnAge= 22;
// // var johnHeight = 6;
// // var jamesAge = 16;
// // var jamesHeight = 7;
// // var addJohn = johnAge + johnHeight;
// // // var addJames = jamesAge + jamesHeight;
// // // if (addJohn > addJames) {
// // //     console.log('John wins' + ' ' + addJohn )
// // // }
// // // else{console.log('James wins' + ' ' + addJames )}
// // var ages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
// // //var persons = ['henry','tochukwu', 'chizi', 'frank', 'odogwu', 'kosi', 'kratos', 'king', 'sleek'];
// //     for(var i = 0; i < ages.length; i++){
// //   console.log(ages[i]  )  
// //}
// // let henry = Number(prompt('fuck you bitch'));
// // if(!henry.isNaN) {
// //     console.log('and you too')
// // }
// // var yourName = prompt('let us know you');
// // if (typeof(yourName) === 'string' ) {
// // console.log('thank you');
// // }else{
// //     console.log('put in yourname bitch')
// // }
// // switch () {
// // case 1:
// //     console.log(i)
// //     break
// //     case 2:
// //         console.log(e)
// //         break
// //         case 3:
// //             console.log(e + i)
// //             break
// //             case 4:
// //             console.log(e + i + i)
// //             break
// //             case 5:
// //             console.log(e + i + e)
// //             break
// //             case 6:
// //             console.log(e + i + e + i)
// //             break
// //             case 7:
// //             console.log(e + i + e + i + i)
// //             break
// // // }
// // let henry = (x) => {
// // return `henry ${x}`
// // }
// // console.log(henry('is a god'))
// // function printFarmInventory(cows, chickens) {
// //     let cowString = String(cows);
// //     while (cowString.length < 3) {
// //     cowString =  "0" + cowString;
// //     }
// //     console.log(`${cowString} Cows`);
// //     let chickenString = String(chickens);
// //     while (chickenString.length < 3) {
// //     chickenString = "0" + chickenString;
// //     }
// //     console.log(`${chickenString} Chickens`);
// //     }
// //     printFarmInventory(7, 11);
// // function printZeroPaddedWithLabel(number, label) {
// //     let numberString = String(number);
// //     while (numberString.length < 3) {
// //     numberString = "0" + numberString;
// //     }
// //     console.log(`${numberString} ${label}`);
// //     }
// //     function printFarmInventory(cows, chickens, pigs) {
// //     printZeroPaddedWithLabel(cows, "Cows");
// //     printZeroPaddedWithLabel(chickens, "Chickens");
// //     printZeroPaddedWithLabel(pigs, "Pigs");
// //     }
// //     printFarmInventory(7, 11, 3);
// // function zeroPad(number, width) {
// //     let string = String(number);
// //     while (string.length < width) {
// //     string = "0" + string;
// //     }
// //     return string;
// //     }
// //     function printFarmInventory(cows, chickens, pigs) {
// //     console.log(`${zeroPad(cows, 3)} Cows`);
// //     console.log(`${zeroPad(chickens, 3)} Chickens`);
// //     console.log(`${zeroPad(pigs, 3)} Pigs`);
// //     }
// //     printFarmInventory(7, 16, 3);
// // let min = (a, b) => {
// //    let val = Math.max(a,b);
// //    return val
// // }
// // let max = min(2, 5);
// // console.log(max)
// let isEven = (boo) => {
//     let bool = boo;
//     if (bool % 2 == 0) {
//         return 'even'
//     } else if (bool % 2 == 1) {
//         return 'odd'
//     } else {
//         return boo * isEven(7)
//     }
// }
// let tru = isEven(7.2);
// console.log(tru);
// // console.log(999 % 2)

//  function range(start, end){
//  for(let i = 0; i < end && start.length < end; i++) {
// start.push(i);
//  }
//  if(start.length < end + 1){
//     start.push(end);
//  }
// return start
// }
//  console.log(range([], 9));
// let henry = ['henry', 'tochukwu'];
// let tochukwu = henry.reverse();
// // console.log(tochukwu);
// function greaterThan(n) {
//     return m => m > n;
//     }
//     let greaterThan10 = greaterThan(10);
//     console.log(greaterThan10(11));
// console.log('henry')
// function map(array, transform) {
//     let mapped = [];
//     for (let element of array) {
//     mapped.push(transform(element));
//     }
//     return mapped;
//     }
//     let rtlScripts = SCRIPTS.filter(s => s.direction == "rtl");
//     console.log(map(rtlScripts, s => s.name));
    // → ["Adlam", "Arabic", "Imperial Aramaic", …]
    // let arr = ['henry', 'tochukwu', 'octet'];
    // let array = arr.map(arr[0].split('ry').join('king'));
    // console.log(array);
// let arr = () => {
//     let arra = [9,8,7,6,5,4,3,2,1];
//    for(let i = 0; i < arra.length; i++){
//      if(arra[i] < 5){
//          let five = (evt) => {
//          arra[i] += evt;
//          }
//          five(5)
//      }
//      console.log(arra)
//    }
// }
// arr();
// let hen = { 
//   say() {
//     console.log(`henry says Jerry ${this.speak} and chizi is a ${this.fun} too `);
//   }
// }
// let henry = Object.create(hen);
// henry.speak = 'you re a fucker';
// henry.fun = ' fucker';
// henry.say();
// // console.log(henry)
// function speech(line) {
// console.log(`The ${this.type} rabbit says '${line}'`);
// }
// let whiteRabbit = {type: "white", speech};
// let hungryRabbit = {type: "hungry", speech};
// whiteRabbit.speech("Oh my ears and whiskers, " +
// "how late it's getting!");
// // → The white rabbit says 'Oh my ears and whiskers, how
// // late it's getting!'
// hungryRabbit.speech("I could use a carrot right now.");
// // → The hungry rabbit says 'I could use a carrot right now.'
// speech.call(whiteRabbit, 'hello')
// // speech.call(whiteRabbit, )
// function normalize() {
//   console.log(this.coords.map(n => n / this.length));
//   }
//   normalize.call({coords: [0, 2, 3], length: 5});
// function makeRabbit(type) {
//   let rabbit = Object.create(protoRabbit);
//   rabbit.type = type;
//   console.log(`henry is a ${type} man`)
//   return rabbit;
//   }
//   makeRabbit('rich')
//   function protoRabbit(line) {
//     console.log(`henry ${line} .`)
//     line = 'is a bad guy;'
//   }
