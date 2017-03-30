function Node(val){
	this.val = val;
	this.next = null;
}

function SLL(){
	this.head = null;

	this.addFront = function(val){
		if(!this.head){
			this.head = new Node(val);
			return this;
		}
		var node = new Node(val);
		node.next = this.head;
		this.head = node;
		return this;
	}
	this.splitOnVal = function(num){
		if(!this.head){
			return false;
		}
		var current = this.head;
		var temp = null;
		while(current){
			if(current.val == num){
				temp = current.next;
				current.next = null;
			}
			if(current.next==null){
				if(current.val == num){
                	list.head = current;
					return list.head;
				}
				break;
			}
			if(current.next.val == num){
				temp = current.next;
				current.next = null;
			}
			current = current.next;
		}
		var list = new SLL();
		list.head = temp;
		return list.head;
	}
}

var list = new SLL()

list.addFront(5)
list.addFront(2)
list.addFront(4)
list.addFront(8)

console.log(list.splitOnVal(8));