//BST New Node function
function BST_node(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

function BST() {
  this.root = null;

  //Binary Search Tree Add Function
  this.add = function(val){
    if(!this.root){
      this.root = new BST_node(val);
      return;
    }

    var current = this.root;
    var Node = new BST_node(val);
    while(current){
      if(val < current.val){
        if(!current.left){
          current.left = Node;
          break;
        }
        else{
          current = current.left;
        }
      }
      else{
        if(!current.right){
          current.right = Node;
          break;
        }
        else{
          current = current.right;
        }
      }
    }
  }
  this.min = function() {
    if(!this.root){
      return false;
    }
    var current = this.root;
    var min = current.val;
    while (current){
      if(current.left){
        current = current.left;
        min = current.val;
      }
      else{
        console.log(min);
        return min;
      }
    }
  }
  this.max = function() {
    if(!this.root){
      return false;
    }
    var current = this.root;
    var max = current.val;
    while (current){
      if(current.right){
        current = current.right;
        max = current.val;
      }
      else{
        console.log(max);
        return max;
      }
    }
  }
  this.size = function(node) {
    if(node === undefined){
      node = this.root;
    }
    if(node!=null){
      if(node.right == null && node.left == null){
        return 1;
      }
      return 1+ this.size(node.left) + this.size(node.right);

      }
    else{
      return 0;
    }
  },

  this.contains = function(value){
    var found       = false;
    var current     = this.root;
    while(!found && current){
        if(value < current.val){
            current = current.left;
        }
        else if(value > current.val){
            current = current.right;
        }
        else {
            found = true;
        }
    }
    console.log(found);
    return found;
  }

  function HeightHelper(node){
    if (node) {
      return 1 + Math.max(HeightHelper(node.left), HeightHelper(node.right));
    }
    else {
      return 0;
    }
  }
  this.height = function(){
    var node = this.root;
    var ans = HeightHelper(node);
    console.log(ans);
    return ans;
  }
  function heighter(node){
    var ans = HeightHelper(node);
    // console.log(ans);
    return ans;
  }
  this.isBalanced = function(node){
    if(node === undefined){
      var node = this.root;
    }
    if(!node || (!node.left && !node.right)){
      console.log('is balaced');
      return true;
    }
    var diff = (heighter(node.left) - heighter(node.right))
    // console.log(diff)
    if(diff > 1 || diff < -1){
      console.log('is not balanced');
      return false;
    }
    else{
      return this.isBalanced(node.left) && this.isBalanced(node.right);
    }
  }
  this.Pre = function(node) {
    if(node === undefined){
      node = this.root;
    }
    if(node){
      console.log(node.val);
      this.Pre(node.left);
      this.Pre(node.right);
    }
  }
  this.Post = function(node) {
    if(node === undefined){
      node = this.root;
    }
    if(node){
      this.Post(node.left);
      this.Post(node.right);
      console.log(node.val);
    }
  }
  this.InOrder = function(node) {
    if(node === undefined){
      node = this.root;
    }
    if(node){
      this.InOrder(node.left);
      console.log(node.val);
      this.InOrder(node.right);
    }
  }
  this.Breadth = function(){
    
  }
}



var tree = new BST();
tree.add(8);
tree.add(7);
tree.add(6);
tree.add(7.5);
tree.add(9);
tree.add(22);
tree.add(23);
tree.add(8.5)
tree.add(24);
tree.add(25);
tree.add(26);
// tree.InOrder();
// tree.Post();
// tree.Pre();
// tree.height();
// console.log(tree.isBalanced());
// console.log(tree.height());
// tree.contains(23);
// console.log(tree);
// tree.min()
// tree.max()
// tree.size()
// console.log(tree.size());
