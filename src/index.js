import {
  assocPath,
  last,
  path,
  init,
  clone
} from "ramda";

export const swapItems = (array, firstIndex, secondIndex) => {
  const newArray = clone(array);
  const copy = newArray[firstIndex];
  newArray[firstIndex] = newArray[secondIndex];
  newArray[secondIndex] = copy;
  return newArray;
}

const sortItem = (itemPath, questionnaire, sortUp) => {
  const firstIndex = last(itemPath);
  const secondIndex = sortUp
    ? firstIndex - 1
    : firstIndex + 1;
  const arrayPath = init(itemPath);
  const array = path(arrayPath, questionnaire);

  if (secondIndex < 0 || secondIndex >= array.length) {
    return questionnaire;
  }

  const newArray = swapItems(array, firstIndex, secondIndex);
  return assocPath(arrayPath, newArray, questionnaire);
}

export default sortItem;