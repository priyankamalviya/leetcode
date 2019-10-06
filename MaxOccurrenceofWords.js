// input string: Hello world hello universe
// output: hello


// step 0: strip off any special characters or numbers so only a set of words remain - use .replace along with regex
// step 1 : put all the words in an array
// step 2: iterate and put words and their count in a map
// step 3: find the word with max count in the map

function maxFrequency(str) {

    let arr = str.split(' ').toLowerCase();
    let map = {};
    
    // hello world hello universe
   for(let i=0; i< arr.length; i++) {
       let count = 0;
       map[arr[i]] = map[arr[i]]++ || 1;
   }
       
    let max = '';
    let maxCount = 0;
    
    
    for(let item in map) {
        if(map[item] > maxCount) {
            maxCount = map[item];
            max = item;
        }
    }
    
    return max;
}