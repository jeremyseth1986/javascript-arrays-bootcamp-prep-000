var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];
chocolateBars.push("twix");

function addElementToBeginningOfArray(array, element) {
 return [element, ...array];
}

