class Stack {
  constructor() {
    this.stack = [];
  }

  push(_data) {
    this.stack.push(_data);
    console.log(`${_data} has been pushed to the stack`);
  }

  pop() {
    let e = this.stack.pop();
    console.log(`${e} has been poped out`);
  }

  peek() {
    console.log(this.stack[this.stack.length - 1]);
  }

  length() {
    console.log(`lenght of the stack is  ${this.stack.length}`);
  }

  print() {
    this.stack.forEach((e) => {
      console.log(e);
    });
  }
}

let s = new Stack();
s.push(1);
s.push(2);
s.push(3);

s.pop();
s.pop();

s.peek();
s.length();

s.print();

s.push(10);
s.push(40);
s.push(20);

s.print();
