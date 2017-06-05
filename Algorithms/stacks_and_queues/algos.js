function SLNode(val){
  this.val = val;
  this.next = null;
}
function SLQueue(){
  var head = null;
  var tail = null;

  this.enqueue = function(val){
    var our_node = new SLNode(val);
    if(!head || !tail){
      head = our_node;
      tail = our_node;
    }
    else{
      tail.next = our_node;
      tail = our_node;
    }
    return this;
  }
  this.dequeue = function() {
    if(!head){
      return false;
    }
    else{
      var deq = head;
      head = deq.next;
      deq.next = null;
      // console.log(deq.val);
      return deq.val;
    }
  }
  this.top = function() {
    if(head){
      return head.val;
    }
  }
}

function CompareQ(q1,q2){
  var q1_arr = [];
  var q2_arr = [];
  //1) deque vals for q1 and push into array1
  while(q1.top()){
    q1_arr.push(q1.dequeue());
  }
  //2) deque vals for q2 and push into array2
  while(q2.top()){
    q2_arr.push(q2.dequeue());
  }
  //3) compare arrays, store boolean in variable to mark same or diff
  var flag = true;
  for(var i = 0; i <= q1_arr.length; i++){
    if(q1_arr[i] === q2_arr[i]){

    }
    else{
      flag = false;
    }

  }
  //4) after array compare, enque array1 to q1 and array2 to q2
  // pop enqueue
  for(var z = 0; z <= q1_arr.length-1; z++){
    var putter = q1_arr[z];
    q1.enqueue(putter);
  }
  for(var x = 0; x <= q2_arr.length-1; x++){
    var putter2 = q2_arr[x];
    q2.enqueue(putter2);
  }
  //5) return variable with boolean
  console.log(q1_arr);
  console.log(q2_arr);
  console.log(q1.top());
  console.log(q2.top());
  console.log(flag);
  return flag;
}

var my_Que = new SLQueue();
var my_Que_two = new SLQueue();

my_Que.enqueue(1);
my_Que.enqueue(2);
my_Que.enqueue(3);
my_Que.enqueue(4);
my_Que.enqueue(5);
// console.log(my_Que.dequeue);

my_Que_two.enqueue(1);
my_Que_two.enqueue(2);
my_Que_two.enqueue(55);
my_Que_two.enqueue(4);
my_Que_two.enqueue(5);
CompareQ(my_Que, my_Que_two);



//break
