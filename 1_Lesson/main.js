// // const  letter  = 'Adbhfjk';
// //
// // const regExp =  /d/gi;
// // console.log(letter.match(regExp))
//
// // const letter = '12ddfg34sdf5d6ghj7g89fh1g2hgkj34dfg567';
// // const regExp = /\d/g;
// // const regEx = /\w/g;
// // console.log(letter)
// // console.log(letter.replace(regExp, '*'))
// // console.log(letter.replace(regEx,'*' ))
// //
// // const phoneInput = document.querySelector('.phoneInput')
// // const phoneCheck = document.getElementsByClassName('phoneCheck')
// // const phoneResult  = document.querySelector('.PhoneResult')
// //
// // // console.log(phoneCheck[0])
// // // console.log(phoneInput)
// // // console.log(phoneResult)
// // const phoneRegExp = /^\+996 \d{3} \d{2}-\d{2}-\d{2}$/;
// //
// // phoneCheck[0].addEventListener('click',()=>{
// //     if (phoneRegExp.test(phoneInput.value)){
// //         phoneResult.innerText = 'ok'
// //         phoneResult.style.color = 'green';
// //     } else {
// //         phoneResult.innerText = "NOT ok"
// //         phoneResult.style.color = 'red';
// //
// //     }
// // })
// // let num = 0 ;
// // const count = () =>{
// //     num++
// //     console.log(num);
// //     if (num >=350){
// //         count();
// //     }
// // }
// // count();
//
// const people = {
//     john: {
//         age: 23,
//         parents : {
//             kelly : 43,
//             tony : 55
//         }
//     },
//     sam :{
//         age : 32,
//         parents: {
//             Jean : 43,
//             stive: {
//                 age: 47,
//                 parents : {
//                     Margaret : 90
//                 }
//             }
//         }
//
//     }
// }
//
// const parentList = (obj) => {
//     if (obj.parents){
//         for (let key in obj.parents){
//             console.log(key);
//             parentList(obj.parents[key])
//         }
//     }
// }
// for (let key in people){
//     parentList(people[key]);
// }
// parentList()





