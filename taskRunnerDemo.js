class Runner {
    constructor(concurrency = 1) {
      this.concurrency = concurrency;
      this.waitList = [];
      this.count = 0;
      this.currentQ = [];
    }
  
    push(task) {
      this.waitList.push(task);
      this.run();
    }
  
    run() {
      let me = this;
      if (this.count < this.concurrency) {
        this.count++;
        if (this.waitList.length > 0) {
          let task = this.waitList.shift();
          let id = task.id;
          this.currentQ.push(id);
          this.showQ();
          task.task(function() {
            this.currentQ.splice(this.currentQ.indexOf(id), 1);
            this.showQ();
            this.count--;
            this.run();
          }.bind(me))
        }
      }
    }
  
    showQ() {
      let q = "";
      q = this.currentQ.join(', ');
      document.getElementById("running").innerHTML = q;
    }
  }
  
  let output = document.getElementById("output");
  
  let task1 = {
    id: 1,
    task: function(done) {
      let div = document.createElement("div");
      let node = document.createTextNode("Picking up Task1");
      div.appendChild(node);
      output.appendChild(div);
      setTimeout(function() {
        div = document.createElement("div");
        node = document.createTextNode("Finished Task1");
        div.appendChild(node);
        output.appendChild(div);
        done()
      }, 3000)
    }
  }
  let task2 = {
    id: 2,
    task: function(done) {
      let div = document.createElement("div");
      let node = document.createTextNode("Picking up Task2");
      div.appendChild(node);
      output.appendChild(div);
      setTimeout(function() {
        div = document.createElement("div");
        node = document.createTextNode("Finished Task2");
        div.appendChild(node);
        output.appendChild(div);
        done()
      }, 6000)
    }
  }
  let task3 = {
    id: 3,
    task: function(done) {
      this.id = "3";
      let div = document.createElement("div");
      let node = document.createTextNode("Picking up Task3");
      div.appendChild(node);
      output.appendChild(div);
      setTimeout(function() {
        div = document.createElement("div");
        node = document.createTextNode("Finished Task3");
        div.appendChild(node);
        output.appendChild(div);
        done()
      }, 10000)
    }
  }
  let task4 = {
    id: 4,
    task: function(done) {
      this.id = "4";
      let div = document.createElement("div");
      let node = document.createTextNode("Picking up Task4");
      div.appendChild(node);
      output.appendChild(div);
      setTimeout(function() {
        div = document.createElement("div");
        node = document.createTextNode("Finished Task4");
        div.appendChild(node);
        output.appendChild(div);
        done()
      }, 5000)
    }
  }
  let task5 = {
    id: 5,
    task: function(done) {
      this.id = "5";
      let div = document.createElement("div");
      let node = document.createTextNode("Picking up Task5");
      div.appendChild(node);
      output.appendChild(div);
      setTimeout(function() {
        div = document.createElement("div");
        node = document.createTextNode("Finished Task5");
        div.appendChild(node);
        output.appendChild(div);
        done()
      }, 6000)
    }
  }
  let task6 = {
    id: 6,
    task: function(done) {
      this.id = "6";
      let div = document.createElement("div");
      let node = document.createTextNode("Picking up Task6");
      div.appendChild(node);
      output.appendChild(div);
      setTimeout(function() {
        div = document.createElement("div");
        node = document.createTextNode("Finished Task6");
        div.appendChild(node);
        output.appendChild(div);
        done()
      }, 4000)
    }
  }
  let task7 = {
    id: 7,
    task: function(done) {
      this.id = "7";
      let div = document.createElement("div");
      let node = document.createTextNode("Picking up Task7");
      div.appendChild(node);
      output.appendChild(div);
      setTimeout(function() {
        div = document.createElement("div");
        node = document.createTextNode("Finished Task7");
        div.appendChild(node);
        output.appendChild(div);
        done()
      }, 5000)
    }
  }
  
  let r = new Runner(3);
  r.push(task1);
  r.push(task2);
  r.push(task3);
  r.push(task4);
  r.push(task5);
  r.push(task6);
  r.push(task7);

  
  // HTML

 /* Currently running
<div id="running">

</div>
<hr>
<div id="output">

</div>

*/