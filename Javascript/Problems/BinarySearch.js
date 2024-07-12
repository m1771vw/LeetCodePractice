const binarySearch = (arr, target) => {
    let low = 0
    let high = arr.length - 1
    while(low < high) {
        let mid = Math.floor((high + low) / 2)
        if (arr[mid] === target) return mid 
        else if (arr[mid] < target) low = mid + 1
        else high = mid
    }
    return arr[low] === target ? low : -1
}

module.exports = binarySearch;