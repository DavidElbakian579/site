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

let pl1 = PlayerCombination(player1,board);
let pl2 = PlayerCombination(player2,board);
let pl3 = PlayerCombination(player3,board);
let pl4 = PlayerCombination(player4,board);
let pl5 = PlayerCombination(player5,board);
//console.log(pl1)
// metod get numbers from array
let playerArr1 = [];
let playerArr2 = [];
let playerArr3 = [];
let playerArr4 = [];
let playerArr5 = [];

let getNumber = (PA1) =>{
let newArr = [];
for(let el1 of PA1){
//console.log(el['number']);
newArr.push(el1['number']);
naturalSort(newArr);
//console.log(playerArr1);
}
return newArr.reverse();
}

playerArr1 = getNumber(pl1);
console.log('playerArr1')
console.log(playerArr1);

playerArr2 = getNumber(pl2);
console.log('playerArr2')
console.log(playerArr2);

playerArr3 = getNumber(pl3);
console.log('playerArr3')
console.log(playerArr3);

playerArr4 = getNumber(pl4);
console.log('playerArr4')
console.log(playerArr4);

playerArr5 = getNumber(pl5);
console.log('playerArr5');
console.log(playerArr5);

let getMast = mastArr =>{
let newArrMast = [];
for(let el2 of mastArr){

newArrMast.push(el2['mast']);
}
return newArrMast;
}
let playerArrMast1 = [];
playerArrMast1 = getMast(pl1);
console.log('playerArrMast1')
console.log(playerArrMast1);

let playerArrMast2 = [];
playerArrMast2 = getMast(pl2);
console.log('playerArrMast2')
console.log(playerArrMast2);

let playerArrMast3 = [];
playerArrMast3 = getMast(pl3);
console.log('playerArrMast3')
console.log(playerArrMast3);

let playerArrMast4 = [];
playerArrMast4 = getMast(pl4);
console.log('playerArrMast4')
console.log(playerArrMast4);

let playerArrMast5 = [];
playerArrMast5 = getMast(pl5);
console.log('playerArrMast5')
console.log(playerArrMast5);

let getItem = itemArr =>{
let newArrItem = [];
for(let el2 of itemArr){
newArrItem.push(el2['item']);
}
return newArrItem;
}

let playerArrItem1 = [];
playerArrItem1 = getItem(pl1);
console.log('playerArrItem1')
console.log(playerArrItem1);

let playerArrItem2 = [];
playerArrItem2 = getItem(pl2);
console.log('playerArrItem2')
console.log(playerArrItem2);

let playerArrItem3 = [];
playerArrItem3 = getItem(pl3);
console.log('playerArrItem3')
console.log(playerArrItem3);

let playerArrItem4 = [];
playerArrItem4 = getItem(pl4);
console.log('playerArrItem4')
console.log(playerArrItem4);

let playerArrItem5 = [];
playerArrItem5 = getItem(pl5);
console.log('playerArrItem5')
console.log(playerArrItem5);


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
else if(a[i][0]!==b[i][0])
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


