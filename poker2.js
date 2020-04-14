let D2 = {mast:'D',item:'2',number:0};
let C2 = {mast:'C',item:'2',number:0};
let H2 = {mast:'H',item:'2',number:0};
let S2 = {mast:'S',item:'2',number:0};
let D3 = {mast:'D',item:'3',number:1};
let C3 = {mast:'C',item:'3',number:1};
let H3 = {mast:'H',item:'3',number:1};
let S3 = {mast:'S',item:'3',number:1};
let D4 = {mast:'D',item:'4',number:2};
let C4 = {mast:'C',item:'4',number:2};
let H4 = {mast:'H',item:'4',number:2};
let S4 = {mast:'S',item:'4',number:2};
let D5 = {mast:'D',item:'5',number:3};
let C5 = {mast:'C',item:'5',number:3};
let H5 = {mast:'H',item:'5',number:3};
let S5 = {mast:'S',item:'5',number:3};
let D6 = {mast:'D',item:'6',number:4};
let C6 = {mast:'C',item:'6',number:4};
let H6 = {mast:'H',item:'6',number:4};
let S6 = {mast:'S',item:'6',number:4};
let D7 = {mast:'D',item:'7',number:5};
let C7 = {mast:'C',item:'7',number:5};
let H7 = {mast:'H',item:'7',number:5};
let S7 = {mast:'S',item:'7',number:5};
let D8 = {mast:'D',item:'8',number:6};
let C8 = {mast:'C',item:'8',number:6};
let H8 = {mast:'H',item:'8',number:6};
let S8 = {mast:'S',item:'8',number:6};
let D9 = {mast:'D',item:'9',number:7};
let C9 = {mast:'C',item:'9',number:7};
let H9 = {mast:'H',item:'9',number:7};
let S9 = {mast:'S',item:'9',number:7};
let D10 = {mast:'D',item:'10',number:8};
let C10 = {mast:'C',item:'10',number:8};
let H10 = {mast:'H',item:'10',number:8};
let S10 = {mast:'S',item:'10',number:8};
let DJ = {mast:'D',item:'J',number:9};
let CJ = {mast:'C',item:'J',number:9};
let HJ = {mast:'H',item:'J',number:9};
let SJ = {mast:'S',item:'J',number:9};
let DQ = {mast:'D',item:'Q',number:10};
let CQ = {mast:'C',item:'Q',number:10};
let HQ = {mast:'H',item:'Q',number:10};
let SQ = {mast:'S',item:'Q',number:10};
let DK = {mast:'D',item:'K',number:11};
let CK = {mast:'C',item:'K',number:11};
let HK = {mast:'H',item:'K',number:11};
let SK = {mast:'S',item:'K',number:11};
let DA = {mast:'D',item:'A',number:12};
let CA = {mast:'C',item:'A',number:12};
let HA = {mast:'H',item:'A',number:12};
let SA = {mast:'S',item:'A',number:12};

let player1 = [];
let player2 = [];
let player3 = [];
let player4 = [];
let player5 = [];
let board = [];

let deckOfCards = [
D2, C2, H2, S2,
D3, C3, H3, S3,
D4, C4, H4, S4,
D5, C5, H5, S5,
D6, C6, H6, S6,
D7, C7, H7, S7,
D8, C8, H8, S8,
D9, C9, H9, S9,
D10,C10,H10,S10,
DJ, CJ, HJ, SJ,
DQ, CQ, HQ, SQ,
DK, CK, HK, SK,
DA, CA, HA, SA
];

//console.log(deckOfCards); // for debug

// method for get new card from the deck and return new array without pop cart
let getNewCard = deckOfCards => {
let rand = Math.round(Math.random() * (deckOfCards.length-1));
let cart = deckOfCards[rand];
//console.log(cart); // for debug
deckOfCards.splice(rand, 1);
return cart;
};


// metod razdachi kart igrokam - 1 krug po 1 karte kajdomu
let distributionOfCards = () => {
player1.push(getNewCard(deckOfCards));
player2.push(getNewCard(deckOfCards));
player3.push(getNewCard(deckOfCards));
player4.push(getNewCard(deckOfCards));
player5.push(getNewCard(deckOfCards));
};
// We gave the players two cards
distributionOfCards()
distributionOfCards()


// "In board will be 3 cards"
board.push(getNewCard(deckOfCards));
board.push(getNewCard(deckOfCards));
board.push(getNewCard(deckOfCards));

let PlayerCombination = (PlayerArr,BoardArr) =>{
let FullCombination = PlayerArr.concat(BoardArr)
//console.log(FullCombination)
return FullCombination;
}

let pl1 = PlayerCombination(player1, board);
// for(let el of pl1){
// 	console.log(el['number']);
// }

let pl2 = PlayerCombination(player2,board);
// for(let el of pl2){
// 	console.log(el['number']);
// }

let pl3 = PlayerCombination(player3,board);
let pl4 = PlayerCombination(player4,board);
let pl5 = PlayerCombination(player5,board);

