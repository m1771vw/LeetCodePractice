const isPowerOfTwo = require('../Problems/PowerOfTwo')  

test('Power Of Two Test 1: 1 is a power of two', () => {
    expect(isPowerOfTwo(1)).toEqual(true);
}); 

test('Power Of Two Test 2: 16 is a power of two', () => {
    expect(isPowerOfTwo(16)).toEqual(true);
}); 

test('Power Of Two Test 3: 3 is a not power of two', () => {
    expect(isPowerOfTwo(3)).toEqual(false);
}); 