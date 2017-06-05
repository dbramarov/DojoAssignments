
function Node(value){
  this.val = value;
  this.next = null;
}

function SLL(){
  this.head = null;

  this.addFront = function(val){
    if(!this.head){
      console.log("Here")
      this.head = new Node(val);
      return this.head
    }
    var node = new Node(val)
    node.next = this.head
    this.head = node
    console.log("Here 2")
    return this.head
  }
}

myList = new SLL()

console.log(myList.head)
console.log(myList.addFront(3))
console.log(myList.addFront(2))
console.log(myList.addFront(1))