let someArr = [];

// metod get numbers from array
let getNumber = playerArr => {
    for(let el of playerArr){
        //console.log(el['number']);
         someArr.push(el['number']);
         naturalSort(someArr);
    }
    return someArr.reverse();
}

console.log('someArr');
console.log(getNumber(pl1));
console.log(getNumber(pl2));
console.log(someArr);


//PlayerCombination(player1,board)







let array5 = [5,5,5,5,5];
let array6 = [8,9,10,'J','A']
let array7 = [2,3,4,5,"A"]
let array8 = [2,3,4,5,6]
let array9 = [3,4,5,6,7]
let array10 = [4,5,6,7,8]
let array11 = [5,6,7,8,9]
let array12 = [6,7,8,9,10]
let array13 = [7,8,9,10,11]
let array14 = [8,9,10,"J","Q"]
let array15 = [9,10,"J","K","Q"]
let array16 = [10,"A","J","K","Q"]



// ************************************************************************
function naturalSort(ary, fullNumbers) {
var re = fullNumbers ? /[\d\.\-]+|\D+/g : /\d+|\D+/g;

// Perform a Schwartzian transform, breaking each entry into pieces first
for (var i=ary.length;i--;)
ary[i] = [ary[i]].concat((ary[i]+"").match(re).map(function(s){
return isNaN(s) ? [s,false,s] : [s*1,true,s];
}));

// Perform a cascading sort down the pieces
ary.sort(function(a,b){
var al = a.length, bl=b.length, e=al>bl?al:bl;
for (var i=1;i<e;++i) {
// Sort "a" before "a1"
if (i>=al) return -1; else if (i>=bl) return 1;
else if (a[i][0]!==b[i][0])
return (a[i][1]&&b[i][1]) ? // Are we comparing numbers?
(a[i][0]-b[i][0]) : // Then diff them.
(a[i][2]<b[i][2]) ? -1 : 1; // Otherwise, lexicographic sort
}
return 0;
});
// Restore the original values into the array
for (var i=ary.length;i--;) ary[i] = ary[i][0];
return ary;
}
// **********************************************************



//let newArr = pl1.sort((a.number, b.number) => a.number - b.number);
// console.log(array6==array7)
// console.log(array6==array8)
// console.log(array6==array9)
// console.log(array6==array10)
// console.log(array6==array11)
// console.log(array6==array12)
// console.log(array6==array13)
// console.log(array6==array14)
// console.log(array6==array15)



