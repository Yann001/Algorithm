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

  var recursionReverseStack = function (stack, size) {
    if (size == 0) {
      return stack[size];
    } else {
      return recursionReverseStack(stack, --size);
    }
  }
  return {
    isValidBrackets,
    recursionReverseStack,
  }
});
