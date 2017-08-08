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
        return true;
      } else {
        return false;
      }
    },
    enqueue: function (item) {
      if (this.queue.length === this.tail) {
        this.tail = 0;
        this.queue[this.tail] = item;
      } else {
        this.queue[this.tail++] = item;
      }
    },
    dequeue: function () {
      if (this.isEmpty()) {
        return new Error('queue underflow');
      } else {
        var x = this.queue[this.head];
        if (this.queue.length === this.head) {
          this.head = 0;
        } else {
          this.head++
        }
        return x;
      }
    }
  }

  return {
    Stack,
    Queue,
  };
})