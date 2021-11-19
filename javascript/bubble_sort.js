function bubbleSort(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log('Expecting: [1, 2, 3, 4]');
  console.log('=>', bubbleSort([3, 2, 1, 4]));

  console.log('');

  console.log('Expecting: [1, 2, 3]');
  console.log('=>', bubbleSort([1, 2, 3]));

  console.log('');

  console.log('Expecting: []');
  console.log('=>', bubbleSort([]));

  console.log('');

  console.log('Expecting: [1, 2, 3]');
  console.log('=>', bubbleSort([2, 3, 1]));

  console.log('');

  console.log('Expecting: [-100, -1, 1, 100]');
  console.log('=>', bubbleSort([-1, 100, -100, 1]));

  console.log('');

  console.log('Expecting: [0, .25, .5, .75, 1]');
  console.log('=>', bubbleSort([0.5, 1, 0.25, 0.75]));
}

module.exports = bubbleSort;

// Please add your pseudocode to this file
// And a written explanation of your solution

// console.log(
//   i - 1,
//   arr,
//   '[',
//   arr[j],
//   '&',
//   arr[j + 1],
//   ']',
//   arr[j] > arr[j + 1] ? 'SWAP!' : ''
// );
