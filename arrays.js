var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
chocolateBars.push("twix");

function addElementToBeginningOfArray(array, element) {
  [element,...array];
}

function addElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}