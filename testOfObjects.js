// two objects which have data and next as members

let obj1 = {
  data: 1,
  next: null,
};
let obj2 = {
  data: 2,
  next: null,
};

// lets print them
console.log("obj1 and obj2 are:");
console.log(obj1, obj2);

// make another empty obj
let obj3 = {}; // this is syntax to make object
// it can even be like let obj3;
// because javascript is dynamic

// copy object 2 to object 3
obj3 = obj2;

// print obj3
console.log("obj3 is:");
console.log(obj3);

// lets make changes to object 2
obj2.data = 22;

// print obj 2 and obj 3
console.log("obj2 and obj3 are:");
console.log(obj2, obj3);

// ---- output
// value of data inside obj3 also changed

// means we did not copy obj2 to obj3
// obj2 and obj3 are two variables pointing at the same memory location

// ----- what we get
// through this syntac we do not copy an object to a vatiable
// we just pass the object as refference to the variable

// this feature is used by linked list in javascript

// linked list in js uses this feature as
obj1.next = obj2;
console.log("obj1 is now :");
console.log(obj1);
console.log("here obj1 do not actually contain obj2 it is just a reference");
