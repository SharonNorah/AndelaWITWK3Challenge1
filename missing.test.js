const missing = require('./missing');

test('It does not accept numbers as input', () => {
    expect(missing(5)).toBe('invalid input');
});
test('It does not accept strings as input', () => {
    expect(missing('string')).toBe('invalid input');
});

test('It does not miss any thing', () => {
    expect(missing([1, 2, 3, 4, 5, 6, 7])).toEqual([]);
});

test('It does miss something', () => {
    expect(missing([1, 3, 4, 5, 7])).toEqual([2, 6]);
});
