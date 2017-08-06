define(function () {

  /**
   * @description 和最大的子数组：
   * 在一个包含负数的数组中，求出和最大的子数组，
   * 使用分治策略的方法求解
   * @param {array} array 
   */
  var findMaxSumSubArr = function (array) {
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

  /**
   * @description 钢条切割问题：
   * 给出一段总长度为n的钢条，长度为i的钢条的价格为p[i]，
   * 求出分割后能使收益最大的方案。
   * （注：如果长度为n的钢条价格p[n]足够大，则完全不需要分割）
   */
  var cutSteel = {
    q: -Infinity,
    // 方法一：一般递归
    method1: function (prices, n) {
      if (n == 0) {
        return 0;
      }
      this.q = -Infinity;
      for (var i = 1; i < n; i++) {
        this.q = Math.max(this.q, prices[i] + this.method1(prices, n - i));
      }
      return this.q;
    },
    // 方法二：自顶向下递归
    method2: function (prices, n) {
      var r = [];
      for (var i = 0; i < n; i++) {
        r[i] = -Infinity;
      }
      var q = -Infinity;
      return fn(prices, n, r);
      function fn(prices, n, r) {
        if (r[n] >= 0) {
          return r[n];
        }
        if (n == 0) {
          q = 0;
        } else {
          q = -Infinity;
          for (var j = 1; j <= n; j++) {
            q = Math.max(q, fn(prices, n - j, r));
          }
        }
        r[n] = q;
        return q;
      }
    },
    // 方法三：自底向上递归
    method3: function (prices, n) {
      var r = [0];
      for (var i = 1; i <= n; i++) {
        var q = -Infinity;
        for (var j = 1; j <= i; j++) {
          q = Math.max(q, prices[j] + r[i - j])
        }
        r[i] = q;
      }
      return r[n];
    },
    // 方法四：方法三的扩展，不仅返回最大收益r[i]，也返回最优解对应的第一段钢条的切割长度s[i]
    method4: function (prices, n) {
      var r = [0], s = [0], temp = 0;
      for (var i = 1; i <= n; i++) {
        var q = -Infinity;
        for (var j = 1; j <= i; j++) {
          if (q < (temp = prices[j] + r[i - j])) {
            q = temp;
            s[i] = j;
          }
        }
        r[i] = q;
      }
      return [r, s];
    }

  }

  /**
   * @description 最长公共子序列问题：
   * 给出两个序列X=[x1, x2, ..., xm]和Y[y1, y2, ..., yn]
   * 求最长公共子序列C = [ci, ..., cj]
   */
  var LCS = {
    /**
     * 求公共子序列长度
     * @param {array} X 序列X
     * @param {array} Y 序列Y
     * @return {array} [0]：表中数值为对应最长子序列长度，[1]：子问题最优解指向
     */
    LCSLength: function (X, Y) {
      var m = X.length,
        n = Y.length;
      var c = [[]], b = [[]];
      // 初始化[m+1][n+1]的二维数组，且第一行第一列值为0
      for (var i = 0; i <= m; i++) {
        c[i] = [0];
        b[i] = [0];
      }
      for (var j = 1; j <= n; j++) {
        c[0][j] = 0;
        b[0][j] = 0;
      }
      // 递推求后续每一项值
      for (var i = 1; i <= m; i++) {
        for (var j = 1; j <= n; j++) {
          if (X[i] == Y[j]) {
            c[i][j] = c[i - 1][j - 1] + 1;
            b[i][j] = '↖'; // 子问题最优解指向
          } else if (c[i - 1][j] >= c[i][j - 1]) {
            c[i][j] = c[i - 1][j];
            b[i][j] = '←'; // 子问题最优解指向
          } else {
            c[i][j] = c[i][j - 1];
            b[i][j] = '↑'; // 子问题最优解指向
          }
        }
      }
      return [c, b];
    },
    getLCS: function (b, X, i, j) {
      var ret = [];
      if (i == 0 || j == 0) {
        return;
      }
      if (b[i][j] == '↖') {
        this.getLCS(b, X, i - 1, j - 1);
        console.log(X[i]);
        ret.push(X[i]);
      } else if (b[i][j] == '↑') {
        this.getLCS(b, X, i, j - 1);
      } else {
        this.getLCS(b, X, i - 1, j);
      }
      return ret;
    }
  }

  return {
    findMaxSumSubArr: findMaxSumSubArr,
    cutSteel: cutSteel,
    LCS: LCS,
  }
})