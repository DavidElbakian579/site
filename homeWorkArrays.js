let arr = [3, 2, 6, 10, 5];
console.log(arr);

let arr2 = arr.sort();
console.log(arr.sort());
console.log(arr2);

var arrCart = ['J', 10, 5, 'K', 2];
console.log( arrCart.sort((a, b) => a - b) );


// if(arr[0] =='A'|| arr[1] =='A'|| arr[2] =='A'|| arr[3] =='A'|| arr[4] =='A'&&
//     arr[0] == 2 || arr[1] == 2 || arr[2] == 2 || arr[3] == 2 || arr[4] == 2 &&
// arr[0] == 3 || arr[1] == 3 || arr[2] == 3 || arr[3] == 3 || arr[4] == 3 &&
// arr[0] == 4 || arr[1] == 4 || arr[2] == 4 || arr[3] == 4 || arr[4] == 4 &&
// arr[0] == 5 || arr[1] == 5 || arr[2] == 5 || arr[3] == 5 || arr[4] == 5 ||
// arr[0] == 2 || arr[1] == 2 || arr[2] == 2 || arr[3] == 2 || arr[4] == 2 &&
// arr[0] == 3 || arr[1] == 3 || arr[2] == 3 || arr[3] == 3 || arr[4] == 3 &&
// arr[0] == 4 || arr[1] == 4 || arr[2] == 4 || arr[3] == 4 || arr[4] == 4 &&
// arr[0] == 5 || arr[1] == 5 || arr[2] == 5 || arr[3] == 5 || arr[4] == 5 &&
// arr[0] == 6 || arr[1] == 6 || arr[2] == 6 || arr[3] == 6 || arr[4] == 6 ||
// arr[0] == 3 || arr[1] == 3 || arr[2] == 3 || arr[3] == 3 || arr[4] == 3 &&
// arr[0] == 4 || arr[1] == 4 || arr[2] == 4 || arr[3] == 4 || arr[4] == 4 &&
// arr[0] == 5 || arr[1] == 5 || arr[2] == 5 || arr[3] == 5 || arr[4] == 5 &&
// arr[0] == 6 || arr[1] == 6 || arr[2] == 6 || arr[3] == 6 || arr[4] == 6 &&
// arr[0] == 7 || arr[1] == 7 || arr[2] == 7 || arr[3] == 7 || arr[4] == 7 ||
// arr[0] == 4 || arr[1] == 4 || arr[2] == 4 || arr[3] == 4 || arr[4] == 4 &&
// arr[0] == 5 || arr[1] == 5 || arr[2] == 5 || arr[3] == 5 || arr[4] == 5 &&
// arr[0] == 6 || arr[1] == 6 || arr[2] == 6 || arr[3] == 6 || arr[4] == 6 &&
// arr[0] == 7 || arr[1] == 7 || arr[2] == 7 || arr[3] == 7 || arr[4] == 7 &&
// arr[0] == 8 || arr[1] == 8 || arr[2] == 8 || arr[3] == 8 || arr[4] == 8 ||
// arr[0] == 5 || arr[1] == 5 || arr[2] == 5 || arr[3] == 5 || arr[4] == 5 &&
// arr[0] == 6 || arr[1] == 6 || arr[2] == 6 || arr[3] == 6 || arr[4] == 6 &&
// arr[0] == 7 || arr[1] == 7 || arr[2] == 7 || arr[3] == 7 || arr[4] == 7 &&
// arr[0] == 8 || arr[1] == 8 || arr[2] == 8 || arr[3] == 8 || arr[4] == 8 &&
// arr[0] == 9 || arr[1] == 9 || arr[2] == 9 || arr[3] == 9 || arr[4] == 9 ||
// arr[0] == 6 || arr[1] == 6 || arr[2] == 6 || arr[3] == 6 || arr[4] == 6 &&
// arr[0] == 7 || arr[1] == 7 || arr[2] == 7 || arr[3] == 7 || arr[4] == 7 &&
// arr[0] == 8 || arr[1] == 8 || arr[2] == 8 || arr[3] == 8 || arr[4] == 8 &&
// arr[0] == 9 || arr[1] == 9 || arr[2] == 9 || arr[3] == 9 || arr[4] == 9 &&
// arr[0] == 10|| arr[1] == 10|| arr[2] == 10|| arr[3] == 10|| arr[4] == 10||
// arr[0] == 7 || arr[1] == 7 || arr[2] == 7 || arr[3] == 7 || arr[4] == 7 &&
// arr[0] == 8 || arr[1] == 8 || arr[2] == 8 || arr[3] == 8 || arr[4] == 8 &&
// arr[0] == 9 || arr[1] == 9 || arr[2] == 9 || arr[3] == 9 || arr[4] == 9 &&
// arr[0] == 10|| arr[1] == 10|| arr[2] == 10|| arr[3] == 10|| arr[4] == 10&&
// arr[0] =='J'|| arr[1] =='J'|| arr[2] =='J'|| arr[3] =='J'|| arr[4] =='J'||
// arr[0] == 8 || arr[1] == 8 || arr[2] == 8 || arr[3] == 8 || arr[4] == 8 &&
// arr[0] == 9 || arr[1] == 9 || arr[2] == 9 || arr[3] == 9 || arr[4] == 9 &&
// arr[0] == 10|| arr[1] == 10|| arr[2] == 10|| arr[3] == 10|| arr[4] == 10&&
// arr[0] =='J'|| arr[1] =='J'|| arr[2] =='J'|| arr[3] =='J'|| arr[4] =='J'&&
// arr[0] =='Q'|| arr[1] =='Q'|| arr[2] =='Q'|| arr[3] =='Q'|| arr[4] =='Q'||
// arr[0] == 9 || arr[1] == 9 || arr[2] == 9 || arr[3] == 9 || arr[4] == 9 &&
// arr[0] == 10|| arr[1] == 10|| arr[2] == 10|| arr[3] == 10|| arr[4] == 10&&
// arr[0] =='J'|| arr[1] =='J'|| arr[2] =='J'|| arr[3] =='J'|| arr[4] =='J'&&
// arr[0] =='Q'|| arr[1] =='Q'|| arr[2] =='Q'|| arr[3] =='Q'|| arr[4] =='Q'&&
// arr[0] =='K'|| arr[1] =='K'|| arr[2] =='K'|| arr[3] =='K'|| arr[4] =='K'||
// arr[0] == 10|| arr[1] == 10|| arr[2] == 10|| arr[3] == 10|| arr[4] == 10&&
// arr[0] =='J'|| arr[1] =='J'|| arr[2] =='J'|| arr[3] =='J'|| arr[4] =='J'&&
// arr[0] =='Q'|| arr[1] =='Q'|| arr[2] =='Q'|| arr[3] =='Q'|| arr[4] =='Q'&&
// arr[0] =='K'|| arr[1] =='K'|| arr[2] =='K'|| arr[3] =='K'|| arr[4] =='K'&&
// arr[0] =='A'|| arr[1] =='A'|| arr[2] =='A'|| arr[3] =='A'|| arr[4] =='A'

// ){
// console.log('straight')
// }