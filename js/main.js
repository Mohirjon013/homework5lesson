// 1-masala
// const arrList = [
//     {
//         id:1,
//         name: "Botir",
//         age:20,
//         hobby:"Football"
//     },
//     {
//         id:2,
//         name: "Anvar",
//         age:22,
//         hobby:"Basketball"
//     },
//     {
//         id:3,
//         name: "Akrom",
//         age:22,
//         hobby:"Basketball"
//     },
//     {
//         id:4,
//         name: "Akrom",
//         age:20,
//         hobby:"Football"
//     }
// ]
// function ficRes(arrList){
//     let Res = []
//     for(let ageNum of arrList){
//         if(ageNum.age > 20){
//             Res.push(ageNum.name)
//         }
//     }
//     return Res
// }
// const resulat = ficRes(arrList)
// console.log(resulat);

// 3-masala
// let arrList = [22,112,3,4,222,123,43]
// let arrmax = arrList[0]
// function ficRes(arrList){
//     for(let arrRes of arrList){
//         if(arrRes > arrmax){
//             arrmax = arrRes
//         }
//     }
//     arrList.unshift(arrmax)
//     return arrList
// }
// const resulat = ficRes(arrList)
// console.log(resulat);

// 4-masala
// let size = prompt("enter size") - 0 ;
// let arr = [];
// function collectionNames(size){
//     for(let i = 0; i < size; i++){
//         arr[i] = prompt("add name");
//     }
// }
// collectionNames(size)

// let names = prompt("enter name");
// function compareName(names){
//     let found = false
//     for(const name of arr) {
//         if(name == names) found = true;
//         arr.push(names)
//     }
//     if(found){
//         return "Bor"
//     }
//     else{
//         return arr
//     }
// }
// const result = compareName(names);
// console.log(result);

// 5-masala
// let arr = prompt("enter number !!!") - 0;

// function enterNmuber(arr){
//     let arr2 = []
//     for(let i = 1; i <= arr; i++){
//         arr2.push(i)
//     }
//     return arr2.reverse()
// }
// const result = enterNmuber(arr)
// console.log(result);


// 1-masala
// function createArr(a, b){
//     return (a + b);
// }
// const number1 =prompt("enter first number") - 0
// const number2 =prompt("enter second number") - 0

// console.log(createArr(number1 , number2));

// 2-masala
// function enterNmuber(arr){
//     let evenRes = 0
//     for(let num of arr)
//     evenRes += num
//     return evenRes
// }
// const result = enterNmuber([2,5,4,8,7])
// console.log(result);

// 3-masala
// let arr = [4,-7,-9,8,56,-3]
// function createArr(arr) {
//     let arr2 = []
//     for(let num of arr){
//         if(num > 0){
//             arr2.push(num)
//         }
//     }
//     return arr2
// }
// const result = createArr(arr)
// console.log(result);

// 4-masala
// let arr = ["5", 2, "true"]
// function createArr(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] == "string" && arr[i] == Number(arr[i])){
//             arr[i] = arr[i] - 0
//         }
//         else if(typeof arr[i] == "string"){
//             arr[i] = 0
//         }
//     }
//     return arr
// }
// const result = createArr(arr)
// console.log(result);

// 5-masala
// let obj = [
//     {
//         name: "Abdulloh",
//         age: 19,
//         status: false
//     },
//     {
//         name: "Ibrohim",
//         age: 18,
//         status: true
//     },
//     {
//         name: "Shodiyor",
//         age: 20,
//         status: false
//     }
// ]
// function ficRes(obj){
//     let Res =[]
//     for(let userNames of obj){
//         if(userNames.status == false){
//             Res.push(userNames.name)
//         }
//     }
//     return Res
// }
// const result = ficRes(obj)
// console.log(result);

// 6-masala
// let arr = []

// function collectionNames(arr){
//     let evenRes = 0
//     for(let i = 0; i < 3; i++){
//         arr[i] = prompt("enter number !!!") -0; 
//     }s
//     for(let num of arr){
//         evenRes += num
//     }
//     return evenRes / arr.length
// }
// console.log(collectionNames(arr));


// 7-masala
// function createArr(arr){
//     if(arr[0] % 2 == 0){
//         arr[0] +=1
//     }
//     else{
//         arr[0] +=1
//     }
//     return arr
// }
// console.log(createArr([5,6,35,6]));

// 8-masala
// let arr1 = [ "komiljon", "apple", "mi", "tesla", "UZB"]
// let arr2 = ["apple", "Yusufbek", "tesla", "UZB", "samsung"]
// function compareArr(arr1, arr2){
//     let Res = []
//     for(let arr01 of arr1){
//         for(let arr02 of arr2){
//             if(arr01 == arr02){
//                 Res.push(arr01)
//             }
//         }
//     }
//     return Res
// }
// console.log(compareArr(arr1, arr2));
