let array5 = [5,5,5,5,5];
									let array6 = [3,2,2,2,2]
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

let randomArray = [8,9,10,"J","K"];

 

 
// ************************************************************************************* 
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
        return (a[i][1]&&b[i][1]) ?        // Are we comparing numbers?
               (a[i][0]-b[i][0]) :         // Then diff them.
               (a[i][2]<b[i][2]) ? -1 : 1; // Otherwise, lexicographic sort
    }
    return 0;
  });
  // Restore the original values into the array
  for (var i=ary.length;i--;)
 ary[i] = ary[i][0];
  return ary;
}
// *******************************************************************************************


let compareArrEl = (arr2) => {
    	//RoyalFlush
        // if(arr[0] == arr[1] && arr[0] == arr[2] && arr[0] == arr[3] && arr[0] == arr[4]) {
        //     if (arr2[0][1] == array16[0][1] && arr2[2][3] == array16[2][3] && arr2[4] == array16[4]) {
        //     	console.log('RoyalFlush');
          //StraightFlush
                   if(arr2[0][1] == array7[0][1]  && arr2[2][3] == array7[2][3]   && arr2[4] == array7[4]  ||
            		  arr2[0][1] == array8[0][1]  && arr2[2][3] == array8[2][3]   && arr2[4] == array8[4]  ||
            		  arr2[0][1] == array9[0][1]  && arr2[2][3] == array9[2][3]   && arr2[4] == array9[4]  || 
            		  arr2[0][1] == array10[0][1] && arr2[2][3] == array10[2][3]  && arr2[4] == array10[4] ||
            		  arr2[0][1] == array11[0][1] && arr2 [2][3] == array11[2][3] && arr2[4] == array11[4] || 
            		  arr2[0][1] == array12[0][1] && arr2[2][3] == array12[2][3]  && arr2[4] == array12[4] || 
            		  arr2[0][1] == array13[0][1] && arr2[2][3] == array13[2][3]  && arr2[4] == array13[4] || 
            		  arr2[0][1] == array14[0][1] && arr2[2][3] == array14[2][3]  && arr2[4] == array14[4] ||
            		  arr2[0][1] == array15[0][1] && arr2[2][3] == array15[2][3]  && arr2[4] == array15[4]
			         ){
            	console.log('Straight');
                } else {
            	console.log('There is no Straight');
                }
            }
        // }

naturalSort(array7);
console.log(array7);
compareArrEl(array7);
