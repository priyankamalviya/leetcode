class HitCounter {
    constructor() {
        this.times = new Array(300);
        this.counter = new Array(300);
    }

    hits(timestamp) {
        let index = timestamp % 300;
        if (this.times[index] !== timestamp) {
            this.times[index] = timestamp;
            this.counter[index] = 1;
        } else {
            this.counter[index]++;
        }
    }

    getHits(timestamp) {
        let count = 0;
        for (let i = 0; i < 300; i++) {
            if (timestamp - this.times[i] < 300) {
                count += this.counter[i];
            }
        }
        return count;
    }
}

const res = new HitCounter();
const t1 = res.hits(1);
const t2 = res.hits(1);
const t3 = res.hits(1);
const t4 = res.hits(300);
const t5 = res.getHits(300);

console.log(t5);