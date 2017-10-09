"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.swapItems = undefined;

var _ramda = require("ramda");

var swapItems = exports.swapItems = function swapItems(array, firstIndex, secondIndex) {
  var newArray = (0, _ramda.clone)(array);
  var copy = newArray[firstIndex];
  newArray[firstIndex] = newArray[secondIndex];
  newArray[secondIndex] = copy;
  return newArray;
};

var sortItem = function sortItem(itemPath, questionnaire, sortUp) {
  var firstIndex = (0, _ramda.last)(itemPath);
  var secondIndex = sortUp ? firstIndex - 1 : firstIndex + 1;
  var arrayPath = (0, _ramda.init)(itemPath);
  var array = (0, _ramda.path)(arrayPath, questionnaire);

  if (secondIndex < 0 || secondIndex >= array.length) {
    return questionnaire;
  }

  var newArray = swapItems(array, firstIndex, secondIndex);
  return (0, _ramda.assocPath)(arrayPath, newArray, questionnaire);
};

exports.default = sortItem;
//# sourceMappingURL=index.js.map