class Runner {
    constructor(maxCount = 1) {
      this.taskQueue = [];
      this.maxCount = maxCount;
      this.currentCount = 0;
    }
  
    run() {
      if (this.taskQueue.length && this.currentCount < this.maxCount) {
        const task = this.taskQueue.shift();
        task();
      }
    }
  
    push(task, callback) {
      this.taskQueue.push(() => {
        this.currentCount++;
        task((...args) => {
          this.currentCount--;
          callback(...args);
          this.run();
        })
      })
      this.run();
    }
  }
  
  // Example usage
  const myCallback = (caller) => {
    console.log(`myCallback called by ${caller} ${new Date()}`);
  };
  
  const task1 = (callback) => {
    console.log(`task1 started ${new Date()}`);
    setTimeout(() => {
      callback('task1');
    }, 3000);
  };
  
  const task2 = (callback) => {
    console.log(`task2 started ${new Date()}`);
    setTimeout(() => {
      callback('task2');
    }, 3000);
  };
  
  const task3 = (callback) => {
    console.log(`task3 started ${new Date()}`);
    setTimeout(() => {
      callback('task3');
    }, 3000);
  };
  
  const task4 = (callback) => {
    console.log(`task4 started ${new Date()}`);
    setTimeout(() => {
      callback('task4');
    }, 3000);
  };
  
  const runner = new Runner(2);
  runner.push(task1, myCallback);
  runner.push(task2, myCallback);
  runner.push(task3, myCallback);
  runner.push(task4, myCallback);