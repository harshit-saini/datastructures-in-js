class Queue {
  constructor() {
    this.queue = [];
  }

  // ---- function to add data to the queue
  enqueue(_data) {
    this.queue.push(_data);
    // the push function adds the data to the end of the array
    console.log(`${_data} has been added to the queue`);
  }

  // ---- function to delete data from the queue
  dequeue() {
    let e = this.queue.shift();
    //the shift function deleted data from the start of the array
    console.log(`${e} has been removed from the queue`);
  }

  // ---- function to view data in the queue
  viewQueue() {
    this.queue.forEach((e) => {
      console.log(e);
    });
  }
}

let q = new Queue();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);

q.viewQueue();

q.dequeue();

q.viewQueue();
