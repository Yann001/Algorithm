define(function () {
  /**
   * 已知一个字符串都是由左括号和右括号组成，判断该字符串是否是有效的括号组合。
   * 例如：
   * 有效组合：()(),(()),(()())
   * 无效组合：(,()),((),()())
   * @param {Array} arr 要判断的字符串数组
   * @return {Boolean} true: 合法，false：不合法
   */
  var isValidBrackets = function (arr) {
    var len = arr.length,
      count = 0;
    if (len < 2 || len % 2 !== 0) {
      return false;
    }
    for (var i = 0; i < len; i++) {
      if (arr[i] == '(') {
        count++;
      } else if (arr[i] == ')' && --count < 0) {
        return false;
      } else {
        return false;
      }
    }
    return count == 0;
  }
  /**
   * 只用递归实现栈的逆序
   * @param {Array} stack 栈数组
   * @param {Number} size 栈大小
   */
  var recursionReverseStack = function (stack, size) {
    var ret = [];
    if (size == 0) {
      ret.push(stack[size]);
    } else {
      ret.push(recursionReverseStack(stack, --size));
    }
    return ret;
  }
  /**
   * @desc 数组小和的定义如下：
   * 例如：数组s=[1,3,5,2,4,6]，在s[0]左边小于s[0]的数的和为0，
   * 在s[1]左边小于或等于s[1]的数和为1，在s[2]左边小于或等于s[2]的数和为1+3，
   * 依次在s[4]左边小于或等于s[4]的数和为1+3+2，
   * 在s[5]左边小于或等于s[5]的数和为1+3+5+2+4+6
   * 所以s的小和为0+1+4+1+6+15=27。
   * 给定一个数组s，实现函数安徽s的小和
   * @param {Array} arr 输入数组
   * @return {Number} 输入数组的小和
   */
  var smallSumOfArray = function (arr) {
    var len = arr.length;
    var smallSum = 0;
    for (var i = 1; i < len; i++) {
      var sum = 0;
      for (var j = i - 1; j >= 0; j--) {
        if (arr[j] < arr[i]) {
          sum += arr[j];
        }
      }
      smallSum += sum;
    }
    return smallSum;
  }
  /**
   * 求直方图中矩形最大面积
   * @param {Array} height 直方图高度数组
   * @return {Number} 面积
   */
  var maxRectArea = function (height) {
    var len = height.length;
    if (!len) {
      return 0;
    }
    var maxArea = 0;
    var stack = [];
    for (var i = 0; i < len; i++) {
      while (stack.length && height[i] <= height[stack[stack.length - 1]]) {
        var j = stack.pop();
        var k = !stack.length ? -1 : stack[stack.length - 1];
        var curArea = (i - k - 1) * height[j];
        maxArea = Math.max(maxArea, curArea);
      }
      stack.push(i);
    }
    while (stack.length) {
      var j = stack.pop();
      var k = !stack.length ? -1 : stack[stack.length - 1];
      var curArea = (len - k - 1) * height[j];
      maxArea = Math.max(maxArea, curArea);
    }
    return maxArea
  }

  var changeMoney = {
    forceRecursion: function (denomination, aim) {
      var arr = denomination.slice();
      var len = arr.length;
      if (!arr.length || aim < 0) {
        return 0;
      }
      return recursion(arr, 0, aim);
      function recursion(arr, index, aim) {
        var ret = 0;
        if (index == arr.length) {
          ret = aim == 0 ? 1 : 0;
        } else {
          for (var i = 0; arr[index] * i <= aim; i++) {
            ret += recursion(arr, index + 1, aim - arr[index] * i);
          }
        }
        return ret;
      }
    },
    memoryRecursion: function (denomination, aim) {
      
    }
  }

  return {
    isValidBrackets,
    recursionReverseStack,
    smallSumOfArray,
    maxRectArea,
    changeMoney,
  }
});
