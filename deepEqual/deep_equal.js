/*
Write a function, deepEqual. 
It takes two values and returns true only if they are 
  (1) the same value, OR
  (2) objects with the same properties whose values are also equal when compared with a recursive call to deepEqual. 
To ﬁnd out whether to compare two things by identity (use the === operator for that) or by looking at their properties, you can use the typeof operator. 
If it produces "object" for both values, you should do a deep comparison. 
But you have to take one silly exception into account: by a historical accident, typeof null also produces "object".
*/

// The console.log line in the function helps locate where the comparison stops

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object")
    return false;
  
  var propsInA = 0, propsInB = 0;

  for (var prop in a)
    propsInA += 1;

  for (var prop in b) {
    propsInB += 1;
    if (!(prop in a) || !deepEqual(a[prop], b[prop]))
      return false;
  }

  return propsInA == propsInB;
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


