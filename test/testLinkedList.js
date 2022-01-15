const assert = require('assert')
const LinkedList = require('../src/singlyLinkedList')

let myLinkedList

beforeEach(()=>{
    myLinkedList = new LinkedList()
})

describe('linked list',()=>{
    it('can add a Node',()=>{
        myLinkedList.addNode(1)
        myLinkedList.addNode(2)
        
    })

    it('can insert after a Node', ()=>{
        myLinkedList.addNode(1)
        myLinkedList.addNode(2)
        myLinkedList.addNode(3)
        myLinkedList.insertAfter(22,2)
        assert.equal(4, myLinkedList.length)
    })

    it('can prepend to head',()=>{
        myLinkedList.addNode(1)
        myLinkedList.addNode(2)
        myLinkedList.addNode(3)
        myLinkedList.prepend(123)
        assert.equal(123, myLinkedList.head.data)
    })

    it('can append at the end',()=>{
        myLinkedList.addNode(1)
        myLinkedList.addNode(2)
        myLinkedList.addNode(3)
        myLinkedList.append(222)
        assert.equal(222,myLinkedList.tail.data)
    })

    it('can traverse find the node at an index',()=>{
        myLinkedList.addNode(1)
        myLinkedList.addNode(2)
        myLinkedList.addNode(3)
        const node = myLinkedList.traverse(2)
        assert.equal(3, node.data)
    })

    it('can remove a node from an index',()=>{
        myLinkedList.addNode(1)
        myLinkedList.addNode(2)
        myLinkedList.addNode(3)
        myLinkedList.remove(1)
        assert.equal(3, myLinkedList.head.next.data)
        assert.equal(2, myLinkedList.length)
    })

    it('can print an entire LinkedList',()=>{
        myLinkedList.addNode(1)
        myLinkedList.addNode(2)
        myLinkedList.addNode(3)
        myLinkedList.printList()
    })

})
