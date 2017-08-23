define(function () {
  /**
   * @desc 在一个二维数组中，每一行都按照从左到右递增的顺序排序，
   * 每一列都按照从上到下递增的顺序排序。请完成一个函数，
   * 输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
   * @param {number} target 目标值
   * @param {array} array 给定二位数组
   * @return {boolean} true：存在，false：不存在
   */
  var isExist = function (target, array) {
    var m = array.length - 1, // 行
      n = array[0].length - 1; // 列
    var i = m, j = 0; // 初始位置左下角array[m][0]
    while (i >= 0) {
      while (j <= n) {
        if (target < array[i][j] && i > 0) {
          i--; // 上移
        } else if (target > array[i][j]) {
          j++; // 右移
        } else if (target == array[i][j]) {
          console.log('array[' + i + '][' + j + '] = ' + target)
          return true;
        } else {
          return false;
        }
      }
      return false;
    }
    return false;
  }
  /**
   * @desc 请实现一个函数，将一个字符串中的空格替换成“%20”。
   * 例如，当字符串为We Are Happy.
   * 则经过替换之后的字符串为We%20Are%20Happy。
   * @param {string} str 输入字符串
   * @return {string} 替换后的字符串
   */
  var replaceSpace = function (str) {
    return str.replace(/\s/g, '%20');
  }
  /*function ListNode(x){
    this.val = x;
    this.next = null;
    }*/
  /**
   * @desc 输入一个链表，从尾到头打印链表每个节点的值。
   * @param {object} head 链表头
   * @return {array} 逆序后的链表
   */
  var printListFromTailToHead = function (head) {
    var arr = [];
    while (head) {
      arr.unshift(head.val);
      head = head.next
    }
    return arr;
  }
  /**
   * @desc 把一个数组最开始的若干个元素搬到数组的末尾，
   * 我们称之为数组的旋转。 输入一个非递减排序的数组的一个旋转，
   * 输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，
   * 该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0
   * @param {array} rotateArray 旋转数组
   * @return {number} 旋转数组的最小值
   */
  var minNumberInRotateArray = function (rotateArray) {
    var len = rotateArray.length;
    if (len == 0) {
      return 0;
    }
    for (var i = 0; i < len - 1; i++) {
      if (rotateArray[i] > rotateArray[i + 1]) {
        return rotateArray[i + 1];
      }
    }
    return rotateArray[0];
  }
  /**
   * @desc 大家都知道斐波那契数列，现在要求输入一个整数n，
   * 请你输出斐波那契数列的第n项。n<=39
   * @param {number} n 需要返回的第n项
   * @return {number} 第n项的值
   */
  var fibonacci = function (n) {
    if (n == 0) {
      return 0;
    }
    var pre = 0, // 前一个值
      cur = 1; // 当前值
    for (var i = 2; i <= n; i++) { // 更新两个值
      cur += pre;
      pre = cur - pre;
    }
    return cur;
  }
  return {
    isExist,
    replaceSpace,
    minNumberInRotateArray,
    fibonacci
  }
});
