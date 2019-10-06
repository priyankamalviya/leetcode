var kSmallestPairs = function(nums1, nums2, k) {
    if(nums1.length == 0 || nums2.length == 0){
        return [];
    }

    let q = new PriorityQ();
    
    for(let i=0; i<Math.min(nums1.length, k);i++){
        let n1 = nums1[i];
        for(let j=0; j<Math.min(nums2.length, k);j++){
            let n2 = nums2[j];
            let diff = n1 + n2;
            let obj = {
                'diff' : diff,
                'pair' : [n1, n2]
            };
            if(q.size() < k){
                q.insert(obj);
            }else{
                if(diff < q.arr[0].pair[0] + q.arr[0].pair[1]){
                    q.removeMax()
                    q.insert(obj);
                }
            }

        }
    }
    
    let ans = [];
    while(k > 0 && q.size() > 0){
        ans.push(q.removeMax().pair);
        k--;
    }
    
    return ans;
};


var PriorityQ = function(){
    this.arr = [];
    
    this.size = function(){
        return this.arr.length;
    }
        
    //o(1) + o(lg n);
    this.insert = function(x){
        this.arr.push(x);
        
        if(this.arr.length>1){
            this.siftUp(this.arr.length-1);
        }
    };
    
    //O(lg n)
    this.siftUp = function(i){
        let parent = Math.floor((i-1)/2);
        if(parent >= 0 && this.arr[parent].diff < this.arr[i].diff){
            this.swap(parent, i);
            this.siftUp(parent);
        }
    }
    
    //o(lg n)
    this.siftDown = function(i){
        let left = i*2+1;
        let right = i*2 + 2;
        let toSwap = null;
        
        if(left < this.arr.length && this.arr[left].diff > this.arr[i].diff){
            toSwap = left;
            if(right < this.arr.length && this.arr[right].diff > this.arr[left].diff){
                toSwap = right;
            }
        }else if(right < this.arr.length && this.arr[right].diff > this.arr[i].diff){
            toSwap = right;
        }
        
        if(toSwap != null){
            this.swap(toSwap, i);
            this.siftDown(toSwap);
        }
    }
    
    //O(1)
    this.swap = function(i, j){
        let temp = this.arr[i];
        this.arr[i] = this.arr[j];
        this.arr[j] = temp;
    }
    
    //O(1) + O(lg n)
    this.removeMax = function(){
        let min = this.arr.shift();
        
        if(this.arr.length > 1){
            let end = this.arr.pop();
            this.arr.unshift(end);
            this.siftDown(0);
        }
        
        return min;
    }
}

console.log(kSmallestPairs([1,1,2],[1,2,3],2));