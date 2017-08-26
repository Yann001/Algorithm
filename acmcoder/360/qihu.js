define(function () {

  /**
   * @desc A、B两伙马贼意外地在一片沙漠中发现了一处金矿，双方都想独占金矿，
   * 但各自的实力都不足以吞下对方，经过谈判后，双方同意用一个公平的方式来处理这片金矿。
   * 处理的规则如下：他们把整个金矿分成n段，由A、B开始轮流从最左端或最右端占据一段，直到分完为止。
   * 马贼A想提前知道他们能分到多少金子，因此请你帮忙计算他们最后各自拥有多少金子?
   * （两伙马贼均会采取对己方有利的策略）
   * @param {array} array 代表每段黄金数量的数组
   * @return {array} A,B各分得的黄金数量总和
   */
  var divideGold = function (array) {
    var arr = array.slice();
    arr = arr.map(function (item) {
      return parseInt(item);
    })
    var sumA = 0, sumB = 0;
    if (arr.length % 2 == 1) {
      arr.push(0);
    }
    while (arr.length) {
      if (arr[0] >= arr[arr.length - 1]) {
        sumA += arr[0];
        arr.shift();
      } else {
        sumA += arr[arr.length - 1];
        arr.pop();
      }
      if (arr[0] > arr[arr.length - 1]) {
        sumB += arr[0];
        arr.shift();
      } else {
        sumB += arr[arr.length - 1];
        arr.pop();
      }
    }
    return [sumA, sumB];
  }

  return {
    divideGold,
  }
})

/*
var divideGold = function (array) {
    var arr = array.slice();
    arr = arr.map(function (item) {
      return parseInt(item);
    })
    var sumA = 0, sumB = 0;
    if (arr.length % 2 == 1) {
      arr.push(0);
    }
    while (arr.length) {
      if (arr[0] >= arr[arr.length - 1]) {
        sumA += arr[0];
        arr.shift();
      } else {
        sumA += arr[arr.length - 1];
        arr.pop();
      }
      if (arr[0] > arr[arr.length - 1]) {
        sumB += arr[0];
        arr.shift();
      } else {
        sumB += arr[arr.length - 1];
        arr.pop();
      }
    }
    return [sumA, sumB];
  }
var t = parseInt(read_line());

for (var z = 1; z <= t; z++){
 var n = parseInt(read_line());
 var arr = read_line().split(" ");
  arr = arr.map(function (item) {
  	return parseInt(item);
  });
  var ret = divideGold(arr);
  print("Case #"+z+": "+ret[0]+" "+ret[1]);
}
*/