function Node(data){
    this.previous = null
    this.data = data
    this.next = null
}


class DoublyLinkedList{
    constructor(){
        this.head = null,
        this.tail = null,
        this.length = 0 
    }

    addNode(data){
        const node = new Node(data)
        if(!this.head){
            this.head = node
            this.tail = node
        }else{
            node.previous = this.tail
            this.tail.next = node
            this.tail = node
        }
        this.length++
    }

    traverseNode(index){
        let counter = 0
        let current = this.head
        while(current!==index){
            counter++
            current = current.next
        }
        return current
    }

    prepend(data){
        const node = new Node(data)
        node.next = this.head
        this.head = node
        this.length++
    }

   printList(){
       current=this.head
       let list = []
       while(current){
           list.push(current.data)
           current = current.next
       }
       return list
   }


   insertAfter(data, index){
       if(index != this.length-1){
            const node = new Node(data)
            let currentNode = this.traverseNode(index)
            current.next.previous = node
            node.next = currentNode.next
            currentNode.next =  node
            node.previous = currentNode
            this.length++
       }else{
           this.addNode(data)
       }
       
   }

   removeNode(index){
       if(this.length == 1){
            this.head = null
            this.tail = null
       }else if(index === this.length-1){
            const previousNode = this.traverseNode(index-1)
            this.tail = previousNode
            previousNode.next = null
       }else if(index === 0){
           const nextNode = this.traverseNode(1)
           this.head = nextNode
           nextNode.previous = null
       }else{
            const previousNode = this.traverseNode(index-1)
            const currentNode = this.traverseNode(index)
            const nextNode = this.traverseNode(index+1)
            previousNode.next = currentNode.next
            nextNode.previous = previousNode
       }
       this.length--;
   }
}