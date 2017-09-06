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
   * 字符串的最长有效括号长度
   * @param {String} str 输入字符串
   * @return {Number} 最长有效长度
   */
  var longestValidBrackets = function (str) {
    var
      arr = str.split(''),
      len = arr.length,
      dp = [],
      pre = 0;
      res = 0;
    if (len < 2) {
      return 0;
    }
    for (var i = 0; i < len; i++) {
      dp[i] = 0;
    }
    for (var i = 1; i < len; i++) {
      if (arr[i] == ')') {
        pre = i - dp[i - 1] -1;
        if (pre >= 0 && arr[pre] == '(') {
          dp[i] = dp[i - 1] + 2 + (pre > 0 ? dp[pre - 1] : 0);
        }
      }
      res = Math.max(res, dp[i]);
    }
    return res;
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
  // 交换钱币问题
  var changeMoney = {
    forceRecursion: function (denomination, aim) {
      var arr = denomination.slice();
      var len = arr.length;
      if (!arr.length || aim < 0) {
        return 0;
      }
      return recursion1(arr, 0, aim);

      function recursion1(arr, index, aim) {
        var ret = 0;
        if (index == arr.length) {
          ret = aim == 0 ? 1 : 0;
        } else {
          for (var i = 0; arr[index] * i <= aim; i++) {
            ret += recursion1(arr, index + 1, aim - arr[index] * i);
          }
        }
        return ret;
      }
    },
    memoryRecursion: function (denomination, aim) {
      var arr = denomination.slice();
      var len = arr.length;
      if (!arr.length || aim < 0) {
        return 0;
      }
      var map = [
        []
      ];
      for (var i = 0; i < len + 1; i++) {
        map[i] = [0];
      }
      for (var j = 0; j < aim + 1; j++) {
        map[0][j] = 0;
      }
      return recursion2(arr, 0, aim, map);

      function recursion2(arr, index, aim) {
        var ret = 0;
        if (index == arr.length) {
          ret = aim == 0 ? 1 : 0;
        } else {
          var mapValue = 0;
          for (var i = 0; arr[index] * i <= aim; i++) {
            mapValue = map[index + 1][aim - arr[index] * i];
            if (mapValue) {
              ret += mapValue == -1 ? 0 : mapValue;
            } else {
              ret += recursion2(arr, index + 1, aim - arr[index] * i, map);
            }
          }
        }
        map[index][aim] = ret == 0 ? -1 : ret;
        return ret;
      }
    },
    dynamicProgram: function (denomination, aim) {
      var arr = denomination.slice();
      var len = arr.length;
      if (!arr.length || aim < 0) {
        return 0;
      }
      var dp = [
        []
      ];
      for (var i = 0; i < len + 1; i++) {
        dp[i] = [1];
      }
      for (var j = 1; arr[0] * j <= aim; j++) {
        dp[0][arr[0] * j] = 1;
      }
      var num = 0;
      for (var i = 1; i < len; i++) {
        for (var j = 1; j <= aim; j++) {
          num = 0;
          for (var k = 0; j - arr[i] * k >= 0; k++) {
            num += dp[i - 1][j - arr[i] * k];
          }
          dp[i][j] = num;
        }
      }
      return dp[len - 1][aim];
    },
    dynamicProgram1: function (denomination, aim) {
      var arr = denomination.slice();
      var len = arr.length;
      if (!arr.length || aim < 0) {
        return 0;
      }
      var dp = [
        []
      ];
      for (var i = 0; i < len + 1; i++) {
        dp[i] = [1];
      }
      for (var j = 1; arr[0] * j <= aim; j++) {
        dp[0][arr[0] * j] = 1;
      }
      for (var i = 1; i < len; i++) {
        for (var j = 1; j <= aim; j++) {
          dp[i][j] = dp[i - 1][j];
          dp[i][j] += j - arr[i] >= 0 ? dp[i][j - arr[i]] : 0;
        }
      }
      return dp[len - 1][aim];
    },
    dynamicProgram2: function (denomination, aim) {
      var arr = denomination.slice();
      var len = arr.length;
      if (!arr.length || aim < 0) {
        return 0;
      }
      var dp = [];
      for (var j = 0; arr[0] * j <= aim; j++) {
        dp[arr[0] * j] = 1;
      }
      for (var i = 1; i < len; i++) {
        for (var j = 1; j <= aim; j++) {
          dp[j] += j - arr[i] >= 0 ? dp[j - arr[i]] : 0;
        }
      }
      return dp[aim];
    }
  }
  // 最长递增子序列问题
  var LIS = {
    dynamicProgram: function (array) {
      var arr = array.slice();
      if (!arr.length) {
        return [];
      }
      var dp = getDP(arr);
      return getLIS(arr, dp);

      function getDP(arr) {
        var len = arr.length;
        var dp = [];
        for (var i = 0; i < len; i++) {
          dp[i] = 1;
          for (var j = 0; j < i; j++) {
            if (arr[i] > arr[j]) {
              dp[i] = Math.max(dp[i], dp[j] + 1);
            }
          }
        }
        return dp;
      }

      function getLIS(arr, dp) {
        var len = 0;
        var index = 0;
        for (var i = 0; i < dp.length; i++) {
          if (dp[i] > len) {
            len = dp[i];
            index = i;
          }
        }
        var lis = [];
        lis[--len] = arr[index];
        for (var i = index; i >= 0; i--) {
          if (arr[i] < arr[index] && dp[i] == dp[index] - 1) {
            lis[--len] = arr[i];
            index = i;
          }
        }
        return lis;
      }
    }
  }
  // 添加最少任意个字符是字符串变回文（dp[0, len-1]）
  var addSomeBecomePalindrome = function (str) {
    var dp = getDp(str);
    return getPalindrome(str, dp);

    function getDp(str) {
      var
        len = str.length,
        dp = [];
      for (var i = 0; i < len; i++) {
        var temp = [];
        for (var j = 0; j < len; j++) {
          temp[j] = 0;
        }
        dp.push(temp);
      }
      for (var j = 1; j < len; j++) {
        dp[j - 1][j] = str[j - 1] == str[j] ? 0 : 1;
        for (var i = j - 2; i >= 0; i--) {
          if (str[i] == str[j]) {
            dp[i][j] = dp[i + 1][j - 1];
          } else {
            dp[i][j] = Math.min(dp[i + 1][j], dp[i][j - 1]) + 1;
          }
        }
      }
      return dp;
    }

    function getPalindrome(str, dp) {
      var len = str.length;
      if (len < 2) {
        return str;
      }
      var
        res = [],
        i = 0,
        j = len - 1,
        resl = 0,
        resr = len - 1;
      while (i <= j) {
        if (str[i] == str[j]) {
          res[resl++] = str[i++];
          res[resr--] = str[j--];
        } else if (dp[i][j - 1] < dp[i + 1][j]) {
          res[resl++] = str[j];
          res[resr--] = str[j--];
        } else {
          res[resl++] = str[i];
          res[resr--] = str[i++];
        }
      }
      return res.join('');
    }
  }
  /**
   * @desc 字符串的最长无重复的字符串
   * @param {String} str 输入字符串
   * @return {Number} 最长无重复字符串长度
   */
  var maxUniqueStr = function (str) {
    var
      len = str.length,
      map = {},
      pre = -1,
      cur = 0,
      res = 0;
    if (!len) {
      return 0;
    }
    for (var i = 0; i < 256; i++) {
      map[i] = -1;
    }
    for (var i = 0; i < len; i++) {
      pre = Math.max(pre, map[str[i].charCodeAt()]);
      cur = i - pre;
      res = Math.max(res, cur);
      map[str[i].charCodeAt()] = i;
    }
    return res;
  }
  /**
   * @desc 将一个字符串切割成回文子串的最小分割数
   * @param {String} str 输入字符串
   * @return {Number} 最小切割次数
   */
  var minCutBecomePalindrome = function (str) {
    var
      arr = str.split(''),
      len = arr.length,
      dp = [],
      isp = [[]];
    for (var i = 0; i < len; i++) {
      dp[i] = 0;
    }
    for (var i = 0; i <= len; i++) {
      var temp = [];
      for (var j = 0; j <= len; j++) {
        temp[j] = false;
      }
      isp.push(temp);
    }
    dp[len] = -1;
    for (var i = len - 1; i >= 0; i--) {
      dp[i] = Infinity;
      for(var j = i; j < len; j++) {
        if (arr[i] == arr[j] && (j - i < 2 || isp[i + 1][j - 1])) {
          isp[i][j] = true;
          dp[i] = Math.min(dp[i], dp[j + 1] + 1);
        }
      }
    }
    return dp[0];
  }

  return {
    isValidBrackets,
    longestValidBrackets,
    recursionReverseStack,
    smallSumOfArray,
    maxRectArea,
    changeMoney,
    LIS,
    addSomeBecomePalindrome,
    maxUniqueStr,
    minCutBecomePalindrome,
  }
});