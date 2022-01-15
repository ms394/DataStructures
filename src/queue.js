class Queue{
    constructor(){
        this.queue = [];
    }

    enqueue(data){
        this.queue.push(data)
    }

    dequeue(){
        return this.queue.shift()
    }

    length(){
        return this.queue.length
    }

    printQueue(){
        var str = '';
        for(var i=0; i<this.queue.length; i++){
            str += this.queue[i] + " "
        }
        return str
    }
}

module.exports = Queue