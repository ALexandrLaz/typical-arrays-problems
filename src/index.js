
exports.min = function min (array) {
  if(array != undefined && array.length != 0){
    return Math.min(...array);
  }else{
    return 0;
  }
}

exports.max = function max (array) {
  if(array != undefined && array.length != 0){
    return Math.max(...array);
  }else{
    return 0;
  }
}

exports.avg = function avg (array) {
  if(array != undefined && array.length != 0){
    let sum = 0;
    let count = 0;
    for(let i = 0; i < array.length; i++){
      sum+= array[i];
      count++;
    }
    return sum/count;
  }else{
    return 0;
  }
}
