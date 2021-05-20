
function BinarioADecimal1(num) {
    //tu codigo aca
   return num.split("").reverse().reduce(function (x, y, i) {
        return y === "1" ? x + Math.pow(2, i) : x;
      }, 0);
  }
   BinarioADecimal1('111')
  
  function binario(num){
    let binarioArray = [];
    while(num > 1){
      binarioArray.push(num%2)
      num = Math.floor(num/2)
    }
    binarioArray.push(num)
    return parseInt(binarioArray.reverse().join(''))
  }
   binario(20)
  
  
  function BinarioADecimal(num) {
  var array = num.split('');
  var num = 0;
  for(var i = 0; i < array.length; i ++) {
      num = num + parseInt(array[i]) * Math.pow(2, array.length - 1 - i);
    }
    return num;
  }
  BinarioADecimal('10')
  
  function DecimalABinario(num) {
    var binario = [];
    while(num >= 1) {
      var resto = num % 2;
      binario.unshift(resto);
      num = (num - resto) / 2;
    }
    return binario.join('');
  }
  DecimalABinario(10)