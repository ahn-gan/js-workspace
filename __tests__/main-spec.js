const add = require('../main');

it ('should add two numbers', () => {
    expect(add(3, 3)).toBe(6);
});