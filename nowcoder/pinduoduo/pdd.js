define(function () {
  var mostOneLine =  function (arr) {
    var m = arr.length;
    var n = arr[0].length;
    var minIdx = [0, n - 1];
    for (var i = 0; i < m; i++) {
      for (var j = n - 1; j > 0; j--) {
        if (arr[i][j]) {
          if (j == minIdx[1]) {
            minIdx = minIdx.concat([i,j]);
          } else if (j < minIdx[1]) {
            minIdx = [i,j];
          }
        } else {
          i++;
          if (i >= m) {
            break;
          }
        }
      }
    }
    return minIdx;
  }
  var isValidBrackets = function (str) {
    var arr = str.split('');
    var len = arr.length;
    var big = 0, mid = 0, small = 0;
    for (var i = 0; i < len; i++) {
      switch (arr[i]) {
        case '{':
          if (!mid && !small) {
            big++;
          } else {
            return false;
          }
          break;
        case '[':
          if (!small) {
            mid++;
          } else {
            return false;
          }
          break;
        case '(':
          small++;
          break;
        case '}':
          if (!mid && !small) {
            big--;
          }
          if (big < 0) {
            return false;
          }
          break;
        case ']':
          if (!small) {
            mid--;
          }
          if (mid < 0) {
            return false;
          }
          break;
        case ')':
          small--;
          if (small < 0) {
            return false;
          }
          break;
        default:
          break;
      }
    }
    if (!big && !mid && !small) {
      return true;
    } else {
      return false;
    }
  }

  return {
    isValidBrackets,
    mostOneLine,
  }
})
