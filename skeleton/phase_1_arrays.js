Array.prototype.uniq = function () {
  const uniqArray = []; 
  for (i = 0; i < this.length; i++ ) {
    if (!uniqArray.includes(this[i])) {
      uniqArray.push(this[i]);
    };
  };
  return uniqArray;
};


Array.prototype.twoSum = function () {
  const sum = [];

  for (i = 0; i < this.length; i++ ) {
    for (j = i + 1 ; j < this.length ; j++) {
      if (this[i] + this[j] === 0) {
        sum.push([i,j])
      };
    };
  };
  return sum;
};


Array.prototype.transpose = function () {
  const transposed = [];

  for (i=0; i<this.length; i++) {
    const temp = [];
    for (j = 0; j < this.length; j++ ){
      temp.push(this[j][i]);
    };
    transposed.push(temp);
  };

  return transposed;
};

