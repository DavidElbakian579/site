// The Poker Game

let player1 = [];
let player2 = [];
let player3 = [];
let player4 = [];
let player5 = [];
let board = [];

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

// carteri master 
let diamond = 'D'; 
let spade = 'S'; 
let heart = 'H'; 
let club = 'C';

// cart points for 'HighCard' combination 
let two = {Name:'2', number:0}; 
let three = {Name:'3', number:1}; 
let four = {Name:'4', number:2}; 
let five = {Name:'5', number:3}; 
let six = {Name:'6', number:4}; 
let seven = {Name:'7', number:5}; 
let eight = {Name:'8', number:6}; 
let nine = {Name:'9', number:7}; 
let ten = {Name:'10', number:8}; 
let jalet = {Name:'J', number:9}; 
let queen = {Name:'Q', number:10}; 
let king = {Name:'K', number:11}; 
let tuz = {Name:'A',number:12};

// combinations 
let HighCard = {Name:'HighCard', number:0}; 
let Pair= {Name:'Pair', number:1}; 
let TwoPair= {Name:'TwoPair', number:2}; 
let Trips= {Name:'Trips', number:3}; 
let Straight= {Name:'Straight', number:4}; 
let Flush = {Name:'Flush', number:5}; 
let FullHouse={Name:'FullHouse', number:6} ; 
let Quads= {Name:'Quads', number:7}; 
let StraightFlush= {Name:'StraightFlush', number:8}; 
let RoyalFlush= {Name:'Royal Flush', number:9};

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
// razdacha po 2 karty kajdomu igroku
distributionOfCards()
distributionOfCards()


// "Sexanin piti skzbuc 3 qart lini"
board.push(getNewCard(deckOfCards));
board.push(getNewCard(deckOfCards));
board.push(getNewCard(deckOfCards));

// metod for concatenation player cards with board cards
let PlayerCombination = (PlayerArr,BoardArr) =>{
	let FullCombination = PlayerArr.concat(BoardArr)
    // console.log("FullCombination")
    // console.log(FullCombination)
}

PlayerCombination(player1,board)
PlayerCombination(player2,board)
PlayerCombination(player3,board)
PlayerCombination(player4,board)
PlayerCombination(player5,board)

let array5 = [1, 1, 2, 2, 2];
let compareArrEl = arr => {
    //for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i])
        if( // KARE combination
            arr[0] == arr[1] && arr[0] == arr[2] && arr[0] == arr[3] ||
            arr[1] == arr[2] && arr[1] == arr[3] && arr[1] == arr[4] ||
            arr[2] == arr[3] && arr[2] == arr[4] && arr[2] == arr[0] ||
            arr[3] == arr[4] && arr[3] == arr[0] && arr[3] == arr[1] ||
            arr[4] == arr[0] && arr[4] == arr[1] && arr[4] == arr[2]
        ){
            console.log('KARE combination');
            console.log('7 points')
        } else if ( // FULL HOUSE combination
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
        } else {
            console.log('there is no combination');
        }    
    }
//}
compareArrEl(array5);
