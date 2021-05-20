class Queue {
    constructor() {
        this.elements = [];
    }

    enqueue(newElement) {
        this.elements.push(newElement);
    }

    dequeue() {
        return this.elements.shift();
    }

    size() {
        return this.elements.length;
    }
}

class Queue{
    constructor(){
      this.array = [];
    }
  
    enqueue(valor){
      this.array.push(valor);
    }
    dequeue(valor){
      return this.array.shift(valor)
    }
    size(){
      return this.array.length;
    }
  }

