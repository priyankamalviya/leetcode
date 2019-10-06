/** Question asked in Uber Freight Interview*/

class Task {
    constructor(time) {
        this.time = time;
        this.taskQueue = [];
    }

    run() {
        if (this.taskQueue.length) {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log("Hello World" + this.time);
                    resolve(this.time);
                }, this.time);
            })
        }
    }
}

// class called 'TaskManager'
// push(r), running the task -> printing out Hello world


class TaskManager {
    constructor(value, queueVal) {
        this.value = value;
        this.count = 0;
        this.taskQueue = queueVal;
    }


    push(task) {
        if (this.value > this.count) {
            this.count++;
            // running when this manager is running < 3 tasks
            // task.run().then((res) => {
            //     this.count--;
            //     console.log("see this res", res)
            //     // TODO: check waiting queue if there any waiting tasks, and then run
            //     // if there is waiting tasks, you can run one, and increment count again
            // });
        } else {
            // put the task into waiting queue
        }
    }
}

const task1 = new Task(2000);
const task2 = new Task(1000);
const task3 = new Task(3000);
const task4 = new Task(1500);
const task5 = new Task(500);
const taskManager = new TaskManager(3); // 3 is concurrency
taskManager.push(task1); // it will run
taskManager.push(task2); // it will run
taskManager.push(task3); // it will run
taskManager.push(task4); // it will wait until any of the previous task is over
taskManager.push(task5); // it will wait until any of the previous task is over