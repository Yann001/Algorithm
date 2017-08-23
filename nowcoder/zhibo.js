define(function () {
  'use strict';
  var isValidBrackets = function (arr) {
    var len = arr.length,
      count = 0;
    if (len < 2 || len % 2 !== 0) {
      return false;
    }
    for (var i = 0; i < len; i++) {
      if (arr[i] == '(') {
        count++
      } else if (arr[i] == ')' && --count < 0) {
        return false;
      } else {
        return false;
      }
    }
    return count == 0;
  }
  return {
    isValidBrackets: isValidBrackets,
  }
});
