define(function () {
  /**
   * @desc 设有n个正整数，将他们连接成一排，组成一个最大的多位整数。
   * 如:n=3时，3个整数13,312,343,连成的最大整数为34331213。
   * 如:n=4时,4个整数7,13,4,246连接成的最大整数为7424613。
   * @param {array} array 输入数组
   * @return {string} 连成的最大数
   */
  var numberStr = function (array) {
    var len = array.length;
    // 用插入法对数组按指定规则进行排序（注意并非简单字典序）
    for (var i = 1; i < len; i++) {
      var key = array[i];
      for (var j = i - 1; j >= 0; j--) {
        if (key.toString() + array[j].toString() <= array[j].toString() + key.toString()) {
          break;
        } else {
          array[j + 1] = array[j]
        }
      }
      array[j + 1] = key;
    }
    return array.join('');
  }
  /**
   * @desc 给定一个句子（只包含字母和空格）， 将句子中的单词位置反转，
   * 单词用空格分割, 单词之间只有一个空格，前后没有空格。 
   * 比如： （1） “hello xiao mi”-> “mi xiao hello”
   * @param {string} str 给定字符串
   * @return {string} 反转后的字符串
   */
  var reverseSentence = function (str) {
    var arr = str.split(' ');
    var len = arr.length,
      mid = Math.floor(len / 2);
    // 将数组分成两半，依次交换对应值
    for (var i = 0; i < mid; i++) {
      arr[i] = [arr[len - 1 - i], arr[len - 1 - i] = arr[i]][0];
    }
    return arr.join(' ');
  }
  /**
   * @desc 春天是鲜花的季节，水仙花就是其中最迷人的代表，
   * 数学上有个水仙花数，他是这样定义的： “水仙花数”是指一个三位数，
   * 它的各位数字的立方和等于其本身，比如：153=1^3+5^3+3^3。 
   * 现在要求输出所有在m和n范围内的水仙花数
   * @param {number} m 起始范围
   * @param {number} n 结束范围
   */
  var shuiXianHua = function (m, n) {
    var ret = [];
    for (var i = m; i <= n; i++) {
      var h = Math.floor(i / 100),
        t = Math.floor((i - h * 100) / 10),
        o = i % 10;
      if (h * h * h + t * t * t + o * o * o == i) {
        ret.push(i)
      }
    }
    if (ret.length) {
      return ret.join(' ');
    } else {
      return 'no';
    }
  }
  /**
   * @desc 袋鼠过河
   * @param {number} number 河的宽度
   * @param {array} array 输入弹簧柱子数组
   */
  var jumpRiver = function (n, array) {
    // 末尾加一个虚拟弹簧
    array.push(0);
    var len = array.length;
    var step = [0];
    for (var i = 1; i <= n; i++) {
      step[i] = Infinity;
    }
    for (var i = 1; i < len; i++) {
      for (var j = i - 1; j >= 0; j--) {
        if (array[j] >= i - j) {
          step[i] = Math.min(step[i], step[j] + 1);
        }
      }
    }
    return step[len - 1] == Infinity ? -1 : step[len - 1];
  }

  return {
    numberStr,
    reverseSentence,
    shuiXianHua,
    jumpRiver
  }
})