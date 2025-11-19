var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;

    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            mergedArray.push(nums1[i]);
            i++;
        } else {
            mergedArray.push(nums2[j]);
            j++;
        }
    }

    while (i < nums1.length) {
        mergedArray.push(nums1[i]);
        i++;
    }
    

    while (j < nums2.length) {
        mergedArray.push(nums2[j]);
        j++;
    }

    console.log(mergedArray)

    const mid = Math.floor(mergedArray.length / 2);

    console.log(mid);
    
    if (mergedArray.length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
};


console.log(findMedianSortedArrays([1,2], [3,4]))