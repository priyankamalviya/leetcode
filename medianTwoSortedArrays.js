// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function(A, B) {
//     let m = A.length, n = B.length;
//     let l = (m + n + 1) / 2;
//     let r = (m + n + 2) / 2;
//     return (getkth(A, 0, B, 0, l) + getkth(A, 0, B, 0, r)) / 2;


// };

// var getkth = function(A, aStart,  B, bStart,  k) {
//    if (aStart > A.length - 1) return B[bStart + k - 1];            
//    if (bStart > B.length - 1) return A[aStart + k - 1];                
//    if (k == 1) return Math.min(A[aStart], B[bStart]);

//    let aMid = Number.MAX_SAFE_INTEGER, bMid = Number.MAX_SAFE_INTEGER;
//    if (aStart + k/2 - 1 < A.length) aMid = A[aStart + k/2 - 1]; 
//    if (bStart + k/2 - 1 < B.length) bMid = B[bStart + k/2 - 1];        

//    if (aMid < bMid) 
//        return getkth(A, aStart + k/2, B, bStart, k - k/2);// Check: aRight + bLeft 
//    else 
//        return getkth(A, aStart, B, bStart + k/2, k - k/2);// Check: bRight + aLeft
// }

// console.log("median is:",findMedianSortedArrays([1,3],[2]));


// /**
//  * @param {number[]} nums1
//  * @param {number[]} nums2
//  * @return {number}
//  */
// var findMedianSortedArrays = function(nums1, nums2) {
//     if(!nums1 || !nums2){
//         return 0;
//     }
//     let i = 0;
//     let j = 0;
//     let resultIndex = 0;
//     let result = [];
//     while(i < nums1.length && j < nums2.length){
//         if(nums1[i] < nums2[j]){
//             result[resultIndex++] = nums1[i++];
//         }else if( nums1[i] == nums2[j]) {
//             result[resultIndex++] = nums1[i++];
//             result[resultIndex++] = nums2[j++];
//         }else {
//             result[resultIndex++] = nums2[j++];
//         }

//     }
//     while ( i < nums1.length){
//         result[resultIndex++] = nums1[i++];
//     }
//     while ( j < nums2.length){
//         result[resultIndex++] = nums2[j++];
//     }
//     if( result.length % 2 == 0){
//         let midIndex = result.length / 2;
//         return (result[midIndex] + result[midIndex - 1] )/2;
//     }
//     return result[resultIndex / 2];
// };

var findMedianSortedArrays = function (nums1, nums2) {
    let num = [];
    let index1 = 0;
    let index2 = 0;
    while (index1 < nums1.length && index2 < nums2.length) {
        if (nums1[index1] < nums2[index2]) {
            num.push(nums1[index1++]);
        } else {
            num.push(nums2[index2++]);
        }
    }
    if (index1 < nums1.length) {
        num = num.concat(nums1.slice(index1));
    }
    if (index2 < nums2.length) {
        num = num.concat(nums2.slice(index2));
    }
    let length = num.length;
    if (length % 2 === 1) {
        return num[parseInt((length - 1) / 2)];
    } else {
        return (num[parseInt((length - 1) / 2)] + num[parseInt((length) / 2)]) / 2;
    }
};

console.log("median is:", findMedianSortedArrays([1, 3], [2]));