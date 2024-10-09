const add=require('./stringCalculator');
test('returns 0 for empty string',()=>{
    expect(add("")).toBe(0);
});
test('returns number for single number',()=>{
    expect(add("5")).toBe(5);
});
test('returns sum for 2 number',()=>{
    expect(add("5,3")).toBe(8);
});