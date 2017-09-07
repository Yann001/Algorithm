define(function () {
  // 冒泡排序
  var bubble = function (array) {
    //深拷贝数组，不影响原数组
    var arr = array.slice();
    var len = arr.length;
    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len - i - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          arr[j] = [arr[j + 1], arr[j + 1] = arr[j]][0];
        }
      }
    }
    return arr;
  };
  // 鸡尾酒排序（双向冒泡排序）
  var cocktail = function (array) {
    var arr = array.slice();
    var len = arr.length;
    var tail = len - 1;
    for (var i = 0; i < tail;) {
      //将最小数排到最前面
      for (var j = tail; j > i; j--) {
        if (arr[j] < arr[j - 1]) {
          arr[j] = [arr[j - 1], arr[j - 1] = arr[j]][0];
        }
      }
      i++;
      //将最大数排到最后面
      for (var k = i; k < tail; k++) {
        if (arr[k] > arr[k + 1]) {
          arr[k] = [arr[k + 1], arr[k + 1] = arr[k]][0];
        }
      }
      tail--;
    }
    return arr;
  };
  // 舞动的排序算法--插入排序http://v.youku.com/v_show/id_XMjU4NTY5MzEy.html
  /**
   * 插入排序，minT：a*n+b O(n)，maxT：a*n^2+b*n+c O(n^2)
   * @param {array} array 
   */
  var insertion = function (array) {
    var arr = array.slice();
    var len = arr.length;
    for (var i = 1; i < len; i++) {
      var j = i - 1, key = arr[i];
      // 在已排序的数组中找一个合适的位置（一个比待插入的数小的值）
      while (j >= 0 && arr[j] > key) {
        // 如果值比key大，则将其后移一位
        arr[j + 1] = arr[j];
        j--;
      }
      // 将key放置在正确位置
      arr[j + 1] = key;
    }
    return arr;
  };
  // 插入排序优化（合并搜索与数据后移，同时进行数据交换）
  var insertion1 = function (array) {
    var arr = array.slice();
    var len = arr.length;
    for (var i = 1; i < len; i++) {
      // 在已排序的数组中找一个合适的位置（一个比待插入的数小的值）
      for (var j = i - 1; j >= 0 && arr[j] > arr[j + 1]; j--) {
        arr[j] = [arr[j + 1], arr[j + 1] = arr[j]][0];
      }
    }
    return arr;
  };
  // 二分插入排序，插入排序的改进
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
      for (var j = i - 1; j >= left; j--) {
        arr[j + 1] = arr[j];
      }
      arr[left] = key;
    }
    return arr;
  };
  // 希尔排序，也称递减增量排序算法，因DL．Shell于1959年提出而得名，是插入排序的一种高速而稳定的改进版本。
  var shell = function (array) {
    var arr = array.slice();
    var len = arr.length;
    for (var d = Math.floor(len / 2); d > 0; d = Math.floor(d / 2)) {
      for (var k = 0; k < d; k++) {
        //对每组进行插入排序
        for (var i = k + d; i < len - d; i += d) {
          var temp = arr[i];
          var j = i - d;
          while (j >= 0 && temp < arr[j]) {
            arr[j + d] = arr[j];
            j--;
          }
          arr[j + d] = temp;
        }
      }
    }
    return arr;
  };
  // 选择排序
  var selection = function (array) {
    var arr = array.slice();
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) {
      var minIdx = i;
      //未排序序列中找出最小值
      for (var j = i + 1; j < len; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      //最小值不等于当前值，则交换
      if (minIdx != i) {
        arr[i] = [arr[minIdx], arr[minIdx] = arr[i]][0];
      }
    }
    return arr;
  };
  // 快速排序
  var quick = function (array) {
    var arr = array.slice();
    var len = arr.length;
    sort(0, len - 1);
    return arr;
    function sort(left, right) {
      var i = left;
      var j = right;
      if (left < right) {
        var base = arr[i];
        do {
          // 从右向左找第一个小于基数值的位置j
          while (arr[j] >= base && i < j) {
            j--;
          }
          // 找到了，位置为j
          if (i < j) {
            // 将第j个元素置于左端并重置i
            arr[i] = arr[j];
            i++;
          }
          // 从左向右找第一个大于基数值的位置i
          while (arr[i] < base && i < j) {
            i++;
          }
          // 找到了，位置为i
          if (i < j) {
            // 将第i个元素置于右端并重置j
            arr[j] = arr[i];
            j--;
          }
        } while (i != j)
        // 将基准值放入它最终的位置，本次划分结束
        arr[i] = base;
        // 递归左半部
        sort(left, i - 1);
        // 递归右半部
        sort(i + 1, right);
      }
    }
  };
  var quick = function (array) {
    var arr = array.slice();
    var len = arr.length;
    quickSort(arr, 0, len - 1);
    return arr;
    function quickSort(arr, left, right) {
      if (left < right) {
        var base = partion(arr, left, right);
        quickSort(arr, left, base - 1);
        quickSort(arr, base + 1, right);
      }
    }
    function partion(arr, left, right) {
      var
        base = arr[right],
        i = left - 1;
      for (var j = left; j < right; j++) {
        if (arr[j] <= base) {
          i++;
          arr[i] = [arr[j], arr[j] = arr[i]][0];
        }
      }
      arr[i + 1] = [arr[right], arr[right] = arr[i + 1]][0];
      return i + 1;
    }
  }
  // 堆排序
  var heap = function (array) {
    var arr = array.slice();
    var len = arr.length;
    buildHeap(arr, len);
    for (var i = len - 1; i >= 0; i--) {
      // 堆的删除
      arr[0] = [arr[i], arr[i] = arr[0]][0];
      heapAdjust(arr, 0, i);
    }
    return arr;
    // 根据数组建立最大堆
    function buildHeap(arr, heapSize) {
      for (var i = (arr.length - 2) / 2; i >= 0; i--) {
        heapAdjust(arr, i, heapSize);
      }
    }
    // 对以节点i为根节点的子树做堆调整
    function heapAdjust(arr, i, heapSize) {
      var left = getLeftChild(i);
      var right = getRightChild(i);
      var maxIdx;
      if (left < heapSize && arr[left] > arr[i]) {
        maxIdx = left;
      } else {
        maxIdx = i;
      }
      if (right < heapSize && arr[right] > arr[maxIdx]) {
        maxIdx = right;
      }
      if (maxIdx != i) {
        arr[maxIdx] = [arr[i], arr[i] = arr[maxIdx]][0];
        heapAdjust(arr, maxIdx, heapSize);
      }
    }
    // 返回左孩子节点索引
    function getLeftChild(idx) {
      return 2 * idx + 1;
    }
    // 返回右孩子节点索引
    function getRightChild(idx) {
      return 2 * idx + 2;
    }
    // 返回父节点索引
    function getParent(idx) {
      return Math.floor((idx - 1) / 2);
    }
  };
  // 归并排序
  var merge = function (array) {
    var arr = array.slice();
    mergeSort(arr, 0, arr.length - 1);
    return arr;
    function mergeSort(arr, first, last) {
      if (first < last) {
        var mid = Math.floor((first + last) / 2);
        mergeSort(arr, first, mid);
        mergeSort(arr, mid + 1, last);
        mergeArray(arr, first, mid, last);
      }
    }
    // function mergeArray(arr, first, mid, last) {
    //   var i = first, j = mid + 1;
    //   var m = mid, l = last;
    //   var temp = [], k = 0;
    //   while (i <= m && j <= l) {
    //     if (arr[i] <= arr[j]) {
    //       temp[k++] = arr[i++];
    //     } else {
    //       temp[k++] = arr[j++]
    //     }
    //   }
    //   while (i <= m) {
    //     temp[k++] = arr[i++];
    //   }
    //   while (j <= l) {
    //     temp[k++] = arr[j++];
    //   }
    //   for (i = 0; i < k; i++) {
    //     arr[first + i] = temp[i];
    //   }
    // }
    function mergeArray(arr, first, mid, last) {
      var
        llen = mid - first + 1,
        rlen = last - mid,
        L = [],
        R = [];
      for (var i = 0; i < llen; i++) {
        L[i] = arr[first + i];
      }
      for (var j = 0; j < rlen; j++) {
        R[j] = arr[mid + 1 + j];
      }
      L[llen] = Infinity;
      R[rlen] = Infinity;
      var i = 0, j = 0;
      for (var k = first; k <= last; k++) {
        if (L[i] <= R[j]) {
          arr[k] = L[i++];
        } else {
          arr[k] = R[j++];
        }
      }
    }
  };
  return {
    bubble: bubble,
    cocktail: cocktail,
    insertion: insertion,
    binaryInsert: binaryInsert,
    shell: shell,
    selection: selection,
    quick: quick,
    heap: heap,
    merge, merge
  };
});
