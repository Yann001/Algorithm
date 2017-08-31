define(function () {

  var bigRich = function (n) {
    var methods = [1, 2];
    for (var i = 2; i < n; i++) {
      var temp = 0;
      for (var j = i - 1; j >= 0; j--) {
        temp += methods[j];
      }
      methods[i] = temp + 1;
    }
    return methods[n - 1];
  }

  /**
   * 超链接（2017前端内推笔试编程题1）
   * @param {Array} arr1 所有链接数组
   * @param {Array} arr2 点击过的链接数组
   * @return {Array} 按字典序排序后的未点击链接数组
   */
  var links = function (arr1, arr2) {
    var map = {}, ret = [];
    var n = arr1.length, m = arr2.length;
    for (var i = 0; i < n; i++) {
      map[arr1[i]] = 1;
    }
    for (var j = 0; j < m; j++) {
      if (map[arr2[j]]) {
        delete map[arr2[j]];
      }
    }
    for (var key in map) {
      ret.push(key);
    }
    ret = ret.sort(function (a, b) {
      if (a > b) {
        return 1;
      } else if (a < b) {
        return -1;
      } else {
        return 0;
      }
    })
    return ret;
  }
  /**
   * 魔法表（2017前端内推笔试编程题2）
   * @param {Number} n1 开始度数 
   * @param {Number} n2 目标度数
   */
  var magicWatch = function (n1, n2) {
    if (n2 - n1 > 0) {
      if (n2 - n1 <= 180) {
        return n2 - n1;
      } else {
        return -(360 - (n2 - n1));
      }
    } else if (n2 - n1 < 0) {
      if (n1 - n2 <= 180) {
        return -(n1 - n2);
      } else {
        return 360 - (n1 - n2);
      }
    } else {
      return 0;
    }
  }


  return {
    bigRich,
    links,
    magicWatch,
  }
})