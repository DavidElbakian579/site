
// a cards
var D2 = {mast:'D',item:'2',number:0};
var C2 = {mast:'C',item:'2',number:0};
var H2 = {mast:'H',item:'2',number:0};
var S2 = {mast:'S',item:'2',number:0};
var D3 = {mast:'D',item:'3',number:1};
var C3 = {mast:'C',item:'3',number:1};
var H3 = {mast:'H',item:'3',number:1};
var S3 = {mast:'S',item:'3',number:1};
var D4 = {mast:'D',item:'4',number:2};
var C4 = {mast:'C',item:'4',number:2};
var H4 = {mast:'H',item:'4',number:2};
var S4 = {mast:'S',item:'4',number:2};
var D5 = {mast:'D',item:'5',number:3};
var C5 = {mast:'C',item:'5',number:3};
var H5 = {mast:'H',item:'5',number:3};
var S5 = {mast:'S',item:'5',number:3};
var D6 = {mast:'D',item:'6',number:4};
var C6 = {mast:'C',item:'6',number:4};
var H6 = {mast:'H',item:'6',number:4};
var S6 = {mast:'S',item:'6',number:4};
var D7 = {mast:'D',item:'7',number:5};
var C7 = {mast:'C',item:'7',number:5};
var H7 = {mast:'H',item:'7',number:5};
var S7 = {mast:'S',item:'7',number:5};
var D8 = {mast:'D',item:'8',number:6};
var C8 = {mast:'C',item:'8',number:6};
var H8 = {mast:'H',item:'8',number:6};
var S8 = {mast:'S',item:'8',number:6};
var D9 = {mast:'D',item:'9',number:7};
var C9 = {mast:'C',item:'9',number:7};
var H9 = {mast:'H',item:'9',number:7};
var S9 = {mast:'S',item:'9',number:7};
var D10 = {mast:'D',item:'10',number:8};
var C10 = {mast:'C',item:'10',number:8};
var H10 = {mast:'H',item:'10',number:8};
var S10 = {mast:'S',item:'10',number:8};
var DJ = {mast:'D',item:'J',number:9};
var CJ = {mast:'C',item:'J',number:9};
var HJ = {mast:'H',item:'J',number:9};
var SJ = {mast:'S',item:'J',number:9};
var DQ = {mast:'D',item:'Q',number:10};
var CQ = {mast:'C',item:'Q',number:10};
var HQ = {mast:'H',item:'Q',number:10};
var SQ = {mast:'S',item:'Q',number:10};
var DK = {mast:'D',item:'K',number:11};
var CK = {mast:'C',item:'K',number:11};
var HK = {mast:'H',item:'K',number:11};
var SK = {mast:'S',item:'K',number:11};
var DA = {mast:'D',item:'A',number:12};
var CA = {mast:'C',item:'A',number:12};
var HA = {mast:'H',item:'A',number:12};
var SA = {mast:'S',item:'A',number:12};

// a deck of cards in the form of array
let deckOfCards = [ D2, C2, H2, S2,
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
                    DA, CA, HA, SA];

// init arrays 
let player1 = [];
let player2 = [];
let player3 = [];
let player4 = [];
let player5 = [];
let board =   [];
let Winner = [];  

