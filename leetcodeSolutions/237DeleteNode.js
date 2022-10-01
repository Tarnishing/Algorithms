

var deleteNode = function(node) {
   let next = node.next.next
    node.next = node.next.next;
    }