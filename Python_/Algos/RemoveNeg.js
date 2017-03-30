function listNode(val){
	this.val = val;
	this.next = null;
}

function SLL(){
	this.head = null;
	this.addFront = function(val){
		if(!this.head){
			this.head = new listNode(val);
			return this.head;
		}
		else{
			var current = new listNode(val);
			current.next = this.head;
			this.head = current;
			return this;
		}
	}
	this.removeNeg = function(){
		if(!this.head){
			return False;
		}
		var current = this.head;
		var prev = null;
		var temp = null;
		while(this.headval<0){
			current=current.next;
			this.head=current;
		}
		while(current){
			if(current.next==null){
				return this.head;
			}
			if(current.nextval<0){
				prev = current;
				current = current.next;
				temp = current;
				prev.next = temp.next;
			}
			current=current.next;
		}
	}
	return this.head;
}

var myList = new SLL();

myList.addFront(-1);
myList.addFront(-2);
myList.addFront(-3);

myList.removeNeg();