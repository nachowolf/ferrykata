const Colors = require('../options/color.js');
module.exports = function(){

    function numberFilter(input){
        let number = Number(input);
        if(isNaN(number) === true){
        return 'declined'
        }
        else{
         return number
        }
    }

     function colorFilter(input){
         let carColor = input.toLowerCase()
         for(let color in Colors){
             if(color === carColor){
                 return color
             }
         }
         return 'declined'
     }

    return{
        numberFilter,
        colorFilter
    }
}


