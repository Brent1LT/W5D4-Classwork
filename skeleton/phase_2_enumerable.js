function callback(el) {
 return el + '!';
};

Array.prototype.myEach = function(method) {
  for(i=0; i<this.length; i++) {
    method(this[i]);
  };
  return this;
};

// Array.prototype.myMap = function() {
//   const results = [];
//   return Array.prototype.myEach(method)
// };


const change = function(el) {
  return 2 * el;
}



// const newFunc = function(el) {
  //   results.push(method(el))
  // }
  // debugger
  // const myFunc = function(el) {
    //   results.push(method(el))
    // }
    
    
    
    // def newFunc(el)
    //   results.push(prc.call(el))
    // end
    
    
    
    // this.myEach(
      //   results.push(method(el))
      // )
      
      Array.prototype.myMap = function(method) {
        const results = [];
        // debugger
        this.myEach(function (el) {
          results.push(method(el));
        })
        return results;
      };
      

function callback_reduce(acc, el) {
  return acc + el;
};
  

Array.prototype.myReduce = function(method, acc) {
  // const accum = acc; 
  
  if (acc === undefined) {
    acc = this[0]
    new_arr = this.slice(1)
  } else {
    acc = acc
    new_arr = this
  }

  new_arr.myEach(function(el) {
   acc = method(acc, el);
  });

  return acc;
};

