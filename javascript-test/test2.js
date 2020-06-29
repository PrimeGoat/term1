function persistence(num) {
   depth = 0;
   
   return checkPers(num);
   
   return depth;
}

function checkPers(num) {
  if(num.toString().length !== 1) {
    let product = 1;
    for(num of num.toString().split('')) {
      product *= num;
    }
    return 1 + checkPers(product);
  }
}

persistence(1623);