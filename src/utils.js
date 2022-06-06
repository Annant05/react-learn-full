console.log('utils.js is running');

// const square = (x) => x * x;
// const add = (a, b) => a + b;

//export has two types -> default export and named exports
// example of named export
// alternate way for named export.
export const square = (x) => x * x;
export const add = (a, b) => a + b;

const subtract = (a, b) => a - b;
export default subtract;
// below is also valid
// export default (a, b) => a - b;

// export { square, add, subtract as default };
