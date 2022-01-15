const Stack = require('../src/stacks');
const assert = require('assert');

let myStack

beforeEach(()=>{
    myStack = new Stack();
    console.log("Object",myStack)
})


describe('Stack Class',()=>{
    it('allows to push data into the stack',()=>{
        myStack.push(2)
        console.log(myStack.length())
        assert.equal(1,myStack.length())
    })

    it('allows to pop data from the stack',()=>{
        myStack.pop()
        assert.equal(0, myStack.length())
    })
})
