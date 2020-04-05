// linked list is the collection of nodes linked to each other

// WE make a node class which is used to make node objects
// each node object will have two data members "data", 'next'
// data will have the data stored in that node and next will reference to the next node

// now we can make a class of the Linked list . this class will have all functions related to the linked list
// or we can make linked list without class and make independent functions

class Node {
  constructor(_data) {
    this.data = _data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  // function to add data at the end of linked list
  add(_data) {
    let newNode = new Node(_data);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      // if we do not have the tail variable we have to itterate to the last node every time we want to add data
    }
    this.size++;

    console.log(`${_data} has been added to the linked list`);
  }

  // function to add data at position _x
  addAt(_data, _x) {
    if (_x < 0 || _x > this.size) {
      console.log("cannot insert here");
      return;
    }

    let newNode = new Node(_data);

    let current = head;
    //if _x = 2 then current has to move _x -1 times
  }

  // function to print list
  printList() {
    let current = this.head;

    // console.log(current);

    while (current) {
      // the condition will be false at current === null
      console.log(current.data);
      current = current.next;
    }
  }
}

let list1 = new LinkedList();

list1.add(1);
list1.add(2);
list1.add(3);
list1.add(4);
list1.add(5);

list1.printList();
