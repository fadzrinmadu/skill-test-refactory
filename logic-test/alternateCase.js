function alternateCase(str) {
  return str
    .split('')
    .map((value) => value === value.toUpperCase() ? value.toLowerCase() : value.toUpperCase())
    .join('');
}

console.log(alternateCase("abc"));
console.log(alternateCase("ABC"));
console.log(alternateCase("Hello World"));