let compareArrEl = (arr,arr2) => {

    // Flush 
if(arr[0] == arr[1] && arr[0] == arr[2] && arr[0] == arr[3] && arr[0] == arr[4]){ 
    
    // RoyalFlush   
    if (arr2[0][1]==array16[0][1] && arr2[2][3]==array16[2][3]&&arr2[4]==array16[4]) {
        console.log('RoyalFlush');
    }     
    // StraightFlush
    else if((arr2[0][1]==array7[0][1] && arr2[2][3]==array7[2][3]&&arr2[4]==array7[4]) ||
(arr2[0][1]==array8[0][1] && arr2[2][3]==array8[2][3]&&arr2[4]==array8[4]) ||
(arr2[0][1]==array9[0][1] && arr2[2][3]==array9[2][3]&&arr2[4]==array9[4]) ||
(arr2[0][1]==array10[0][1] && arr2[2][3]==array10[2][3]&&arr2[4]==array10[4])||
(arr2[0][1]==array11[0][1] && arr2[2][3]==array11[2][3]&&arr2[4]==array11[4])||
(arr2[0][1]==array12[0][1] && arr2[2][3]==array12[2][3]&&arr2[4]==array12[4])||
(arr2[0][1]==array13[0][1] && arr2[2][3]==array13[2][3]&&arr2[4]==array13[4])||
(arr2[0][1]==array14[0][1] && arr2[2][3]==array14[2][3]&&arr2[4]==array14[4])||
(arr2[0][1]==array15[0][1] && arr2[2][3]==array15[2][3]&&arr2[4]==array15[4])
){
    console.log('StraightFlush')
    } else {
        console.log('Flush');
    }  

    
} 


//Set
else if ( arr[2] == arr[3] && arr[2] == arr[4] ||
arr[0] == arr[3] && arr[0] == arr[4] ||
arr[0] == arr[1] && arr[0] == arr[4] ||
arr[0] == arr[1] && arr[0] == arr[2] ||
arr[1] == arr[2] && arr[1] == arr[3] ||
arr[1] == arr[3] && arr[1] == arr[4] ||
arr[1] == arr[2] && arr[1] == arr[4] ||
arr[0] == arr[2] && arr[0] == arr[4] ||
arr[0] == arr[2] && arr[0] == arr[3] ||
arr[0] == arr[1] && arr[0] == arr[3]) {
console.log('Set')

}


//straight
else if( (arr2[0][1]==array7[0][1] && arr2[2][3]==array7[2][3] &&arr2[4]==array7[4]) ||
(arr2[0][1]==array8[0][1] && arr2[2][3]==array8[2][3] &&arr2[4]==array8[4]) ||
(arr2[0][1]==array9[0][1] && arr2[2][3]==array9[2][3] &&arr2[4]==array9[4]) ||
(arr2[0][1]==array10[0][1] && arr2[2][3]==array10[2][3]&&arr2[4]==array10[4])||
(arr2[0][1]==array11[0][1] && arr2[2][3]==array11[2][3]&&arr2[4]==array11[4])||
(arr2[0][1]==array12[0][1] && arr2[2][3]==array12[2][3]&&arr2[4]==array12[4])||
(arr2[0][1]==array13[0][1] && arr2[2][3]==array13[2][3]&&arr2[4]==array13[4])||
(arr2[0][1]==array14[0][1] && arr2[2][3]==array14[2][3]&&arr2[4]==array14[4])||
(arr2[0][1]==array15[0][1] && arr2[2][3]==array15[2][3]&&arr2[4]==array15[4])||
(arr2[0][1]==array16[0][1] && arr2[2][3]==array16[2][3]&&arr2[4]==array16[4])


){
console.log('straight')
}


else if( // KARE combination
arr[0] == arr[1] && arr[0] == arr[2] && arr[0] == arr[3] ||
arr[1] == arr[2] && arr[1] == arr[3] && arr[1] == arr[4] ||
arr[2] == arr[3] && arr[2] == arr[4] && arr[2] == arr[0] ||
arr[3] == arr[4] && arr[3] == arr[0] && arr[3] == arr[1] ||
arr[4] == arr[0] && arr[4] == arr[1] && arr[4] == arr[2]
){
console.log('KARE combination');
console.log('7 points')
}


else if ( // FULL HOUSE combination
arr[0] == arr[1] && arr[2] == arr[3] && arr[2] == arr[4] ||
arr[1] == arr[2] && arr[0] == arr[3] && arr[0] == arr[4] ||
arr[2] == arr[3] && arr[0] == arr[1] && arr[0] == arr[4] ||
arr[3] == arr[4] && arr[0] == arr[1] && arr[0] == arr[2] ||
arr[4] == arr[0] && arr[1] == arr[2] && arr[1] == arr[3] ||
arr[0] == arr[2] && arr[1] == arr[3] && arr[1] == arr[4] ||
arr[0] == arr[3] && arr[1] == arr[2] && arr[1] == arr[4] ||
arr[1] == arr[3] && arr[0] == arr[2] && arr[0] == arr[4] ||
arr[1] == arr[4] && arr[0] == arr[2] && arr[0] == arr[3] ||
arr[2] == arr[4] && arr[0] == arr[1] && arr[0] == arr[3]
){
console.log('FULL HOUSE');
}

//Two Pair
else if(arr[1]==arr[2]&&arr[3]==arr[4] ||
arr[1]==arr[4]&&arr[3]==arr[2] ||
arr[1]==arr[3]&&arr[2]==arr[4] ||
arr[0]==arr[2]&&arr[3]==arr[4] ||
arr[0]==arr[2]&&arr[3]==arr[4] ||
arr[0]==arr[4]&&arr[2]==arr[3] ||
arr[0]==arr[4]&&arr[3]==arr[1] ||
arr[0]==arr[3]&&arr[1]==arr[4] ||
arr[1]==arr[0]&&arr[3]==arr[4] ||
arr[1]==arr[0]&&arr[2]==arr[4] ||
arr[0]==arr[4]&&arr[1]==arr[2] ||
arr[0]==arr[2]&&arr[1]==arr[4] ||
arr[0]==arr[2]&&arr[1]==arr[3] ||
arr[0]==arr[3]&&arr[2]==arr[1] ||
arr[0]==arr[1]&&arr[2]==arr[3]) {
console.log('Two Pair');
}

//One Pair
else if(arr[3] == arr[4] || arr[2] == arr[4] || arr[1] == arr[4] ||
arr[0] == arr[4] || arr[0] == arr[3] || arr[0] == arr[2] ||
arr[0] == arr[1] || arr[1] == arr[3] || arr[2] == arr[3] ||
arr[1] == arr[2] ){
console.log('One Pair');
}

else {
console.log('chi exni')
}
}





compareArrEl(array5,array6);



// let HighCard = {Name:'HighCard', number:0};
// let Pair= {Name:'Pair', number:1};
// let TwoPair= {Name:'TwoPair', number:2};
// let Trips= {Name:'Trips', number:3};
// let Straight= {Name:'Straight', number:4};
// let Flush = {Name:'Flush', number:5};
// let FullHouse ={Name:'FullHouse', number:6} ;
// let Quads = {Name:'Quads', number:7};
// let StraightFlush= {Name:'StraightFlush', number:8};
// let RoyalFlush= {Name:'Royal Flush', number:9};