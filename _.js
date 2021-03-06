const _ = {
    clamp(number,lower,upper){
      
      let lowerClampedValue = Math.max(number,lower);
      let clampedValue = Math.min(lowerClampedValue,upper);
      return clampedValue;
    },
    inRange(number,start,end){
      if(end === undefined){
        end = start
        start = 0
      }
      if(start > end){
        let temp = end;
        end = start;
        start = temp;
      }
      let isInRange = start <= number && number < end
      return isInRange;
    },
    words(string){
      let words = string.split(' ')
      return words;
    },
    pad(string,length){
      if(length <= string.length){
        return string;
      };
      const startPaddingLength = Math.floor((length - string.length) / 2);
      const endPaddingLength = length - string.length - startPaddingLength;
      const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
  
      return paddedString;
    }
  };
  
  
  
  
  // Do not write or modify code below this line.
  module.exports = _;