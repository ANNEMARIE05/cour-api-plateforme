function Alphabet(num) {
    
    let Output = [];
  
    let pair = [2,4,6,8,10,12,14,16,18,20,22,24,26]
    let Impair = [1,3,5,7,9,11,13,15,17,19,21,23,25]
  
  
    function display(type,...rest){

        let Alph = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

        const [new1,new2,...over] = rest;
        let Output  = [];

        switch (type) {
            case 'add':
                Output = [Alph[num1-1] + Alph[num2-1] , Alph[num2-1] + Alph[num1-1]]
                break;
            case 'multi' :
                let firstPart = '' ;
                let secondPart = '';

                for(let i = 0;i < num1 ; i++)firstPart += [Alph[num2-1]];
                for(let i = 0; i< num2 ; i++)secondPart += [Alph[num1-1]];
            default:
                break;
        }
    }

    if (num%2 == 0){
  
        let isOnPair = pair.find((a)=> a == num)
        let filters = isOnPair ? pair.filter((log)=> log <= isOnPair) : pair
  
        for (let i = 0; i < filters.length; i++) {
          let first = filters[i]
           for (let j = 0; j < filters.length; j++){
              let second = filters[j]
                        
              if (first * second === num ) {
                
              }
           }
        }
    
    }

}