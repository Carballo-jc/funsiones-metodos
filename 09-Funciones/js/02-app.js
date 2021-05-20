var crear = function(){
    var array = [];
    for(var i =0; i<3;i++){
     array.push(
     function(){
         console.log(i)
     }
      )
    }
    console.log(i)
    return array;
  }
  var arr = crear()