function Node(data){
    this.data = data
    this.next =  null
}

class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    addNode(data){
        const node = new Node(data)
        if(!this.head){
            this.tail = node
            this.head = node
            this.length++
        }else{
            this.tail.next = node
            this.tail = node
            this.length++
        }
    }

    insertAfter(data, targetNodeData){
        let current = this.head
        while(current){
            // console.log(current.data)
            if(current.data = targetNodeData){
                const node = new Node(data)
                if(current === this.tail){
                    this.tail.next = node;
                    this.tail = node;
                    this.length++
                }else{
                    console.log("Match")
                    node.next = current.next
                    current.next = node;
                
                    this.length++
                    break
                }
            }
            current = current.next
        }
    }

    prepend(data){
        const node = new Node(data);
        node.next = this.head;
        this.head = node
        this.length++;
    }

    append(data){
        const node = new Node(data)
        this.tail.next = node
        this.tail = node
        this.length++
    }

    traverse(index){
        let counter = 0;
        let current = this.head;
        while(counter!==index){
            counter++;
            current = current.next;
        }

        return current
    }
    remove(index){
        // add conditions 
        const leaderNode = this.traverse(index-1)
        const unwantedNode = leaderNode.next 
        leaderNode.next = unwantedNode.next
        this.length--
    }

    printList(){
        const arr = []
        let currentNode =  this.head
        while(currentNode!==null){
            arr.push(currentNode.data)
            currentNode = currentNode.next
        }
        console.log(arr)
    }

    reverse() {
        let prev = null;
        let next = null;
        let current = this.head;
        while(current!==null){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        // this.head.next = null
        this.head = prev
        
        return this.printList()
      }
}

let myLinkedList = new LinkedList()
myLinkedList.addNode(1)
myLinkedList.addNode(2)
myLinkedList.addNode(3)
myLinkedList.addNode(3)

myLinkedList.printList()
myLinkedList.reverse()



module.exports = LinkedList