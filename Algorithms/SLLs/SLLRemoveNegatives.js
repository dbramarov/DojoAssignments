function ListNode(value){
  this.val = value;
  this.next = null;
}
function SLL(){
  this.head = null;
  this.AddFront = function(value){
    if(!this.head){
      this.head = new ListNode(value);
      return this.head;
    }

    var current = new ListNode(value);
    current.next = this.head;
    this.head = current;
    return this.head;
  }
  this.ShowList = function(){
    var arr = [];
    if(!this.head){
      return false;
    }
    var current = this.head;
    while(current){
      arr.push(current.val);
      current = current.next;
    }
    return arr;
  }

  this.RemoveNeg = function(){
    if(!this.head){
      return false;
    }

    while(this.head){
      if (this.head.val < 0){
      this.head = this.head.next;
      }
      if(!this.head){
        return false;
      }
      if (this.head.val >= 0){
        break;
      }
    }

    var current = this.head;
    while(current.next){
      if(current.next.val < 0){
        current.next = current.next.next;
      }
      else{
      current = current.next;
      }
    }
    return this;
  }
}

var MyList = new SLL();

// MyList.AddFront(-1);
// MyList.AddFront(-2);
// MyList.AddFront(-3);
MyList.AddFront(88);
// MyList.AddFront(-1);
// MyList.AddFront(-1);
MyList.AddFront(2);
// MyList.AddFront(-3);
MyList.AddFront(1);
MyList.AddFront(2);
MyList.RemoveNeg();

console.log(MyList.head);
