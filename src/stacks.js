class Stack{
    constructor(){
        this.stack = [];
    }

    push(data){
        this.stack.push(data)
    }

    pop(){
        return this.stack.pop()
    }

    printStack(){
        var str = ""
        for(var i=0; i<this.stack.length; i++){
            str +=this.stack[i]+"\n"
        }
        return str
    }

    length(){
        return this.stack.length
    }
}

module.exports = Stack