// method for get new card from the deck and return new array without pop cart
let getNewCard = deckOfCards => {
    let rand = Math.round(Math.random() * (deckOfCards.length-1));
    let cart = deckOfCards[rand];
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

// We gave each player two cards
distributionOfCards()
distributionOfCards()

// "In board will be 3 cards"
board.push(getNewCard(deckOfCards));
board.push(getNewCard(deckOfCards));
board.push(getNewCard(deckOfCards));

// method for concatenation player cards & board cards
let PlayerCombination = (PlayerArr,BoardArr) =>{
    let FullCombination = PlayerArr.concat(BoardArr)
    return FullCombination;
}

// call method for conatenation player cards & board cards
let pl1 = PlayerCombination(player1,board);
let pl2 = PlayerCombination(player2,board);
let pl3 = PlayerCombination(player3,board);
let pl4 = PlayerCombination(player4,board);
let pl5 = PlayerCombination(player5,board);

// console.log(pl1);
// console.log(pl2);
// console.log(pl3);
// console.log(pl4);
// console.log(pl5);

let playerArr1 = [];
let playerArr2 = [];
let playerArr3 = [];
let playerArr4 = [];
let playerArr5 = [];

// metod get property 'numbers' from player cards
let getNumber = (PA1) =>{
    let newArr = [];
    for(let el1 of PA1){
        newArr.push(el1['number']);        
    }
    return newArr.sort((prev, next) => prev - next);
}

playerArr1 = getNumber(pl1);
playerArr2 = getNumber(pl2);
playerArr3 = getNumber(pl3);
playerArr4 = getNumber(pl4);
playerArr5 = getNumber(pl5);

// metod get property 'mast' from player cards
let getMast = mastArr =>{
    let newArrMast = [];
    for(let el2 of mastArr){    
        newArrMast.push(el2['mast']);
    }
    return newArrMast.sort();
}

let playerArrMast1 = getMast(pl1);
let playerArrMast2 = getMast(pl2);
let playerArrMast3 = getMast(pl3);
let playerArrMast4 = getMast(pl4);
let playerArrMast5 = getMast(pl5);

// metod get property 'item' from player cards
let getItem = itemArr =>{
    let newArrItem = [];
    for(let el2 of itemArr){
        newArrItem.push(el2['item']);
    }
    return newArrItem;
}

let playerArrItem1 = getItem(pl1);
let playerArrItem2 = getItem(pl2);
let playerArrItem3 = getItem(pl3);
let playerArrItem4 = getItem(pl4);
let playerArrItem5 = getItem(pl5);


// metod comparing array elements (players combinations)
let compareArrEl = (arr/*mast*/,arr2/*item*/,arr3/*number*/) => {

    let HighCard = {Name:'HighCard', number:0};
    let Pair = {Name:'Pair', number:1};
    let TwoPair = {Name:'TwoPair', number:2};
    let Trips = {Name:'Trips', number:3};
    let Straight = {Name:'Straight', number:4};
    let Flush = {Name:'Flush', number:5};
    let FullHouse = {Name:'FullHouse', number:6} ;
    let Quads = {Name:'Quads', number:7};
    let StraightFlush = {Name:'StraightFlush', number:8};
    let RoyalFlush = {Name:'Royal Flush', number:9};

    if(arr[0] == arr[1] && arr[0] == arr[2] && arr[0] == arr[3] && arr[0] == arr[4]){
                                // RoyalFlush
        if ((arr2[0]== 10||arr2[1]== 10||arr2[2]== 10||arr2[3]== 10||arr2[4]== 10)&&
            (arr2[0]=='J'||arr2[1]=='J'||arr2[2]=='J'||arr2[3]=='J'||arr2[4]=='J')&&
            (arr2[0]=='Q'||arr2[1]=='Q'||arr2[2]=='Q'||arr2[3]=='Q'||arr2[4]=='Q')&&
            (arr2[0]=='K'||arr2[1]=='K'||arr2[2]=='K'||arr2[3]=='K'||arr2[4]=='K')&&
            (arr2[0]=='A'||arr2[1]=='A'||arr2[2]=='A'||arr2[3]=='A'||arr2[4]=='A')){
                console.log(RoyalFlush['Name'],RoyalFlush['number']);
                return Winner.push(RoyalFlush['Name'],RoyalFlush['number'])
            } else if(arr3[0]-arr3[1] == 1 &&   // StraightFlush
                        arr3[1]-arr3[2] == 1 &&
                        arr3[2]-arr3[3] == 1 &&
                        arr3[3]-arr3[4] == 1 ){
                            console.log(StraightFlush['Name'],StraightFlush['number'])
                    return Winner.push(StraightFlush['Name'],StraightFlush['number'])
                    } else {// Flush
                        console.log(Flush['Name'],Flush['number']);
                        return Winner.push(Flush['Name'],Flush['number'])
                    }

    } else {
                                    //One Pair combination
        if(arr2[0] == arr2[1] || arr2[1] == arr2[2] || arr2[2] == arr2[3] ||
        arr2[0] == arr2[2] || arr2[1] == arr2[3] || arr2[2] == arr2[4] ||
        arr2[0] == arr2[3] || arr2[1] == arr2[4] || arr2[3] == arr2[4] ||
        arr2[0] == arr2[4] ){
        
                                        //Set combination
        if(arr2[2] == arr2[3] && arr2[2] == arr2[4] ||
        arr2[0] == arr2[3] && arr2[0] == arr2[4] ||
        arr2[0] == arr2[1] && arr2[0] == arr2[4] ||
        arr2[0] == arr2[1] && arr2[0] == arr2[2] ||
        arr2[1] == arr2[2] && arr2[1] == arr2[3] ||
        arr2[1] == arr2[3] && arr2[1] == arr2[4] ||
        arr2[1] == arr2[2] && arr2[1] == arr2[4] ||
        arr2[0] == arr2[2] && arr2[0] == arr2[4] ||
        arr2[0] == arr2[2] && arr2[0] == arr2[3] ||
        arr2[0] == arr2[1] && arr2[0] == arr2[3]) {
        
            if (                    // FULL HOUSE combination
            arr2[0] == arr2[1] && arr2[2] == arr2[3] && arr2[2] == arr2[4] ||
            arr2[1] == arr2[2] && arr2[0] == arr2[3] && arr2[0] == arr2[4] ||
            arr2[2] == arr2[3] && arr2[0] == arr2[1] && arr2[0] == arr2[4] ||
            arr2[3] == arr2[4] && arr2[0] == arr2[1] && arr2[0] == arr2[2] ||
            arr2[4] == arr2[0] && arr2[1] == arr2[2] && arr2[1] == arr2[3] ||
            arr2[0] == arr2[2] && arr2[1] == arr2[3] && arr2[1] == arr2[4] ||
            arr2[0] == arr2[3] && arr2[1] == arr2[2] && arr2[1] == arr2[4] ||
            arr2[1] == arr2[3] && arr2[0] == arr2[2] && arr2[0] == arr2[4] ||
            arr2[1] == arr2[4] && arr2[0] == arr2[2] && arr2[0] == arr2[3] ||
            arr2[2] == arr2[4] && arr2[0] == arr2[1] && arr2[0] == arr2[3]
            ){
                console.log(FullHouse['Name'],FullHouse['number']);
                return Winner.push(FullHouse['Name'],FullHouse['number'])
            } else { 
                console.log(Trips['Name'],Trips['number'])
                return Winner.push(Trips['Name'],Trips['number'])
            }
        } else if (arr2[1] == arr2[2] && arr2[3] == arr2[4] ||        //Two Pair combination
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

                        if(                 // KARE combination
                            arr2[0] == arr2[1] && arr2[0] == arr2[2] && arr2[0] == arr2[3] ||
                            arr2[1] == arr2[2] && arr2[1] == arr2[3] && arr2[1] == arr2[4] ||
                            arr2[2] == arr2[3] && arr2[2] == arr2[4] && arr2[2] == arr2[0] ||
                            arr2[3] == arr2[4] && arr2[3] == arr2[0] && arr2[3] == arr2[1] ||
                            arr2[4] == arr2[0] && arr2[4] == arr2[1] && arr2[4] == arr2[2]
                        ){
                            console.log(Quads['Name'],Quads['number']);
                            return Winner.push(Quads['Name'],Quads['number'])
                        } else { 
                            console.log(TwoPair['Name'],TwoPair['number']);
                            return Winner.push(TwoPair['Name'],TwoPair['number'])
                        }
                    } else {
                        console.log(Pair['Name'],Pair['number']);
                        return Winner.push(Pair['Name'],Pair['number'])
                    }
    } else if( arr3[0]-arr3[1] == 1 &&      //straight combination
                arr3[1]-arr3[2] == 1 &&
                arr3[2]-arr3[3] == 1 &&
                arr3[3]-arr3[4] == 1 ){
                    console.log(Straight['Name'],Straight['number'])
                    return Winner.push(Straight['Name'],Straight['number'])
            } else {                        //HighCard combination
                    arr3.sort((prev, next) => prev - next);
                    console.log(HighCard['Name'],HighCard['number'])
                    return Winner.push(HighCard['Name'],HighCard['number'])
            }
    }
}

compareArrEl(playerArrMast1,playerArrItem1,playerArr1);
compareArrEl(playerArrMast2,playerArrItem2,playerArr2);
compareArrEl(playerArrMast3,playerArrItem3,playerArr3);
compareArrEl(playerArrMast4,playerArrItem4,playerArr4);
compareArrEl(playerArrMast5,playerArrItem5,playerArr5);

console.log(Winner);
//console.log(naturalSort(Winner))


// *** *** *** 

// let someArr = [DK, H3, S9, SQ, HJ];

// someArr.sort((prev, next) => prev.number - next.number);
// console.log(someArr);