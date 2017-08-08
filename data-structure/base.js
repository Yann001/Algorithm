define(function () {
  // 栈
  function Stack() {
    this.top = 0;
    this.stack = [];
  }
  Stack.prototype.empty = function () {
    if(this.top == 0) {
      return true;
    } else {
      return false;
    }
  }
  Stack.prototype.push = function (item) {
    this.top++;
    this.stack[this.top] = item;
  }
  Stack.prototype.pop = function () {
    if (this.empty()) {
      throw Error('stack underflow');
    } else {
      this.top--;
      return this.stack[this.top + 1]
    }
  }

  return {
    Stack,
  };
})