define(function () {
  /**
   * @desc 某餐馆有n张桌子，每张桌子有一个参数：a 可容纳的最大人数；
   * 有m批客人，每批客人有两个参数:b人数，c预计消费金额。
   * 在不允许拼桌的情况下，请实现一个算法选择其中一部分客人，
   * 使得总预计消费金额最大。
   * 输入包括m+2行。
   * 第一行两个整数n(1 <= n <= 50000),m(1 <= m <= 50000)
   * 第二行为n个参数a,即每个桌子可容纳的最大人数,以空格分隔,范围均在32位int范围内。
   * 接下来m行，每行两个参数b,c。分别表示第i批客人的人数和预计消费金额,以空格分隔,范围均在32位int范围内。
   * 输出一个整数,表示最大的总预计消费金额
   * @param {array} table 每张桌子容纳人数的数组
   * @param {object} people 客人批次对象
   */
  var restaurant = function (table, people) {
    var tNum = table.length;
    var total = 0;
    for (var i = 0; i < tNum; i++) {
      var pAmount = 0, pBatch = 0;
      for (var p in people) {
        if (people[p][0] <= table[i]) {
          if (people[p][1] > pAmount) {
            pBatch = p;
            pAmount = people[p][1];
          }
        }
      }
      delete people[pBatch];
      total += pAmount
    }
    return total;
  }

  return {
    restaurant,
  }
})

/**
 * var nm = readline();
var n = nm.split(' ')[0];
var m = nm.split(' ')[1];
var table = readline().split(' ');
var people = {};
var count = 0;
while(line = readline()) {
  people[count++] = line.split(' ');
}
var restaurant = function (table, people) {
    var tNum = table.length;
    var total = 0;
    for (var i = 0; i < tNum; i++) {
      var pAmount = 0, pBatch = 0;
      for (var p in people) {
        if (parseInt(people[p][0]) <= parseInt(table[i])) {
          if (parseInt(people[p][1]) > parseInt(pAmount)) {
            pBatch = p;
            pAmount = parseInt(people[p][1]);
          }
        }
      }
      delete people[pBatch];
      total += pAmount
    }
    return total;
}
print(restaurant(table, people));
 */