// metod сравнения комбинаций карт игроков
let compareArrEl = (arr/*mast*/,arr2/*item*/,arr3/*number*/) => {
    if(arr[0] == arr[1] && arr[0] == arr[2] && arr[0] == arr[3] && arr[0] == arr[4]){
        // RoyalFlush
        if ((arr2[0]== 10||arr2[1]== 10||arr2[2]== 10||arr2[3]== 10||arr2[4]== 10)&&
            (arr2[0]=='J'||arr2[1]=='J'||arr2[2]=='J'||arr2[3]=='J'||arr2[4]=='J')&&
            (arr2[0]=='Q'||arr2[1]=='Q'||arr2[2]=='Q'||arr2[3]=='Q'||arr2[4]=='Q')&&
            (arr2[0]=='K'||arr2[1]=='K'||arr2[2]=='K'||arr2[3]=='K'||arr2[4]=='K')&&
            (arr2[0]=='A'||arr2[1]=='A'||arr2[2]=='A'||arr2[3]=='A'||arr2[4]=='A')) {
                console.log('RoyalFlush');
            } else if(arr3[0]-arr3[1] == 1 &&
                      arr3[1]-arr3[2] == 1 &&
                      arr3[2]-arr3[3] == 1 &&
                      arr3[3]-arr3[4] == 1 ) {
                          console.log('StraightFlush');
                      } else {
                          // Flush
                          console.log('Flush');
                      }
    } 
    
    //One Pair
    if(arr2[0] == arr2[1] || arr2[1] == arr2[2] || arr2[2] == arr2[3] ||
       arr2[0] == arr2[2] || arr2[1] == arr2[3] || arr2[2] == arr2[4] ||
       arr2[0] == arr2[4] ) {           
           //Two Pair
        if(arr2[1] == arr2[2] && arr2[3] == arr2[4] ||
            arr2[1] == arr2[4] && arr2[3] == arr2[2] ||
            arr2[1] == arr2[3] && arr2[2] == arr2[4] ||
            arr2[0] == arr2[2] && arr2[3] == arr2[4] ||
            arr2[0] == arr2[2] && arr2[3] == arr2[4] ||
            arr2[0] == arr2[4] && arr2[2] == arr2[3] ||
            arr2[0] == arr2[4] && arr2[3] == arr2[1] ||
            arr2[0] == arr2[3] && arr2[1] == arr2[4] ||
            arr2[1] == arr2[0] && arr2[3] == arr2[4] ||
            arr2[1] == arr2[0] && arr2[2] == arr2[4] ||
            arr2[0] == arr2[4] && arr2[1] == arr2[2] ||
            arr2[0] == arr2[2] && arr2[1] == arr2[4] ||
            arr2[0] == arr2[2] && arr2[1] == arr2[3] ||
            arr2[0] == arr2[3] && arr2[2] == arr2[1] ||
            arr2[0] == arr2[1] && arr2[2] == arr2[3]) {
                console.log('Two Pair')
            }

        //Set
        if (arr2[2] == arr2[3] && arr2[2] == arr2[4] ||
            arr2[0] == arr2[3] && arr2[0] == arr2[4] ||
            arr2[0] == arr2[1] && arr2[0] == arr2[4] ||
            arr2[0] == arr2[1] && arr2[0] == arr2[2] ||
            arr2[1] == arr2[2] && arr2[1] == arr2[3] ||
            arr2[1] == arr2[3] && arr2[1] == arr2[4] ||
            arr2[1] == arr2[2] && arr2[1] == arr2[4] ||
            arr2[0] == arr2[2] && arr2[0] == arr2[4] ||
            arr2[0] == arr2[2] && arr2[0] == arr2[3] ||
            arr2[0] == arr2[1] && arr2[0] == arr2[3]) { 
                console.log('Set') 
            }
        // KARE combination    
        if(arr2[0] == arr2[1] && arr2[0] == arr2[2] && arr2[0] == arr2[3] ||
           arr2[1] == arr2[2] && arr2[1] == arr2[3] && arr2[1] == arr2[4] ||
           arr2[2] == arr2[3] && arr2[2] == arr2[4] && arr2[2] == arr2[0] ||
           arr2[3] == arr2[4] && arr2[3] == arr2[0] && arr2[3] == arr2[1] ||
           arr2[4] == arr2[0] && arr2[4] == arr2[1] && arr2[4] == arr2[2]) {
            console.log('KARE combination');
            console.log('7 points')
           }
        // FULL HOUSE combination
        if (arr2[0] == arr2[1] && arr2[2] == arr2[3] && arr2[2] == arr2[4] ||
            arr2[1] == arr2[2] && arr2[0] == arr2[3] && arr2[0] == arr2[4] ||
            arr2[2] == arr2[3] && arr2[0] == arr2[1] && arr2[0] == arr2[4] ||
            arr2[3] == arr2[4] && arr2[0] == arr2[1] && arr2[0] == arr2[2] ||
            arr2[4] == arr2[0] && arr2[1] == arr2[2] && arr2[1] == arr2[3] ||
            arr2[0] == arr2[2] && arr2[1] == arr2[3] && arr2[1] == arr2[4] ||
            arr2[0] == arr2[3] && arr2[1] == arr2[2] && arr2[1] == arr2[4] ||
            arr2[1] == arr2[3] && arr2[0] == arr2[2] && arr2[0] == arr2[4] ||
            arr2[1] == arr2[4] && arr2[0] == arr2[2] && arr2[0] == arr2[3] ||
            arr2[2] == arr2[4] && arr2[0] == arr2[1] && arr2[0] == arr2[3] ) {
                console.log('FULL HOUSE');
            }

        console.log('One Pair');
       } else if( arr3[0]-arr3[1] == 1 && //straight
                  arr3[1]-arr3[2] == 1 &&
                  arr3[2]-arr3[3] == 1 &&
                  arr3[3]-arr3[4] == 1 ) {
                    console.log('straight')
                  } else { //HighCard
                    naturalSort(arr3);
                    console.log(arr3[4])
                  }                             
}


compareArrEl(playerArrMast1,playerArrItem1,playerArr1);
compareArrEl(playerArrMast2,playerArrItem2,playerArr2);
compareArrEl(playerArrMast3,playerArrItem3,playerArr3);
compareArrEl(playerArrMast4,playerArrItem4,playerArr4);
compareArrEl(playerArrMast5,playerArrItem5,playerArr5);




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