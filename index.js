function changeCompletely(element, index, array) {
  array[index] = element

  return array
}




function doToElementsInArray(array, callback) {
  array.forEach(callback)
}
