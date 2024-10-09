const add=require('./stringCalculator');
test('returns 0 for empty string',()=>{
    expect(add("")).toBe(0);
});
test('returns number for single number',()=>{
    expect(add("5")).toBe(5);
});
test('returns sum for 2 numbers',()=>{
    expect(add("5,3")).toBe(8);
});
test('returns sum for n numbers',()=>{
    expect(add("5,3,4,1")).toBe(13);
});
test('returns sum for n numbers',()=>{
    expect(add("1\n2,10")).toBe(13);
});
test('returns sum for n numbers with different delimiter',()=>{
    expect(add("//;\n1;2")).toBe(3);
});
