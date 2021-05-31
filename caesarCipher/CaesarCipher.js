const caesarCipher = (string,key) => {
    alphabet = 'abcdefghijklmnopqrstuvwxyz'
    upperAlphabet = alphabet.toUpperCase()
    encryptedString = ''
    
    const shiftLetter = (index,alphabetSet) => {
     
      for(let j = 0;j<key;j++){
        index = index + 1
        if (index == 26){
          index = 0
        }
    }
    encryptedString += alphabetSet[index]
  }
    
    for (let i=0;i<string.length;i++){
      indexLower = alphabet.indexOf(string[i])
      indexUpper = upperAlphabet.indexOf(string[i])
      if (indexLower != -1 && indexUpper == -1){
        shiftLetter(indexLower,alphabet)
      }else if (indexUpper != -1 && indexLower == -1){
        shiftLetter(indexUpper,upperAlphabet)
      }else{
        encryptedString += string[i]
      }
    }   
    return encryptedString
  }
module.exports = caesarCipher