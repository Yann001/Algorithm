define(function () {
  //冒泡排序
  var bubble = function (array) {
    //深拷贝数组，不影响原数组
    var arr = array.slice();
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          arr[j] = [arr[j + 1], arr[j + 1] = arr[j]][0];
        }
      }
    }
    return arr;
  };
  //插入排序
  //舞动的排序算法--插入排序http://v.youku.com/v_show/id_XMjU4NTY5MzEy.html
  var insertion = function (array) {
    var arr = array.slice();
    var len = arr.length;
    var temp, i, j;
    for (i = 0; i < len - 1; i++) {
      temp = arr[i + 1];
      j = i;
      while (j >= 0 && temp < arr[j]) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = temp;
    }
    return arr;
  };
  //二分插入排序，插入排序的改进
  var binaryInsert = function (array) {
    var arr = array.slice();
    var len = arr.length;
    var key, left, right, middle;
    for (var i = 1; i < len; i++) {
      key = arr[i];
      left = 0;
      right = len - 1
      while (left < right) {
        middle = Math.floor((left + right) / 2);
        if (arr[middle] > key) {
          right = middle - 1;
        } else {
          left = middle + 1;
        }
      }
      for ( var j = i - 1; j >= left; j--) {
        arr[j + 1] = arr[j];
      }
      arr[left] = key;
    }
    return arr;
  }
  //直接选择排序
  var directSelect = function (array) {
    var arr = array.slice();
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      for (var j = i; j < len; j++) {
        if (arr[j] < arr[i]) {
          arr[i] = [arr[j], arr[j] = arr[i]][0];
        }
      }
    }
    return arr;
  };
  return {
    bubble: bubble,
    insertion: insertion,
    binaryInsert: binaryInsert,
    directSelect: directSelect
  }
});
