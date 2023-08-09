// function multiple(nombre){
//     let chaine = ""

//     if(nombre < 0){
//         return -1
//     }else{
//         for(let i = 1; i <= nombre; i++) {
//             if(i%2==0 && i%5==0){
//                 return chaine+=i + ","
//             }
//         }
//     }
//     return chaine
// }

// console.log(multiple(70))


// function pos(tb) {
//     let tab = tb.filter(i => i > 0 && i% 3 == 0)
//     console.log(tb)
//     return tab
// }

// console.log(pos([2,4,3,9,8,6,5]))



// function carac(carac1) {
//     let tab = carac1.filter((e) => e.length <= 7);
  
//     return tab.map((e) => {
//       let output = " ";
//       for (let i = e.length - 1; i >= 0; i--) {
//         output += e[i];
//       }
//       return output;
//     });
// }
// console.log(carac(["bonjour", "petit"]));





// function deuxtab(arr,arr1){
//     return arr.filter(e=> arr1.includes(e))
// }
// console.log(deuxtab(["salut"],["salut"]));


function returnTableau(t1,t2){
    let arr = [];
    let tabLengther = tab1.length >  tab2.length ? [tab1,tab2] : [tab2,tab1] ;

    for(let i = 0 ; i < tabLengther[0].length ; i++){
        if(!tabLengther[0].includes(i)){
            arr.push(tabLengther[0][i]);
        }
        
    }
    for(let i = 0 ; i <tabLengther[1].length ; i++){
        if(!tabLengther[1].includes(i)){
            arr.push(tabLengther[1][i]);
    }
    // return Array.from(new Set(arr))
    return [...new Set(arr)]
    
  }

}
console.log(returnTableau([[2,5],[2,6]]))