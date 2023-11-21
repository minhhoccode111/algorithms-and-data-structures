// THE STACK DATA STRUCTURE

// A stack is an ordered collection of items that follows the LIFO (Last In First Out) principle. The addition of new items or the removal of existing items takes place at the same end. The end of the stack is known as the top, and the opposite side is known as the base. The newest elements are near the top, and the oldest elements are near the base.

// We hve several examples of stacks in real life, for example, a pile of books, or a stack of trays in a cafeteria or food court

//A stack is also used by compilers in programming languages, and by computer memory to store variables and method calls.

// CREATING A STACK

(() => {
  function Stack() {
    let items = [];

    // Pushing elements to the stack
    this.push = function (element) {
      items.push(element);
    };

    // Popping elements from the stack
    this.pop = function () {
      return items.pop();
    };

    // Peeking element from the top of the stack
    this.peek = function () {
      return items[items.length - 1];
    };

    // Verifying if the stack is empty
    this.isEmpty = function () {
      return items.length === 0;
    };

    // Getting the size of the stack
    this.size = function () {
      return items.length;
    };

    // Clearing the stack
    this.clear = function () {
      items = [];
    };

    // printing the stack
    this.print = function () {
      console.log(items.toString());
    };
  }

  // USING THE NEW STACK
  let stack = new Stack();

  // check empty
  console.log(stack.isEmpty()); // output true

  // add elements
  stack.push(0);
  stack.push(1);
  stack.push(12);

  // peek
  console.log(stack.peek()); // output 12

  // print
  stack.print(); // 0,1,12
})();

// CREATING A STACK WITH ES6 CLASSES AND WEAKMAP

(() => {
  // use IIFE to encapsulate private items
  const Stack = (() => {
    const items = new WeakMap();

    class Stack {
      constructor() {
        items.set(this, []);
      }

      // push
      push(element) {
        let s = items.get(this);
        s.push(element);
      }

      // pop
      pop() {
        let s = items.get(this);
        let r = s.pop();
        return r;
      }

      // Peeking element from the top of the stack
      peek() {
        return items[items.length - 1];
      }

      // Verifying if the stack is empty
      isEmpty() {
        let s = items.get(this);
        return s.length === 0;
      }

      // Getting the size of the stack
      size() {
        let s = items.get(this);
        return s.length;
      }

      // Clearing the stack
      clear() {
        let s = items.get(this);
        s = [];
      }

      // printing the stack
      print() {
        let s = items.get(this);
        console.log(s.toString());
      }
    }

    // return Stack Class outside to use
    return Stack;
  })();
})();
