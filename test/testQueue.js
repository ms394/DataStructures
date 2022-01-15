const assert = require('assert')
const Queue = require('../src/queue')

let myQueue

beforeEach(()=>{
    myQueue = new Queue()
    console.log(myQueue)
})

describe('Queue Class',()=>{
    it('Enqueues a data',()=>{
        myQueue.enqueue('Mohsin')
        myQueue.enqueue('Zeba')
        assert.equal(2, myQueue.length())
    })

    it('Removes the first data',()=>{
        myQueue.enqueue('Mohsin')
        myQueue.enqueue('Zeba')
        const str = myQueue.dequeue()
        // console.log(myQueue.dequeue())
        assert.equal(str, "Mohsin")
    })

    //console.log(myQueue.printQueue())
})