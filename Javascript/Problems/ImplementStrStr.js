const strStr = (haystack, needle) => {
    let index = 0
    if(haystack === needle) return index
    for(let i = 0; i < haystack.length; i++) {
        // console.log("haystack substring", haystack.substring(i, needle.length))
        if (haystack.substring(i, i+needle.length) === needle) {
            
            return i
        }
    }
    return -1
}


module.exports = strStr;

