define(function () {
  // 栈
  function Stack() {
    this.top = 0;
    this.stack = [];
  }
  Stack.prototype = {
    isEmpty: function () {
      if (this.top === 0) {
        return true;
      } else {
        return false;
      }
    },
    push: function (item) {
      this.stack[this.top++] = item;
    },
    pop: function () {
      if (this.isEmpty()) {
        return new Error('stack underflow');
      } else {
        return this.stack[this.top--]
      }
    }
  }
  // 队列
  function Queue() {
    this.head = 0;
    this.tail = 0;
    this.queue = [];
  }
  Queue.prototype = {
    isEmpty: function () {
      if (this.head === this.tail) {
        this.head = this.tail = 0;
        return true;
      } else {
        return false;
      }
    },
    enqueue: function (item) {
      this.queue[this.tail++] = item;
    },
    dequeue: function () {
      if (this.isEmpty()) {
        return new Error('queue underflow');
      } else {
        return this.queue[this.head++];
      }
    }
  }
  // 链表
  function LinkList() {
    this.key = [];
    this.prev = [];
    this.next = [];
  }
  LinkList.prototype = {
    search: function () {

    },
    insert: function () {

    },
    delete: function () {

    }
  }

  return {
    Stack,
    Queue,
  };
})