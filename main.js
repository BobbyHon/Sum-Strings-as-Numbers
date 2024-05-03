function sumStrings(a,b) { 
    let newNum = []
    let remainder = 0
    
    function removeBeginningZero(str){
      for (let i = 0; i < str.length; i++){
        if (str[i] != '0')
          {
            return str.slice(i)
          }
      }
      return '0'
    }
    //Remove any leading zero that user wants to add to remove unnecessary padding
    a = removeBeginningZero(a)
    b = removeBeginningZero(b)
    //Adding zeros back to make both length the same that is necessary for addition
    if (a.length > b.length){
      b = b.padStart(a.length, '0')
    }
    else{
      a = a.padStart(b.length, '0')
    }
    //Adding it like how kids are taught to add numbers, right to left
    for(let k = a.length - 1; k > -1; k--){
      let num = Number(a[k]) + Number(b[k]) + remainder
      remainder = 0
      
      if (num > 9)
        {
          num -= 10
          remainder = 1
        }
      newNum.unshift(num)
    }
    //Add 1 if there still a remainder left
    if (remainder) newNum.unshift(1)
  
    return newNum.join('')
  }