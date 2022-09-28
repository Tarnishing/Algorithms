class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}



// linked list

class LinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    push(value) {
        const newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        }else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this
    }
    pop(){
        if (!this.head) return undefined;
        let temp = this.head
        let pre = this.head
        while (temp.next) {
            pre = temp
            temp = temp.next
        }
        this.tail = pre
        this.tail.next = null
        this.length--
        if (this.length === 0){
            this.head = null
            this.tail = null
        }
        return temp
    }
unshift(value){
    const newNode = new Node(value)
    if(!this.head){
        this.head = newNode
        this.tail = newNode
    } else {
        newNode.next = this.head
        this.head = newNode
    }
    this.length++
    return this
}
shift(){
    if (!this.head) return undefined
    let temp = this.head
    this.head = this.head.next
    temp.next = null
    this.length--
    if (this.length === 0){
        this.tail = null
    }
    return temp
}
get(index){
    if (index < 0 || index >= this.length){
        return undefined
    }
    let temp = this.head
    for (let i = 0; i < index; i++){
        temp = temp.next
    }
    return temp
}
set(index, value){
    let temp = this.get(index)
    if (temp){
        temp.value = value
        return true
    }
    return false
}
insert(index, value){
    if (index === 0) return this.unshift(value)
    if (index === this.length) return this.push(value)
    if (index < 0 || index > this.length) return false
    
    const newNode = new Node(value)
    const temp = this.get(index - 1)

    newNode.next = temp.next
    temp.next = newNode
    this.length++
    return true
}
remove(index){
    if (index === 0) return this.shift()
    if (index === this.length - 1) return this.pop()
    if (index < 0 || index >= this.length) return undefined

    const before = this.get(index - 1)
    const temp = before.next

    before.next = temp.next
    temp.next = null
    this.length--
    return temp
}
reverse(){
    let temp = this.head
    this.head = this.tail
    this.tail = temp
    let next = temp.next
    let prev = null
    for(let i = 0; i < this.length; i++){
        next = temp.next
        temp.next = prev
        prev = temp
        temp = next
    }
    return this
}
}


class DoublyLinkedList {
    constructor(value){
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }
    push(value){
        const newNode = new Node(value)
        if (!this.head){
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
            this.tail = newNode
        }
        this.length++
        return this
    }
    pop(){
        if (this.length === 0) return undefined
        let temp = this.tail
        if (this.length === 1){
            this.head = null
            this.tail = null
        } else {
            this.tail = this.tail.prev
        this.tail.next = null
        temp.prev = null
        }
        this.length--
        return temp
    }
    unshift(value){
        const newNode = new Node(value)
        if (this.length === 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.next = this.head
            this.head.prev = newNode
            this.head = newNode
        }
        this.length++
    return this
    }
    
}

// tree
/*
class _Node{
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

class BST {
    constructor(){  
        this.root = null
        
    }
}insert(value){
    const newNode = new Node(value)
    if (this.root === null){
        this.root = newNode
        return this
    }
    let temp = this.root
    while (true){
        if(newNode.vlue === temp.value) return undefined
        if (newNode.value < temp.value){
            
        }
    }
}
*/