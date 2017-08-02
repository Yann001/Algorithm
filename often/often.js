define(function () {

  /**
   * 使用分治策略的方法求解
   * @param {array} array 
   */
  var findMaxSubArr = function (array) {
    var arr = array.slice();
    return f1(arr, 0, arr.length - 1);
    function f1(arr, left, right) {
      if (left == right) {
        return [left, right, arr[left]]
      } else {
        var mid = Math.floor((left + right) / 2);
        var lResult = f1(arr, left, mid);
        var rResult = f1(arr, mid + 1, right);
        var cResult = f2(arr, left, mid, right);
        var result = lResult[2] > rResult[2] ? lResult : rResult;
        return result[2] > cResult[2] ? result : cResult;
      }
    }
    // 最大子数组跨过中点的情况
    function f2(arr, left, mid, right) {
      var lSum = -Infinity,
        rSum = -Infinity,
        sum = 0,
        lIndex = mid,
        rIndex = mid;
      for (var i = mid; i >= left; i--) {
        sum += arr[i];
        if (sum > lSum) {
          lSum = sum;
          lIndex = i;
        }
      }
      sum = 0;
      for (var j = mid + 1; j <= right; j++) {
        sum += arr[j];
        if (sum > rSum) {
          rSum = sum;
          rIndex = j;
        }
      }
      return [lIndex, rIndex, lSum + rSum]
    }
  }
  return {
    findMaxSubArr: findMaxSubArr,
  }
})