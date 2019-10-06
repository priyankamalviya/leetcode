var findKthLargest = function(arr, k){
    var heap = [];
    for(var i=0;i<k;i++)
        insert(arr[i], heap);
    for (var i = k; i<arr.length; i++) {
        var min = heap[0];
        if(arr[i] > min){
            removeMin(heap,k);
            insert(arr[i],heap);
        }
    }
    return heap[0];
};

var left = function(i){
    return 2*i+1;
}
var right = function(i){
    return 2*i+2;
}
var parent = function(i){
    return Math.floor((i-1)/2);
}
var minHeap = function(arr){
    return arr[0];
}
var insert = function(val, arr){
    arr.push(val);
    upheap(arr,arr.length-1);
}
var upheap = function(arr, index){    
    var temp = 0;
    while(index > 0){
        var parentIndex = parent(index);
        if(arr[parentIndex] > arr[index]){
            temp = arr[parentIndex];
            arr[parentIndex] = arr[index];
            arr[index] = temp;
            index = parentIndex;
        }
        else{
            break;
        }
    }
}

var removeMin = function(a,k){
   // var min = minHeap(a);
    a[0] = a[a.length-1];
    a.pop();
    downheap(a,0,k);
    //return a[0];
}

var downheap = function(a, index,k){
    var temp=0;
    var smallest = index;
    var leftIndex = left(index);
    var rightIndex = right(index);
    if(leftIndex<a.length && a[leftIndex] < a[smallest]){
        smallest = leftIndex;
    }
    if(rightIndex<a.length && a[rightIndex] < a[smallest]){
        smallest = rightIndex;
    }
    if(index!=smallest){
        temp = a[index];
        a[index] = a[smallest];
        a[smallest] = temp;
        downheap(a,smallest);
    }
}

console.log(findKthLargest([3,2,1,5,6,4], 2));