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
        const leaderNode = this.traverse(index-1)
        const unwantedNode = leaderNode.next 
        leaderNode.next = unwantedNode.next
        this.length--
    }

    printList(){
        const arr = []
        for(let i=0; i<this.length; i++){
            arr.push(this.traverse(i).data)
        }
        console.log(arr)
    }
}



module.exports = LinkedList